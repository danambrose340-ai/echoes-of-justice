import type { NextApiRequest, NextApiResponse } from 'next';
import { siteConfig } from '@/data/site-config';
import type { Case, MissingPerson, Story } from '@/types';

function matches(query: string, fields: Array<string | undefined>): boolean {
  const searchable = fields.filter(Boolean).join(' ').toLocaleLowerCase();
  return query.split(/\s+/).every((term) => searchable.includes(term));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawQuery = typeof req.query.q === 'string' ? req.query.q : '';
  const q = rawQuery.trim().slice(0, 100);
  if (!q) return res.status(400).json({ error: 'A search term is required.' });

  const cases: Case[] = siteConfig.cases.filter((item) => matches(q, [
    item.name, item.location, item.date, item.status, item.summary, item.facts, item.meta,
  ]));
  const missing: MissingPerson[] = siteConfig.missingPersons.filter((item) => matches(q, [
    item.name, item.lastSeen, item.lastLocation, item.description, item.caseOnFile, item.lawEnforcement?.agency,
  ]));
  const stories: Story[] = siteConfig.stories.filter((item) => matches(q, [
    item.name, item.sub, item.quote, item.foot, item.relationship, item.location, item.narrative,
  ]));

  return res.status(200).json({ q, total: cases.length + missing.length + stories.length, cases, missing, stories, source: 'site-records' });
}
