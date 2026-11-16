import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ShootingCounter from '@/components/ShootingCounter';
import CasesGrid from '@/components/CasesGrid';
import StoriesGrid from '@/components/StoriesGrid';
import DonateSection from '@/components/DonateSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function HomePage() {
  const featuredCases = (siteConfig.cases || []).slice(0, 3);
  const featuredStories = (siteConfig.stories || []).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <HeroSection />
        <ShootingCounter />

        <section className="mx-auto max-w-7xl px-4 py-16" aria-labelledby="featured-cases">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Documented</p>
              <h2 id="featured-cases" className="mt-2 font-serif text-3xl font-bold">Featured Cases</h2>
            </div>
            <Link href="/cases" className="text-sm text-gray-300 hover:text-white">
              View all cases →
            </Link>
          </div>
          <CasesGrid cases={featuredCases} />
        </section>

        <section className="border-y border-gray-800 bg-black/60 py-16" aria-labelledby="featured-stories">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Remembered</p>
                <h2 id="featured-stories" className="mt-2 font-serif text-3xl font-bold">Families Speak</h2>
                <p className="mt-3 font-serif text-lg text-gray-300">Tell Their Story. Keep Their Memory Alive.</p>
              </div>
              <Link href="/stories" className="text-sm text-gray-300 hover:text-white">
                Read all stories →
              </Link>
            </div>
            <StoriesGrid stories={featuredStories} />
          </div>
        </section>

        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
