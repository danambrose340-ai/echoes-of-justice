import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'This Site Is a Documentary Archive, Not a Legal Record',
    body: 'Echoes of Justice documents publicly reported cases and personal accounts for advocacy and remembrance. Publication on this site is not evidence in any legal proceeding, is not a finding of liability, and does not constitute an accusation adjudicated by a court.',
  },
  {
    title: 'Verification Labels',
    body: 'We mark every piece of information with a badge: Verified Facts, Allegations, Family Statements, or Unconfirmed. Allegations are reported with attribution and are unproven. Family statements are personal accounts, not adjudicated facts. Unconfirmed information is reported as circulating but unsubstantiated.',
  },
  {
    title: 'Corrections & Removal',
    body: 'We correct errors openly. Family members or representatives may request review, correction, or removal of content concerning them by contacting us; legitimate requests are honored promptly.',
  },
  {
    title: 'No Attorney-Client or Personal Advice',
    body: 'Nothing on this site is legal, medical, or safety advice. If you are in danger, contact law enforcement or emergency services.',
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Legal</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">Disclaimer</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Read this before relying on anything you find here.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold">{section.title}</h2>
            <p className="text-gray-400">{section.body}</p>
          </section>
        ))}

        <div className="mt-12 rounded-lg border border-amber-700/40 bg-amber-900/20 p-5 text-sm text-amber-200">
          If you or someone you know is in immediate danger, call 911 or your local emergency number now.
        </div>
      </main>
      <Footer />
    </div>
  );
}

