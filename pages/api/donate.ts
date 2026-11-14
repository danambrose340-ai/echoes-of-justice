import type { NextApiRequest, NextApiResponse } from 'next';
import { getApiBaseUrl } from '@/lib/api';
import { isTrustedCheckoutUrl } from '@/lib/server-api';

const BACKEND = getApiBaseUrl().replace(/\/$/, '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const { amount, donation_type, donor_name, donor_email } = body as Record<string, unknown>;
  const amountNum = Number(amount);
  if (!Number.isFinite(amountNum) || amountNum < 1 || amountNum > 100_000 || Math.round(amountNum * 100) !== amountNum * 100) {
    return res.status(400).json({ error: 'Enter a valid donation amount between $1 and $100,000.' });
  }
  if (donation_type !== undefined && donation_type !== 'one-time' && donation_type !== 'monthly') {
    return res.status(400).json({ error: 'Choose a valid donation frequency.' });
  }
  if ((donor_name !== undefined && (typeof donor_name !== 'string' || donor_name.length > 120)) ||
      (donor_email !== undefined && (typeof donor_email !== 'string' || donor_email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor_email)))) {
    return res.status(400).json({ error: 'Check the donor contact information.' });
  }
  if (!BACKEND) {
    return res.status(503).json({ error: 'Donation checkout is temporarily unavailable. Please try again later.' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const backendRes = await fetch(`${BACKEND}/donations/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amountNum,
        donation_type: donation_type || 'one-time',
        donor_name: typeof donor_name === 'string' ? donor_name.trim() : '',
        donor_email: typeof donor_email === 'string' ? donor_email.trim() : '',
      }),
      signal: controller.signal,
    });
    const contentType = backendRes.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return res.status(502).json({ error: 'The checkout service returned an unexpected response.' });
    }
    const data = await backendRes.json() as { checkout_url?: unknown };
    if (!backendRes.ok || !isTrustedCheckoutUrl(data.checkout_url)) {
      return res.status(502).json({ error: 'Secure donation checkout could not be started.' });
    }
    return res.status(200).json({ checkout_url: data.checkout_url });
  } catch {
    return res.status(502).json({ error: 'Donation checkout is temporarily unavailable. Please try again later.' });
  } finally {
    clearTimeout(timeout);
  }
}
