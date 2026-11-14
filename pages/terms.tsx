import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing this website you agree to these terms. If you do not agree, please do not use the site.',
  },
  {
    title: 'Editorial Content',
    body: 'Content on this site is labeled by its verification status: Verified Facts, Allegations, Family Statements, and Unconfirmed. Nothing on this site constitutes legal advice, a finding of fact by a court, or an accusation adjudicated by the legal system. Please read our editorial standard page for how to interpret each label.',
  },
  {
    title: 'Law Enforcement & Safe Harbor',
    body: 'If you have information about a case listed on this site, please contact the law enforcement agency identified on the case page, or local authorities. We cannot relay tips to law enforcement.',
  },
  {
    title: 'Donations & Purchases',
    body: 'Donations are processed through third-party payment providers. Merchandise purchases are subject to the provider’s terms. In the absence of a live payment key, checkout flows operate in test mode and no charge is applied.',
  },
  {
    title: 'User-Generated Content',
    body: 'By submitting content (stories, tips, applications), you warrant that you have the right to share it and grant us a limited license to publish it in the manner we described when you submitted it. Do not submit information you expect to remain confidential except where a form states it is confidential.',
  },
  {
    title: 'Limitation of Liability',
    body: 'This site is provided on an “as is” basis. To the maximum extent permitted by law, we are not liable for damages arising from reliance on site content, interruption of service, or third-party links.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of the state in which the organization is incorporated, without regard to conflict-of-law principles.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Legal</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">Terms of Use</h1>
          <p className="mt-4 text-sm text-gray-500">Effective: January 2025 · Last reviewed: January 2025</p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold">{section.title}</h2>
            <p className="text-gray-400">{section.body}</p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

