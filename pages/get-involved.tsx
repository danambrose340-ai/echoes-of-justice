import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ways = [
  {
    title: 'Share your family’s story',
    body: 'If you lost someone, or your family was harmed, you decide what is told and how. Nothing is published without your permission.',
    href: '/share-story',
    action: 'Tell us your story',
  },
  {
    title: 'Send us a case or a correction',
    body: 'Know of a case we should document, a court filing we missed, or something we got wrong? Send the source and we will check it.',
    href: '/contact',
    action: 'Contact us',
  },
  {
    title: 'Volunteer your skills',
    body: 'We need researchers, writers, designers, people who can read court records, and people who can show up in Denver, Colorado Springs and Pueblo.',
    href: '/volunteer',
    action: 'Apply to volunteer',
  },
  {
    title: 'Hand someone their rights',
    body: 'Print the Know Your Rights page and give it to a neighbor, a church, a school or a barber shop. It costs nothing and it travels.',
    href: '/know-your-rights',
    action: 'Open the printable page',
  },
  {
    title: 'Help find the missing',
    body: 'Look through the Colorado missing-person profiles and share them. Tips go to the investigating agency listed on each profile, never to us.',
    href: '/missing',
    action: 'See missing persons',
  },
  {
    title: 'Support the work',
    body: 'Giving is optional and never buys coverage. We are a community project, not a registered nonprofit, so gifts are not tax-deductible.',
    href: '/donate',
    action: 'Donate',
  },
];

const publicSteps = [
  'Speak during public comment at your city council or county commission when police oversight, budgets or body-camera policy are on the agenda.',
  'Ask for records. Colorado’s open-records laws let anyone request police reports and footage, and families of people killed by police now get recordings within 21 days.',
  'File a complaint when you witness misconduct, and keep a copy. Complaints create a record even when they are not sustained.',
  'Show up for families at hearings and vigils, when they ask for it.',
];

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Get Involved | Echoes of Justice</title>
        <meta
          name="description"
          content="Ways to stand with Colorado families: share a story, send a case, volunteer, pass on Know Your Rights, and speak up locally."
        />
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Get Involved</p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Stand with Colorado families</h1>
          <p className="mt-4 leading-7 text-gray-400">
            Change comes from people who refuse to look away. You do not need money or a title to
            help. Pick what fits you.
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2">
          {ways.map((way) => (
            <li key={way.href} className="flex flex-col rounded-lg border border-gray-800 bg-black/40 p-6">
              <h2 className="font-serif text-xl font-bold">{way.title}</h2>
              <p className="mt-2 flex-1 leading-7 text-gray-300">{way.body}</p>
              <Link
                href={way.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:underline"
              >
                {way.action} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-12 rounded-lg border border-gray-800 bg-gray-900/40 p-6" aria-labelledby="public-heading">
          <h2 id="public-heading" className="font-serif text-2xl font-bold">
            Use your voice where you live
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-gray-300">
            {publicSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-400">
            Complaint offices, legal help and crisis lines are listed on the{' '}
            <Link href="/resources" className="underline underline-offset-4 hover:text-white">
              Resources page
            </Link>
            .
          </p>
        </section>

        <p className="mt-8 text-sm leading-6 text-gray-500">
          Are you with an organization, a law office or a newsroom?{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-white">
            Write to us
          </Link>{' '}
          about working together.
        </p>
      </main>
      <Footer />
    </div>
  );
}
