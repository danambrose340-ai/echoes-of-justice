import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';
import { Story } from '@/types';

interface Props {
  story: Story;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const numericId = Number(ctx.query.id);
  const raw = String(ctx.query.id);
  const story =
    siteConfig.stories.find((s) => s.slug === raw) ||
    siteConfig.stories.find((s) => s.id === numericId) ||
    null;
  if (!story) return { notFound: true };
  return { props: { story } };
};

export default function StoryDetailPage({ story }: Props) {
  const paragraphs = (story.narrative || '').split(/\n{2,}/);

  return (
    <>
      <Head>
        <title>{story.name} – Remembrance | Echoes of Justice</title>
        <meta name="description" content={story.quote} />
        <meta property="og:title" content={`${story.name} – Remembrance`} />
        <meta property="og:description" content={story.quote} />
        <meta property="og:image" content={`https://echoesofjustice.org${story.photo}`} />
      </Head>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-justice-black text-white">
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-10">
          <Link
            href="/stories"
            className="mb-8 inline-flex items-center gap-2 rounded text-sm text-gray-400 transition hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All remembrances
          </Link>

          <article>
            <div className="mb-8 flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gray-700">
                <Image
                  src={story.photo}
                  alt={`Photo placeholder for ${story.name}`}
                  fill
                  priority
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold md:text-3xl">{story.name}</h1>
                <p className="mt-1 text-sm text-gray-500">{story.sub}</p>
              </div>
            </div>

            {(story.relationship || story.incidentDate || story.location) && (
              <dl className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {story.relationship && (
                  <div className="rounded bg-justice-charcoal p-3">
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Remembered by</dt>
                    <dd className="mt-1 text-white">{story.relationship}</dd>
                  </div>
                )}
                {story.incidentDate && (
                  <div className="rounded bg-justice-charcoal p-3">
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Incident</dt>
                    <dd className="mt-1 text-white">{story.incidentDate}</dd>
                  </div>
                )}
                {story.location && (
                  <div className="rounded bg-justice-charcoal p-3">
                    <dt className="text-xs uppercase tracking-wider text-gray-500">Location</dt>
                    <dd className="mt-1 text-white">{story.location}</dd>
                  </div>
                )}
              </dl>
            )}

            <blockquote className="border-l-4 border-deep-red pl-5 font-serif text-lg italic leading-relaxed text-gray-200">
              &ldquo;{story.quote}&rdquo;
            </blockquote>

            {paragraphs.length > 0 && (
              <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-300">
                {paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            )}

            <p className="mt-8 text-xs uppercase tracking-widest text-gray-500">{story.foot}</p>
          </article>

          <section className="mt-14 rounded-lg border border-gray-800 bg-justice-charcoal p-8 text-center">
            <h2 className="font-serif text-xl font-bold">Share your story</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-400">
              Every remembrance is reviewed with care and published only with the submitter&apos;s
              explicit consent.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded bg-deep-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Share Your Story
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

