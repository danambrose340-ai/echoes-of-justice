import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MissingPersonsGrid from '@/components/MissingPersonsGrid';
import { siteConfig } from '@/data/site-config';
import { missingPersonsLastVerified, missingPersonsSource } from '@/data/missing-persons';

export default function MissingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Missing Persons</h1>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Open long-term missing-person cases from Colorado, with a focus on the Colorado Springs,
          Denver and Pueblo areas, drawn from the state&apos;s official
          cold case database maintained by the Colorado Bureau of Investigation. Each profile lists
          the investigating agency, the agency case number and the NamUs number so you can verify it
          at the source.
        </p>
        <p className="text-sm text-gray-500 mb-8 max-w-3xl">
          These are not live emergency alerts. For active AMBER, senior, Indigenous-person or
          endangered-missing alerts, check the{' '}
          <a
            href={missingPersonsSource.alertsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 underline underline-offset-2 hover:text-white"
          >
            CBI alert page
          </a>
          . Status verified {missingPersonsLastVerified}.
        </p>
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-8">
          <p className="font-semibold">⚠️ Emergency Situations</p>
          <p className="text-sm">
            If you believe someone is in immediate danger, call 911. To report information about a
            case, contact the investigating agency listed on that profile — not this website.
          </p>
        </div>
        <MissingPersonsGrid persons={siteConfig.missingPersons || []} />
        <div className="mt-10 rounded-lg border border-gray-800 bg-black/40 p-5 text-sm text-gray-400">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            How we source these profiles
          </h2>
          <p className="mt-2">
            We publish only cases confirmed in official records, and we never add details from social
            media or unverified flyers. If a person has been located, or a family member asks us to
            correct or remove a profile, we do so promptly —{' '}
            <Link href="/contact" className="text-gray-200 underline underline-offset-2 hover:text-white">
              contact us
            </Link>
            . Families who want a case submitted to the state clearinghouse can call CBI at{' '}
            {missingPersonsSource.clearinghousePhone}.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
