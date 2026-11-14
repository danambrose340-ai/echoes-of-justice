import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DonateSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="font-serif text-4xl font-bold">Thank You for Your Support</h1>
        <p className="mt-4 text-gray-400">
          Your donation strengthens the work of documenting injustice, supporting families,
          and demanding accountability.
        </p>
      </main>
      <Footer />
    </div>
  );
}

