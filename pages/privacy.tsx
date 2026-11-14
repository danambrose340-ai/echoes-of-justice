import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you contact us, volunteer, donate, or submit information through a form, we collect only what you provide: your name, email, the nature of your message, and any content you include. We never collect card details — payments are processed entirely by our payment processor (Stripe).',
  },
  {
    title: 'How We Use Information',
    body: 'We use submitted information to respond to inquiries, process applications, administer donations, and improve our services. Family materials and story submissions are published only with explicit consent and may be removed on request. Messages sent through our forms are delivered and stored by our website hosting provider so that we can read and answer them.',
  },
  {
    title: 'What We Never Do',
    body: 'We never sell personal information. We do not share data with advertising networks. We do not publish information that could identify a vulnerable person without their consent.',
  },
  {
    title: 'Cookies & Analytics',
    body: 'We use minimal, privacy-respecting analytics to understand aggregate traffic. We do not use cross-site tracking cookies for advertising.',
  },
  {
    title: 'Data Retention & Your Rights',
    body: 'You may request access to, correction of, or deletion of the personal information we hold about you by contacting us. We will honor such requests promptly, subject to legal obligations to retain certain records.',
  },
  {
    title: 'Children',
    body: 'Our site is not directed at children under 13, and we do not knowingly collect personal information from them.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Legal</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Effective: January 2025 · Last reviewed: January 2025</p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="mb-2 font-serif text-2xl font-bold">{section.title}</h2>
            <p className="text-gray-400">{section.body}</p>
          </section>
        ))}

        <p className="mt-12 text-sm text-gray-500">
          Questions about this policy? Contact us through the{" "}
          <Link href="/contact" className="text-red-400 underline-offset-4 hover:underline">contact page</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

