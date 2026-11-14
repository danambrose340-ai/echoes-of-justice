import type { NextApiRequest, NextApiResponse } from 'next';
import { getApiBaseUrl } from '@/lib/api';
import { forwardJson } from '@/lib/server-api';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 8;
const MAX_TRACKED_CLIENTS = 10_000;
const RATE_LIMIT_SECRET = process.env.CONTACT_RATE_LIMIT_SECRET || process.env.NEXT_PUBLIC_SITE_URL || 'echoes-of-justice';
const requestCounts = new Map<string, { count: number; startedAt: number }>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const { name, email, subject, message } = body as Record<string, unknown>;
  if (
    typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 120 ||
    typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== 'string' || subject.trim().length > 120 ||
    typeof message !== 'string' || message.trim().length < 5 || message.length > 5000
  ) {
    return res.status(400).json({ error: 'Please check the required contact fields.' });
  }

  if (!getApiBaseUrl()) {
    return res.status(503).json({ error: 'The contact service is not configured yet. Please try again later.' });
  }

  const clientAddress = req.socket.remoteAddress || 'unknown';
  const key = `${RATE_LIMIT_SECRET}:${clientAddress}`.slice(0, 160);
  const now = Date.now();
  for (const [clientKey, count] of requestCounts) {
    if (now - count.startedAt >= WINDOW_MS) requestCounts.delete(clientKey);
  }
  const existing = requestCounts.get(key);
  if (existing && existing.count >= MAX_REQUESTS) {
    res.setHeader('Retry-After', String(Math.ceil((existing.startedAt + WINDOW_MS - now) / 1000)));
    return res.status(429).json({ error: 'Too many messages. Please try again later.' });
  }
  if (requestCounts.size >= MAX_TRACKED_CLIENTS && !existing) {
    return res.status(503).json({ error: 'The contact service is temporarily busy. Please try again later.' });
  }
  requestCounts.set(key, existing ? { ...existing, count: existing.count + 1 } : { count: 1, startedAt: now });

  await forwardJson('/contact', {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  }, res);
}
