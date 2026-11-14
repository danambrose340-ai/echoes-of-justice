import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonateSection from '@/components/DonateSection';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 pt-16 text-center">
          <h1 className="font-serif text-5xl font-bold">Support the Mission</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Echoes of Justice is a mission-driven community advocacy project — not a licensed
            nonprofit. Support is optional, and we would rather you understand exactly what we are
            before you give.
          </p>
        </section>
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
