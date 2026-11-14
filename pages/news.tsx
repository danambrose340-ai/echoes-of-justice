import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsItems, newsLastChecked } from '@/data/news';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>News &amp; Updates | Echoes of Justice</title>
        <meta
          name="description"
          content="Reporting on police accountability, court rulings, legislation and missing persons in Colorado, linked to the original sources."
        />
      </Head>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Reported elsewhere</p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">News &amp; Updates</h1>
          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            Reporting from Colorado news outlets and public agencies on police accountability, court
            rulings, new laws and missing persons. Each item links to the original report; the short
            descriptions are ours. Links last checked {newsLastChecked}.
          </p>
        </header>

        <ol className="space-y-5">
          {newsItems.map((item) => (
            <li key={item.url} className="rounded-lg border border-gray-800 bg-black/40 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                {item.date} · {item.topic}
              </p>
              <h2 className="mt-2 font-serif text-xl font-bold leading-snug">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {item.title}
                </a>
              </h2>
              <p className="mt-2 leading-7 text-gray-300">{item.summary}</p>
              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  Read at {item.source} →
                </a>
                {item.caseSlug && (
                  <Link href={`/cases/${item.caseSlug}`} className="text-gray-300 underline underline-offset-4 hover:text-white">
                    Our case record
                  </Link>
                )}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm leading-6 text-gray-500">
          Know of reporting we should list?{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:text-white">
            Send it to us
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
