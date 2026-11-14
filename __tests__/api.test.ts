/**
 * @jest-environment node
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import { describe, expect, it } from '@jest/globals';
import searchHandler from '@/pages/api/search';
import merchHandler from '@/pages/api/merch-checkout';
import donateHandler from '@/pages/api/donate';
import contactHandler from '@/pages/api/contact';
import storiesHandler from '@/pages/api/stories';

function mockRes() {
  const res = {
    statusCode: 200,
    body: undefined as unknown,
    headers: {} as Record<string, string>,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
    setHeader(name: string, value: string) {
      this.headers[name] = value;
      return this;
    },
  };
  return res;
}

function call(handler: (req: NextApiRequest, res: NextApiResponse) => unknown, req: Partial<NextApiRequest>) {
  const res = mockRes();
  const full = { method: 'GET', query: {}, body: undefined, socket: { remoteAddress: '203.0.113.7' }, ...req } as unknown as NextApiRequest;
  return Promise.resolve(handler(full, res as unknown as NextApiResponse)).then(() => res);
}

describe('GET /api/search', () => {
  it('rejects non-GET methods', async () => {
    const res = await call(searchHandler, { method: 'POST' });
    expect(res.statusCode).toBe(405);
  });

  it('requires a search term', async () => {
    const res = await call(searchHandler, { query: { q: '   ' } });
    expect(res.statusCode).toBe(400);
  });

  it('returns structured results for a term', async () => {
    const res = await call(searchHandler, { query: { q: 'colorado' } });
    expect(res.statusCode).toBe(200);
    const body = res.body as { total: number; cases: unknown[]; missing: unknown[]; stories: unknown[] };
    expect(Array.isArray(body.cases)).toBe(true);
    expect(body.total).toBe(body.cases.length + body.missing.length + body.stories.length);
  });
});

describe('POST /api/merch-checkout', () => {
  it('rejects non-POST methods', async () => {
    const res = await call(merchHandler, { method: 'GET' });
    expect(res.statusCode).toBe(405);
  });

  it('returns 503 when the backend is not configured', async () => {
    delete process.env.NEXT_PUBLIC_API_URL;
    delete process.env.API_BASE_URL;
    const res = await call(merchHandler, { method: 'POST', body: [{ id: 1, quantity: 1 }] });
    expect(res.statusCode).toBe(503);
  });
});

describe('POST /api/donate', () => {
  it('rejects amounts outside the allowed range', async () => {
    const res = await call(donateHandler, { method: 'POST', body: { amount: 0 } });
    expect(res.statusCode).toBe(400);
  });

  it('rejects an invalid donor email', async () => {
    const res = await call(donateHandler, { method: 'POST', body: { amount: 10, donor_email: 'not-an-email' } });
    expect(res.statusCode).toBe(400);
  });
});

describe('POST /api/contact', () => {
  it('rejects a malformed email', async () => {
    const res = await call(contactHandler, {
      method: 'POST',
      body: { name: 'A', email: 'bad', subject: 'Hi', message: 'Hello there' },
    });
    expect(res.statusCode).toBe(400);
  });

  it('rejects a message that is too short', async () => {
    const res = await call(contactHandler, {
      method: 'POST',
      body: { name: 'A', email: 'a@example.com', subject: 'Hi', message: 'no' },
    });
    expect(res.statusCode).toBe(400);
  });
});

describe('POST /api/stories', () => {
  it('requires publication consent', async () => {
    const res = await call(storiesHandler, {
      method: 'POST',
      body: {
        name: 'A',
        email: 'a@example.com',
        subject_name: 'B',
        story: 'A story that is long enough to pass validation.',
        publication_consent: false,
      },
    });
    expect(res.statusCode).toBe(400);
  });
});
