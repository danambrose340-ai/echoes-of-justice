import type { NextApiRequest, NextApiResponse } from 'next';
import { getApiBaseUrl } from '@/lib/api';
import { forwardJson } from '@/lib/server-api';

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 4;
const MAX_TRACKED_CLIENTS = 10_000;
const RATE_LIMIT_SECRET =
  process.env.INTAKE_RATE_LIMIT_SECRET || process.env.NEXT_PUBLIC_SITE_URL || 'echoes-of-justice';
const requestCounts = new Map<string, { count: number; startedAt: number }>();

const ALLOWED_DOCUMENTS = [
  'court petition or order',
  'removal affidavit',
  'police report',
  'case plan or safety plan',
  'agency correspondence',
  'texts, emails or voicemails',
  'audio or video recording',
  'other records',
];

function isShortString(value: unknown, max: number, min = 0): value is string {
  return typeof value === 'string' && value.trim().length >= min && value.length <= max;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const {
    name,
    email,
    phone,
    county,
    agency,
    case_number,
    removal_date,
    has_counsel,
    documents,
    narrative,
    contact_consent,
  } = body as Record<string, unknown>;

  const documentsList = Array.isArray(documents)
    ? documents.filter((item): item is string => ALLOWED_DOCUMENTS.includes(String(item)))
    : [];

  if (
    !isShortString(name, 120, 1) ||
    !isShortString(email, 254, 5) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !isShortString(county, 80, 1) ||
    !isShortString(narrative, 6000, 40) ||
    (phone !== undefined && phone !== '' && !isShortString(phone, 40)) ||
    (agency !== undefined && agency !== '' && !isShortString(agency, 120)) ||
    (case_number !== undefined && case_number !== '' && !isShortString(case_number, 120)) ||
    (removal_date !== undefined && removal_date !== '' && !isShortString(removal_date, 40)) ||
    (has_counsel !== 'yes' && has_counsel !== 'no' && has_counsel !== 'unsure') ||
    documentsList.length > ALLOWED_DOCUMENTS.length ||
    (contact_consent !== 'yes' && contact_consent !== true)
  ) {
    return res.status(400).json({ error: 'Please check the required fields and consent.' });
  }

  if (!getApiBaseUrl()) {
    return res.status(503).json({ error: 'Case intake is not available yet. Please try again later.' });
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
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' });
  }
  if (requestCounts.size >= MAX_TRACKED_CLIENTS && !existing) {
    return res.status(503).json({ error: 'Intake is temporarily busy. Please try again later.' });
  }
  requestCounts.set(key, existing ? { ...existing, count: existing.count + 1 } : { count: 1, startedAt: now });

  await forwardJson('/due-process', {
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === 'string' ? phone.trim() : '',
    county: county.trim(),
    agency: typeof agency === 'string' ? agency.trim() : '',
    case_number: typeof case_number === 'string' ? case_number.trim() : '',
    removal_date: typeof removal_date === 'string' ? removal_date.trim() : '',
    has_counsel,
    documents: documentsList,
    narrative: narrative.trim(),
    contact_consent: true,
    publication_consent: false,
  }, res);
}
