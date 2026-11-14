import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialBadge from '@/components/EditorialBadge';

const standards = [
  {
    badge: 'verified' as const,
    title: 'Verified Facts',
    body: 'Backed by primary documents (court records, police reports, autopsy reports), direct observation, or multiple corroborating independent sources. These are the factual backbone of a case.',
    example: 'A court docket entry, a public arrest record, or a statement confirmed by two unrelated witnesses.',
  },
  {
    badge: 'allegation' as const,
    title: 'Allegations',
    body: 'Claims made by a named source — a witness, an attorney, a family representative — that we have not yet independently confirmed. They are attributed and clearly labeled so readers know what is being claimed versus what is established.',
    example: '“The family alleges…” or “An attorney for the family states…”',
  },
  {
    badge: 'family-statement' as const,
    title: 'Family Statements',
    body: 'Memories, recollections, and statements provided directly by family members or their representatives, published with their consent. These are recorded as the family’s account, not as adjudicated fact.',
    example: 'A personal account of the night the victim was last seen.',
  },
  {
    badge: 'unconfirmed' as const,
    title: 'Unconfirmed',
    body: 'Information that is circulating — from social media, unverified reports, or unnamed sources — that we cannot yet substantiate. We report its existence without asserting it as fact.',
    example: '“Reports circulating online suggest…” with no verification attached.',
  },
];

const principles = [
  'Never label allegation as fact.',
  'Attribute every claim unless it is independently verified.',
  'Publish family material only with consent.',
  'Redact details that could endanger anyone.',
  'Issue open corrections when we get something wrong.',
];

export default function JusticePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Transparency</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">What “Verified” Means Here</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Journalistic integrity is the heart of this project. Every claim on this site carries a
            badge that tells you exactly how it can be verified.
          </p>
        </header>

        <div className="space-y-8">
          {standards.map((item) => (
            <article key={item.title} className="rounded-lg border border-gray-800 bg-black/40 p-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <EditorialBadge type={item.badge} />
                <h2 className="font-serif text-2xl font-bold">{item.title}</h2>
              </div>
              <p className="text-gray-300">{item.body}</p>
              <p className="mt-4 rounded bg-gray-900 px-4 py-3 text-sm text-gray-500">
                <span className="font-semibold text-gray-400">Example: </span>
                {item.example}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-16" aria-labelledby="principles">
          <h2 id="principles" className="mb-6 font-serif text-3xl font-bold">Our Principles</h2>
          <ul className="space-y-3">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-gray-300">
                <span className="mt-1 text-deep-red" aria-hidden="true">■</span>
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-lg border border-gray-800 bg-black/40 p-6">
          <h2 className="font-serif text-2xl font-bold">See It in Action</h2>
          <p className="mt-2 text-gray-400">
            Browse documented cases, search for a missing person, or read a family’s story and watch
            the badges in context.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/cases" className="rounded bg-deep-red px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-red-800">
              Browse Cases
            </Link>
            <Link href="/missing" className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white">
              Missing Persons
            </Link>
            <Link href="/stories" className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white">
              Victim Stories
            </Link>
            <Link href="/family-separation" className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white">
              Family Separation &amp; Due Process
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

