import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialBadge from '@/components/EditorialBadge';
import {
  coloradoResources,
  contestedClaims,
  documentedCases,
  familyRights,
  getSource,
  headlineStats,
  lastReviewed,
  legalMilestones,
  pressurePoints,
  reforms,
  sources,
} from '@/data/family-separation';

const jumpLinks = [
  { href: '#the-numbers', label: 'The numbers' },
  { href: '#the-law', label: 'What the law requires' },
  { href: '#where-it-breaks', label: 'Where it breaks' },
  { href: '#documented-cases', label: 'Documented cases' },
  { href: '#what-we-do-not-claim', label: 'What we do not claim' },
  { href: '#if-it-happens-to-you', label: 'If it happens to you' },
  { href: '#reform', label: 'What reform looks like' },
  { href: '#resources', label: 'Colorado resources' },
  { href: '#sources', label: 'Sources' },
];

const claimStatus = {
  supported: {
    label: 'SUPPORTED',
    className: 'border-emerald-500/50 bg-emerald-900/20 text-emerald-400',
  },
  'not-supported': {
    label: 'NOT SUPPORTED',
    className: 'border-red-500/50 bg-red-900/20 text-red-300',
  },
  contested: {
    label: 'CONTESTED',
    className: 'border-amber-500/50 bg-amber-900/20 text-amber-400',
  },
} as const;

function SourceLink({ id, prefix = 'Source' }: { id: string; prefix?: string }) {
  const source = getSource(id);
  if (!source) return null;
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-gray-600 underline-offset-2 transition hover:text-white hover:decoration-white"
    >
      {prefix ? `${prefix}: ${source.publisher}` : source.publisher}
    </a>
  );
}

export default function FamilySeparationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Family Separation &amp; Due Process
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            When the State Comes for Your Children
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-300">
            There is a real and growing uproar about child protective services taking children
            without a hearing. Some of what circulates is documented in court records and federal
            data. Some of it is rumor. This section separates the two — what the law requires, where
            the process actually breaks, what has been proven, and what has not.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Published {lastReviewed} · Every claim is labeled or linked to a source. Read our{' '}
            <Link href="/justice" className="text-gray-300 underline underline-offset-2 hover:text-white">
              editorial standard
            </Link>{' '}
            for how we define verified, alleged, and unconfirmed.
          </p>
        </header>

        <nav aria-label="On this page" className="mb-14 border-y border-gray-800 py-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-wider text-gray-400">
            {jumpLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="the-numbers" className="scroll-mt-24" aria-labelledby="numbers-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">The Record</p>
              <h2 id="numbers-heading" className="mt-2 font-serif text-3xl font-bold">
                The Numbers Behind the Uproar
              </h2>
            </div>
            <EditorialBadge type="verified" />
          </div>
          <p className="mb-8 max-w-3xl text-gray-400">
            These figures come from federal reporting systems and peer-reviewed research. They do
            not prove any single case was wrong. They do show how often the state reaches into
            families, and how rarely that reach is tested by a judge first.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {headlineStats.map((stat) => (
              <article
                key={stat.label}
                className="flex flex-col rounded-lg border border-gray-800 bg-black/40 p-5"
              >
                <p className="font-serif text-3xl font-bold text-red-300">{stat.value}</p>
                <h3 className="mt-2 text-sm font-semibold uppercase tracking-wider text-white">
                  {stat.label}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{stat.detail}</p>
                <p className="mt-4 text-[11px] text-gray-500">
                  <SourceLink id={stat.sourceId} />
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-gray-800 bg-gray-900/40 p-5">
            <p className="text-sm leading-relaxed text-gray-300">
              <span className="font-semibold text-white">Colorado, in context.</span> About 3,097
              Colorado children entered out-of-home care in 2022, and 3,022 exited. Colorado is not
              the harshest system in the country — it requires a judge to be reachable at all hours
              and caps protective custody at 72 hours. The gap between what the law promises and
              what a frightened parent experiences is the subject of this section.{' '}
              <span className="text-gray-500">
                <SourceLink id="cwla-co" />
              </span>
            </p>
          </div>
        </section>

        <section id="the-law" className="mt-20 scroll-mt-24" aria-labelledby="law-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">The Standard</p>
          <h2 id="law-heading" className="mt-2 font-serif text-3xl font-bold">
            What the Law Actually Requires
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            The United States does not have a constitutional right to a lawyer in every child
            protection case. It does have a constitutional rule that parents get a hearing before
            their children are taken. The distance between those two ideas is where most of the
            controversy lives.
          </p>

          <ol className="mt-8 space-y-6">
            {legalMilestones.map((milestone) => (
              <li
                key={`${milestone.year}-${milestone.title}`}
                className="grid gap-3 rounded-lg border border-gray-800 bg-black/40 p-5 sm:grid-cols-[7rem_1fr]"
              >
                <p className="font-serif text-lg font-bold text-red-300">{milestone.year}</p>
                <div>
                  <h3 className="font-semibold text-white">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{milestone.body}</p>
                  {milestone.sourceId && (
                    <p className="mt-3 text-[11px] text-gray-500">
                      <SourceLink id={milestone.sourceId} />
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="where-it-breaks" className="mt-20 scroll-mt-24" aria-labelledby="breaks-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">The Gap</p>
          <h2 id="breaks-heading" className="mt-2 font-serif text-3xl font-bold">
            Where the Process Breaks
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            Six mechanisms explain most of the cases families describe. Five are documented. The
            sixth — money — is a live policy argument, and we label it as one.
          </p>

          <div className="mt-8 space-y-6">
            {pressurePoints.map((point, index) => (
              <article key={point.id} className="rounded-lg border border-gray-800 bg-black/40 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-gray-600" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">{point.title}</h3>
                  <EditorialBadge type={point.badge} />
                </div>
                <p className="mt-3 leading-relaxed text-gray-300">{point.body}</p>
                <p className="mt-4 text-[11px] text-gray-500">
                  {point.sourceIds.map((id, sourceIndex) => (
                    <span key={id}>
                      {sourceIndex > 0 && ' · '}
                      <SourceLink id={id} />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="documented-cases" className="mt-20 scroll-mt-24" aria-labelledby="cases-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">On the Record</p>
          <h2 id="cases-heading" className="mt-2 font-serif text-3xl font-bold">
            Documented Cases
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            Each case below rests on court records, named reporting, or an official investigation —
            not on a social media post. Where a case is a lawsuit, the claims are allegations until a
            court rules, and we say so.
          </p>

          <div className="mt-8 space-y-6">
            {documentedCases.map((item) => (
              <article key={item.id} className="rounded-lg border border-gray-800 bg-black/40 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <EditorialBadge type={item.badge} />
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {item.location} · {item.period}
                  </p>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-300">{item.summary}</p>
                <p className="mt-4 rounded border-l-4 border-gray-700 bg-gray-900/60 px-4 py-3 text-sm leading-relaxed text-gray-400">
                  <span className="font-semibold uppercase tracking-wider text-gray-300">What happened next: </span>
                  {item.outcome}
                </p>
                <p className="mt-4 text-[11px] text-gray-500">
                  {item.sourceIds.map((id, index) => (
                    <span key={id}>
                      {index > 0 && ' · '}
                      <SourceLink id={id} />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="what-we-do-not-claim" className="mt-20 scroll-mt-24" aria-labelledby="claims-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">The Line</p>
          <h2 id="claims-heading" className="mt-2 font-serif text-3xl font-bold">
            What We Do Not Claim
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            The fastest way to discredit a real problem is to overstate it. Here is where the
            evidence stops, and why we will not repeat claims we cannot support.
          </p>

          <div className="mt-8 space-y-5">
            {contestedClaims.map((item) => {
              const status = claimStatus[item.status];
              return (
                <article key={item.claim} className="rounded-lg border border-gray-800 bg-black/40 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${status.className}`}
                    >
                      {status.label}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">{item.claim}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.body}</p>
                  {item.sourceId && (
                    <p className="mt-3 text-[11px] text-gray-500">
                      <SourceLink id={item.sourceId} />
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="if-it-happens-to-you" className="mt-20 scroll-mt-24" aria-labelledby="rights-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Practical</p>
          <h2 id="rights-heading" className="mt-2 font-serif text-3xl font-bold">
            If Child Protection Comes to Your Door
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            Colorado law gives families more protection than most states. It only helps if someone
            invokes it. This is general information, not legal advice — for advice about your case,
            talk to a lawyer.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/know-your-rights"
              className="rounded border border-gray-600 px-5 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white"
            >
              Print the one-pager
            </Link>
            <Link
              href="/due-process-intake"
              className="rounded border border-gray-600 px-5 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white"
            >
              Ask us to document a case
            </Link>
          </div>

          <ol className="mt-8 space-y-4">
            {familyRights.map((right, index) => (
              <li key={right.title} className="rounded-lg border border-gray-800 bg-black/40 p-5">
                <div className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-700 font-serif text-sm font-bold text-red-300"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{right.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{right.body}</p>
                    {right.citation && (
                      <p className="mt-2 text-[11px] uppercase tracking-wider text-gray-500">
                        {right.citation}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm text-gray-500">
            Read our full{' '}
            <Link href="/disclaimer" className="text-gray-300 underline underline-offset-2 hover:text-white">
              disclaimer
            </Link>
            . Nothing on this page creates an attorney-client relationship.
          </p>
        </section>

        <section id="reform" className="mt-20 scroll-mt-24" aria-labelledby="reform-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Our Position</p>
          <h2 id="reform-heading" className="mt-2 font-serif text-3xl font-bold">
            What Reform Looks Like
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            These are Echoes of Justice’s recommendations, offered as advocacy rather than findings.
            Each one is aimed at the gap between the hearing the Constitution promises and the
            removal that happens at 1 a.m.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reforms.map((reform) => (
              <article key={reform.title} className="rounded-lg border border-gray-800 bg-black/40 p-5">
                <h3 className="font-serif text-lg font-bold text-red-300">{reform.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{reform.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="mt-20 scroll-mt-24" aria-labelledby="resources-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Help</p>
          <h2 id="resources-heading" className="mt-2 font-serif text-3xl font-bold">
            Colorado Resources
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            Verified contact information for independent oversight, free legal representation, and
            crisis support. If a child is in immediate danger, call 911.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {coloradoResources.map((resource) => (
              <article
                key={resource.name}
                className="flex flex-col rounded-lg border border-gray-800 bg-black/40 p-5 transition hover:border-deep-red"
              >
                <h3 className="font-semibold text-white">{resource.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{resource.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  {resource.phone && (
                    <a
                      href={`tel:${resource.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-red-300 hover:text-white"
                    >
                      {resource.phone}
                    </a>
                  )}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline underline-offset-2 hover:text-white"
                  >
                    Visit site →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sources" className="mt-20 scroll-mt-24" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="font-serif text-3xl font-bold">
            Sources
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-gray-400">
            Primary documents and named reporting used on this page. We link out so readers can
            check the record themselves. Last reviewed {lastReviewed}.
          </p>
          <ol className="mt-6 space-y-3 text-sm">
            {sources.map((source, index) => (
              <li key={source.id} className="flex gap-3 text-gray-400">
                <span className="w-6 shrink-0 text-right text-gray-600" aria-hidden="true">
                  {index + 1}.
                </span>
                <span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 underline decoration-gray-600 underline-offset-2 hover:text-white"
                  >
                    {source.title}
                  </a>
                  <span className="block text-xs text-gray-500">
                    {source.publisher} · {source.date}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-lg border border-gray-800 bg-black/40 p-6" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="font-serif text-2xl font-bold">
            If This Happened to Your Family
          </h2>
          <p className="mt-2 max-w-2xl text-gray-400">
            We document cases with consent, request records before publishing, and never publish a
            family’s account without their permission. If you have documents or a story you want
            preserved, start here.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/due-process-intake"
              className="rounded bg-deep-red px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-red-800"
            >
              Start a case intake
            </Link>
            <Link
              href="/share-story"
              className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white"
            >
              Share your story
            </Link>
            <Link
              href="/contact"
              className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white"
            >
              Contact us
            </Link>
            <Link
              href="/justice"
              className="rounded border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white"
            >
              How we verify
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
