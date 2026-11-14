import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoriesGrid from '@/components/StoriesGrid';
import { siteConfig } from '@/data/site-config';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Remembered</p>
            <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Victim Stories</h1>
            <p className="mt-4 max-w-3xl leading-7 text-gray-400">
              Families share these remembrances to honor their loved ones and keep their memories alive. Every story is published with consent.
            </p>
          </div>
          <Link href="/share-story" className="rounded bg-deep-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800">Share a remembrance</Link>
        </header>
        <StoriesGrid stories={siteConfig.stories || []} />
      </main>
      <Footer />
    </div>
  );
}

