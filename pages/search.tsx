'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialBadge from '@/components/EditorialBadge';
import type { Case, MissingPerson, Story } from '@/types';

interface SearchResults {
  q: string;
  total: number;
  cases: Case[];
  missing: MissingPerson[];
  stories: Story[];
  source?: string;
}

export default function SearchPage() {
  const router = useRouter();
  const rawQ = String(router.query.q || '');
  const [query, setQuery] = useState(rawQ);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!rawQ) return;
    setQuery(rawQ);
    runSearch(rawQ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawQ]);

  const runSearch = async (term: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
      const data = await res.json();
      if (data?.total === undefined) {
        throw new Error('Unexpected search response');
      }
      setResults(data);
    } catch {
      setError('Search is temporarily unavailable. Please try again.');
    } finally {
      setLoading(false);
      ranRef.current = true;
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const isIdle = !rawQ && !ranRef.current;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Search</p>
          <h1 className="mt-2 font-serif text-4xl font-bold">Find a Case</h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            Search across documented cases, missing persons, and family stories by name, location,
            or details.
          </p>
        </header>

        <form onSubmit={submit} role="search" className="flex max-w-2xl gap-3">
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Colorado, a name, or a case number"
            className="flex-1 rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="rounded bg-deep-red px-6 py-3 font-semibold uppercase tracking-wider transition hover:bg-red-800 disabled:opacity-60"
          >
            {loading ? 'Searching…' : 'Search'}
          </button>
        </form>

        {error && <p className="mt-6 text-red-400">{error}</p>}

        {isIdle && (
          <p className="mt-8 text-gray-500">
            Enter a search term to find documented cases, missing persons, and stories.
          </p>
        )}

        {results && !error && (
          <div className="mt-10">
            <p className="text-sm text-gray-400">
              {results.total} result{results.total === 1 ? '' : 's'} for “{results.q}”
            </p>

            {results.cases.length > 0 && (
              <section className="mt-8" aria-labelledby="results-cases">
                <h2 id="results-cases" className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Cases
                </h2>
                <ul className="mt-4 space-y-3">
                  {results.cases.map((item) => (
                    <li key={item.id}>
                      <Link href={`/cases/${item.slug}`} className="group block rounded-lg border border-gray-800 bg-black/40 p-4 transition hover:border-gray-600">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-lg font-bold group-hover:text-red-300">{item.name}</h3>
                          <EditorialBadge type="unconfirmed" />
                        </div>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.location} · {item.date} — {item.summary}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {results.missing.length > 0 && (
              <section className="mt-8" aria-labelledby="results-missing">
                <h2 id="results-missing" className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Missing Persons
                </h2>
                <ul className="mt-4 space-y-3">
                  {results.missing.map((item) => (
                    <li key={item.id}>
                      <Link href={`/missing/${item.slug}`} className="group block rounded-lg border border-gray-800 bg-black/40 p-4 transition hover:border-gray-600">
                        <h3 className="font-serif text-lg font-bold group-hover:text-red-300">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-400">
                          Last seen {item.lastSeen} · {item.lastLocation}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {results.stories.length > 0 && (
              <section className="mt-8" aria-labelledby="results-stories">
                <h2 id="results-stories" className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
                  Stories
                </h2>
                <ul className="mt-4 space-y-3">
                  {results.stories.map((item) => (
                    <li key={item.id}>
                      <Link href={`/stories/${item.slug}`} className="group block rounded-lg border border-gray-800 bg-black/40 p-4 transition hover:border-gray-600">
                        <h3 className="font-serif text-lg font-bold group-hover:text-red-300">{item.name}</h3>
                        <p className="mt-1 text-sm italic text-gray-400">{item.quote}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {results.total === 0 && (
              <p className="mt-8 text-gray-500">
                No results found. Try a different name, location, or keyword.
              </p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

