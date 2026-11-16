import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrintButton from '@/components/PrintButton';
import { lastReviewed, quickRights } from '@/data/family-separation';
import { policeRights, policeRightsLastReviewed, policeRightsSources } from '@/data/police-rights';

const contacts = [
  { name: 'Child Protection Ombudsman of Colorado', detail: 'Independent complaint review', phone: '720-625-8640' },
  { name: 'Office of Respondent Parents’ Counsel', detail: 'Appointed lawyers for parents', phone: '303-731-8770' },
  { name: 'Colorado Legal Services', detail: 'Free civil legal help (Denver intake)', phone: '303-837-1313' },
  { name: '988 Colorado', detail: 'Crisis support, call or text', phone: '988' },
  { name: 'CBI Missing Persons Unit', detail: 'State missing-person clearinghouse', phone: '303-239-4211' },
];

export default function KnowYourRightsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="print-doc mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Colorado · Printable one-pager
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Know Your Rights
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            What to do if you are stopped by police, and if a child protection caseworker comes to
            your door. Print it, keep it, give it to someone who needs it.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            General information, not legal advice · Reviewed {policeRightsLastReviewed}
          </p>
          <nav className="no-print mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="On this page">
            <a href="#police-heading" className="text-red-300 underline-offset-4 hover:underline">With police</a>
            <a href="#steps-heading" className="text-red-300 underline-offset-4 hover:underline">With a caseworker</a>
          </nav>
          <div className="mt-5 flex flex-wrap gap-3">
            <PrintButton />
            <Link
              href="/family-separation"
              className="no-print inline-flex items-center rounded border border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:border-white hover:text-white"
            >
              Read the full research
            </Link>
            <Link
              href="/due-process-intake"
              className="no-print inline-flex items-center rounded border border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition hover:border-white hover:text-white"
            >
              Ask us to document a case
            </Link>
          </div>
        </header>

        <section className="mt-8" aria-labelledby="police-heading">
          <h2 id="police-heading" className="font-serif text-2xl font-bold">
            If you are stopped by police
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your safety comes first. Asserting your rights calmly protects you later; arguing on
            the street rarely does.
          </p>
          <ol className="mt-4 space-y-3">
            {policeRights.map((right, index) => (
              <li key={right.title} className="print-card rounded-lg border border-gray-800 bg-black/40 p-4">
                <div className="flex gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-700 font-serif text-xs font-bold text-red-300"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{right.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-300">{right.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="print-note mt-4 rounded-lg border border-gray-800 bg-gray-900/40 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              The law this section relies on
            </h3>
            <ul className="mt-2 space-y-1 text-xs leading-5 text-gray-400">
              {policeRightsSources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>
        </section>

        <h2 className="mt-12 font-serif text-2xl font-bold">If a caseworker comes to your door</h2>
        <p className="mt-1 text-xs text-gray-500">Reviewed {lastReviewed}</p>

        <section className="print-card mt-6 rounded-lg border border-red-900 bg-red-900/20 p-4 text-sm leading-6 text-red-100">
          <strong className="print-strong">If a child is in immediate danger, call 911.</strong>{' '}
          This page explains your rights. It cannot stop a removal. If one happens, the priority is
          to stay calm, get a lawyer, and get the case before a judge within 72 hours.
        </section>

        <section className="mt-8" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="font-serif text-xl font-bold">
            Ten things to do
          </h2>
          <ol className="mt-4 space-y-3">
            {quickRights.map((right, index) => (
              <li key={right.title} className="print-card rounded-lg border border-gray-800 bg-black/40 p-4">
                <div className="flex gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-700 font-serif text-xs font-bold text-red-300"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{right.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-300">{right.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8" aria-labelledby="contacts-heading">
          <h2 id="contacts-heading" className="font-serif text-xl font-bold">
            Who to call
          </h2>
          <div className="mt-4 print-card rounded-lg border border-gray-800 bg-black/40 p-4">
            <ul className="divide-y divide-gray-800">
              {contacts.map((contact) => (
                <li key={contact.name} className="flex flex-wrap items-baseline justify-between gap-2 py-2">
                  <span>
                    <span className="text-sm font-semibold text-white">{contact.name}</span>
                    <span className="ml-2 text-xs text-gray-500">{contact.detail}</span>
                  </span>
                  <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-red-300 hover:text-white">
                    {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="print-note mt-8 rounded-lg border border-gray-800 bg-gray-900/40 p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            The law this page relies on
          </h2>
          <ul className="mt-2 space-y-1 text-xs leading-5 text-gray-400">
            <li>C.R.S. § 19-3-202 — right to counsel at every stage; jury trial at adjudication.</li>
            <li>C.R.S. § 19-3-405 — temporary protective custody; 72-hour limit excluding weekends and court holidays.</li>
            <li>C.R.S. §§ 18-9-303, 18-9-304 — one-party consent for recording conversations you are part of.</li>
            <li>Stanley v. Illinois, 405 U.S. 645 (1972) — a hearing on fitness before children are taken.</li>
            <li>Santosky v. Kramer, 455 U.S. 745 (1982) — clear and convincing evidence to terminate parental rights.</li>
          </ul>
          <p className="mt-3 text-xs leading-5 text-gray-500">
            This is general information, not legal advice, and it does not create an attorney-client
            relationship. Colorado law can change. Talk to a lawyer about your case. See our{' '}
            <Link href="/disclaimer" className="underline underline-offset-2 hover:text-white">
              disclaimer
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
