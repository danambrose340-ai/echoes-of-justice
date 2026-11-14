import type { NextApiResponse } from 'next';
import { getApiBaseUrl } from '@/lib/api';

export async function forwardJson(
  path: string,
  payload: unknown,
  res: NextApiResponse,
): Promise<void> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    res.status(503).json({ error: 'This service is not configured yet.' });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      res.status(502).json({ error: 'The service returned an unexpected response.' });
      return;
    }
    const data: unknown = await response.json();
    res.status(response.status).json(data);
  } catch {
    res.status(502).json({ error: 'The service is temporarily unavailable.' });
  } finally {
    clearTimeout(timeout);
  }
}

export function isTrustedCheckoutUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && (url.hostname === 'checkout.stripe.com' || url.hostname === 'buy.stripe.com' || url.hostname === 'donate.stripe.com');
  } catch {
    return false;
  }
}
