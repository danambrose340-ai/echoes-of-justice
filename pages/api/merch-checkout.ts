import type { NextApiRequest, NextApiResponse } from 'next';
import { siteConfig } from '@/data/site-config';
import { isTrustedCheckoutUrl } from '@/lib/server-api';
import { getApiBaseUrl } from '@/lib/api';

interface CartRequestLine {
  id: number;
  quantity: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!getApiBaseUrl()) {
    return res.status(503).json({ error: 'Merchandise checkout is temporarily unavailable.' });
  }

  const body = Array.isArray(req.body) ? req.body : [];
  if (body.length < 1 || body.length > 20) {
    return res.status(400).json({ error: 'Your cart must contain between 1 and 20 products.' });
  }

  const lines: Array<{ id: number; name: string; price: number; quantity: number }> = [];
  const quantities = new Map<number, number>();
  for (const candidate of body as unknown[]) {
    if (!candidate || typeof candidate !== 'object') {
      return res.status(400).json({ error: 'The cart contains an invalid product.' });
    }
    const line = candidate as Partial<CartRequestLine>;
    if (!Number.isSafeInteger(line.id) || !Number.isSafeInteger(line.quantity) || (line.quantity as number) < 1 || (line.quantity as number) > 20) {
      return res.status(400).json({ error: 'The cart contains an invalid product or quantity.' });
    }
    const item = siteConfig.merch.find((product) => product.id === line.id);
    if (!item) return res.status(400).json({ error: 'The cart contains an unavailable product.' });
    quantities.set(item.id, (quantities.get(item.id) || 0) + (line.quantity as number));
  }

  for (const [id, quantity] of quantities) {
    if (quantity > 20) return res.status(400).json({ error: 'A product quantity exceeds the allowed limit.' });
    const item = siteConfig.merch.find((product) => product.id === id);
    if (item) lines.push({ id: item.id, name: item.name, price: item.price, quantity });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const baseUrl = getApiBaseUrl();
    const response = await fetch(`${baseUrl}/merch/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lines),
      signal: controller.signal,
    });
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return res.status(502).json({ error: 'The checkout service returned an unexpected response.' });
    }
    const data = await response.json() as { checkout_url?: unknown };
    if (!response.ok || !isTrustedCheckoutUrl(data.checkout_url)) {
      return res.status(502).json({ error: 'A secure checkout could not be started.' });
    }
    return res.status(200).json({ checkout_url: data.checkout_url });
  } catch {
    return res.status(502).json({ error: 'Merchandise checkout is temporarily unavailable.' });
  } finally {
    clearTimeout(timeout);
  }
}
