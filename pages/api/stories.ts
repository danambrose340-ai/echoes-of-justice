import type { NextApiRequest, NextApiResponse } from 'next';
import { getApiBaseUrl } from '@/lib/api';
import { forwardJson } from '@/lib/server-api';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_CLIENTS = 10_000;
const requestCounts = new Map<string, { count: number; startedAt: number }>();
const RATE_LIMIT_SECRET = process.env.STORY_RATE_LIMIT_SECRET || process.env.NEXT_PUBLIC_SITE_URL || 'echoes-of-justice';

function getClientKey(req: NextApiRequest): string {
  const address = req.socket.remoteAddress || 'unknown';
  return `${RATE_LIMIT_SECRET}:${address}`.slice(0, 160);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const { name, email, subject_name, relationship, story, publication_consent } = body as Record<string, unknown>;
  if (
    typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 120 ||
    typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject_name !== 'string' || subject_name.trim().length < 1 || subject_name.trim().length > 120 ||
    (relationship !== undefined && (typeof relationship !== 'string' || relationship.length > 80)) ||
    typeof story !== 'string' || story.trim().length < 20 || story.length > 5000 ||
    (publication_consent !== 'yes' && publication_consent !== true)
  ) {
    return res.status(400).json({ error: 'Please check the required fields and consent.' });
  }

  if (!getApiBaseUrl()) {
    return res.status(503).json({ error: 'Story submissions are temporarily unavailable. Please try again later.' });
  }

  const key = getClientKey(req);
  const now = Date.now();
  for (const [clientKey, count] of requestCounts) {
    if (now - count.startedAt >= WINDOW_MS) requestCounts.delete(clientKey);
  }
  const entry = requestCounts.get(key);
  if (entry && entry.count >= MAX_REQUESTS) {
    res.setHeader('Retry-After', String(Math.ceil((entry.startedAt + WINDOW_MS - now) / 1000)));
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
  }
  if (requestCounts.size >= MAX_TRACKED_CLIENTS && !entry) {
    return res.status(503).json({ error: 'Submissions are temporarily busy. Please try again later.' });
  }
  requestCounts.set(key, entry ? { ...entry, count: entry.count + 1 } : { count: 1, startedAt: now });

  await forwardJson('/stories', {
    name: name.trim(),
    email: email.trim(),
    subject_name: subject_name.trim(),
    relationship: typeof relationship === 'string' ? relationship.trim() : '',
    story: story.trim(),
    publication_consent: true,
    consent_to_publish: false,
  }, res);
}
