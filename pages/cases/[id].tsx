import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialBadge, { EditorialBadgeType } from '@/components/EditorialBadge';
import { siteConfig } from '@/data/site-config';
import { api } from '@/lib/api';
import { Case } from '@/types';

interface Props {
  caseItem: Case;
  related: Case[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { id } = ctx.query;
  const numericId = Number(id);
  const raw = String(id);
  const fallback =
    siteConfig.cases.find((c) => c.slug === raw) ||
    siteConfig.cases.find((c) => c.id === numericId) ||
    null;

  let caseItem = fallback;
  const backend = await api.get<Record<string, unknown>>(`/api/cases/${id}`);
  if (backend && backend.uuid) {
    caseItem = { ...(fallback || {}), ...backend } as Case;
  }

  if (!caseItem) {
    return { notFound: true };
  }

  const related = (caseItem.related || [])
    .map((rid) => siteConfig.cases.find((c) => c.id === rid))
    .filter(Boolean) as Case[];

  return { props: { caseItem, related } };
};

export default function CaseDetailPage({ caseItem, related }: Props) {
  const router = useRouter();

  const share = () => {
    if (typeof navigator === 'undefined' || !navigator.share) return;
    navigator.share({
      title: caseItem.name,
      text: caseItem.summary,
      url: window.location.href,
    }).catch(() => undefined);
  };

  const content = caseItem.content || [];
  const hasContent = content.length > 0;
  const sources = (caseItem.documents || []).filter((doc) => /^https?:\/\//.test(doc.url));

  return (
    <>
      <Head>
        <title>{caseItem.name} | Echoes of Justice</title>
        <meta name="description" content={caseItem.summary} />
        <meta property="og:title" content={caseItem.name} />
        <meta property="og:description" content={caseItem.summary} />
        {caseItem.img && (
          <meta property="og:image" content={`https://echoesofjustice.org${caseItem.img}`} />
        )}
      </Head>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-justice-black text-white">
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-10">
          <button
            onClick={() => router.back()}
            className="mb-8 inline-flex items-center gap-2 rounded text-sm text-gray-400 transition hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <article>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-deep-red px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                {caseItem.status}
              </span>
              <button
                onClick={share}
                className="inline-flex items-center gap-2 rounded border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-deep-red hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                </svg>
                Share
              </button>
            </div>

            <h1 className="font-serif text-3xl font-bold leading-tight md:text-5xl">{caseItem.name}</h1>
            <p className="mt-4 text-gray-400">
              {caseItem.date} · {caseItem.location}
            </p>

            {caseItem.img && (
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src={caseItem.img}
                  alt={`Photo placeholder for ${caseItem.name}`}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            )}

            <p className="mt-8 text-lg leading-relaxed text-gray-200">{caseItem.summary}</p>

            {hasContent ? (
              <div className="mt-8">
                {content.map((block, index) => (
                  <EditorialBadge key={index} type={block.type as EditorialBadgeType}>
                    {block.heading && (
                      <span className="block font-semibold text-white">{block.heading}</span>
                    )}
                    {block.text}
                  </EditorialBadge>
                ))}
              </div>
            ) : (
              <EditorialBadge type="verified">{caseItem.facts}</EditorialBadge>
            )}

            {caseItem.timeline && caseItem.timeline.length > 0 && (
              <section className="mt-10" aria-labelledby="timeline">
                <h2 id="timeline" className="font-serif text-xl font-bold">Timeline</h2>
                <ol className="mt-4 space-y-4 border-l border-gray-700 pl-6">
                  {caseItem.timeline.map((event, index) => (
                    <li key={index} className="relative">
                      <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-deep-red" aria-hidden="true" />
                      <p className="text-sm font-semibold text-gray-300">{event.date}</p>
                      <p className="text-gray-400">{event.event}</p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {caseItem.familyStatement && (
              <section
                className="mt-10 rounded border border-green-900 bg-green-900/20 p-6"
                aria-labelledby="family-statement"
              >
                <h2 id="family-statement" className="text-xs font-bold uppercase tracking-wider text-green-400">
                  Family statement
                </h2>
                <p className="mt-3 font-serif text-lg italic leading-relaxed text-white/90">
                  &ldquo;{caseItem.familyStatement}&rdquo;
                </p>
              </section>
            )}

            {sources.length > 0 && (
              <section className="mt-10" aria-labelledby="sources">
                <h2 id="sources" className="font-serif text-xl font-bold">Sources</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {sources.map((doc) => (
                    <li key={doc.url}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 underline underline-offset-2 hover:text-white"
                      >
                        {doc.title}
                      </a>{' '}
                      <span className="text-gray-500">· {doc.type}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="mt-8 border-l-2 border-deep-red pl-3 font-mono text-xs text-gray-500">
              {caseItem.meta}
            </p>
          </article>

          {related.length > 0 && (
            <section className="mt-14 border-t border-gray-800 pt-8" aria-labelledby="related">
              <h2 id="related" className="font-serif text-xl font-bold">Learn more</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/cases/${item.id}`}
                    className="group rounded-lg border border-gray-800 bg-justice-charcoal p-5 transition hover:border-deep-red"
                  >
                    <h3 className="font-semibold text-white group-hover:text-deep-red transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.date} · {item.location}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

