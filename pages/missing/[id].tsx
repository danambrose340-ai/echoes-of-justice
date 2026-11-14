import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';
import { missingPersonsLastVerified } from '@/data/missing-persons';
import { MissingPerson } from '@/types';

interface Props {
  person: MissingPerson;
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const numericId = Number(ctx.query.id);
  const raw = String(ctx.query.id);
  const person =
    siteConfig.missingPersons.find((p) => p.slug === raw) ||
    siteConfig.missingPersons.find((p) => p.id === numericId) ||
    null;
  if (!person) return { notFound: true };
  return { props: { person } };
};

export default function MissingPersonDetailPage({ person }: Props) {
  const router = useRouter();
  const agencyCaseNumber = person.lawEnforcement?.caseNumber || person.caseOnFile;

  const physicalDetails = [
    person.gender ? ['Gender', person.gender] : null,
    person.race ? ['Race', person.race] : null,
    person.height ? ['Height', person.height] : null,
    person.weight ? ['Weight', person.weight] : null,
    person.hairColor ? ['Hair', person.hairColor] : null,
    person.eyeColor ? ['Eyes', person.eyeColor] : null,
    person.ageLastSeen ? ['Age last seen', person.ageLastSeen] : null,
  ].filter((d): d is [string, string] => Boolean(d));

  return (
    <>
      <Head>
        <title>{person.name} – Missing Person | Echoes of Justice</title>
        <meta name="description" content={person.description} />
        <meta property="og:title" content={`${person.name} – Missing Person`} />
        <meta property="og:description" content={person.description} />
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

          <div className="rounded border border-red-900 bg-red-900/20 p-4 text-sm text-red-200" role="note">
            <strong>If someone is in immediate danger, call 911.</strong> If you have information
            about this person, contact the investigating agency listed below. Do not approach anyone
            you believe may be involved.
          </div>

          <article className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
            <div className="relative flex aspect-[4/5] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-[#2b2120] via-[#171719] to-[#302921] md:mx-auto">
              {person.photo ? (
                <Image
                  src={person.photo}
                  alt={`Photograph of ${person.name}`}
                  fill
                  priority
                  sizes="280px"
                  className="object-contain"
                />
              ) : (
                <svg width="120" height="120" viewBox="0 0 96 96" aria-hidden="true" className="text-gray-600" fill="currentColor">
                  <circle cx="48" cy="34" r="18" />
                  <path d="M14 88c0-18 15-30 34-30s34 12 34 30v8H14z" />
                </svg>
              )}
            </div>

            <div>
              {person.photo && (
                <p className="mb-2 text-xs text-gray-500">
                  Photo: official case record, Colorado Bureau of Investigation.
                </p>
              )}
              <h1 className="font-serif text-3xl font-bold leading-tight md:text-4xl">{person.name}</h1>
              <p className="mt-2 text-gray-400">
                Last seen: {person.lastSeen} · {person.lastLocation}
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {physicalDetails.map(([label, value]) => (
                  <div key={label} className="rounded bg-justice-charcoal p-3">
                    <dt className="text-xs uppercase tracking-wider text-gray-500">{label}</dt>
                    <dd className="mt-1 text-white">{value}</dd>
                  </div>
                ))}
              </dl>

              {person.clothing && (
                <p className="mt-6 text-sm text-gray-300">
                  <span className="font-semibold text-gray-400">Clothing:</span> {person.clothing}
                </p>
              )}
              {person.distinguishingFeatures && (
                <p className="mt-2 text-sm text-gray-300">
                  <span className="font-semibold text-gray-400">Distinguishing features:</span>{' '}
                  {person.distinguishingFeatures}
                </p>
              )}
            </div>
          </article>

          <section className="mt-10 rounded-lg border border-gray-800 bg-justice-charcoal p-6">
            <h2 className="font-serif text-xl font-bold">What we know</h2>
            <p className="mt-3 leading-relaxed text-gray-300">{person.description}</p>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              This summary is drawn from the official case record. Details are limited to what the
              investigating agency has published.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded bg-justice-black p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Investigating agency
                </h3>
                <p className="mt-2 font-semibold text-white">{person.lawEnforcement?.agency}</p>
                {person.lawEnforcement?.phone && (
                  <p className="text-gray-400">{person.lawEnforcement.phone}</p>
                )}
                {agencyCaseNumber && (
                  <p className="mt-1 font-mono text-xs text-gray-500">Case #{agencyCaseNumber}</p>
                )}
                {person.namUsCaseNumber && (
                  <p className="mt-1 font-mono text-xs text-gray-500">
                    NamUs {person.namUsCaseNumber}
                  </p>
                )}
              </div>
              <div className="rounded bg-justice-black p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  How to help
                </h3>
                <p className="mt-2 text-gray-300">
                  Call the investigating agency with any information and reference the case number
                  above. Do not post tips publicly, and do not approach anyone you believe may be
                  involved.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-lg border border-gray-800 bg-black/40 p-5 text-sm text-gray-400">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Sourcing and corrections
            </h2>
            {person.sourceUrl && (
              <p className="mt-2">
                Source:{' '}
                <a
                  href={person.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 underline decoration-gray-600 underline-offset-2 hover:text-white"
                >
                  {person.sourceName || 'Official case record'}
                </a>
                . Verified {missingPersonsLastVerified}. Case status and details can change; always
                confirm with the investigating agency.
              </p>
            )}
            <p className="mt-2">
              If you are a family member and this profile is out of date, or the person has been
              located,{' '}
              <Link href="/contact" className="text-gray-200 underline decoration-gray-600 underline-offset-2 hover:text-white">
                tell us
              </Link>{' '}
              and we will correct or remove it.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
