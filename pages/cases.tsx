import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CasesGrid from '@/components/CasesGrid';
import { siteConfig } from '@/data/site-config';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Cases</h1>
        <p className="text-gray-400 mb-12">
          Explore cases and stories of violence and injustice. Each case includes verified facts, timelines, and family statements.
        </p>
        <CasesGrid cases={siteConfig.cases} />
      </main>
      <Footer />
    </div>
  );
}