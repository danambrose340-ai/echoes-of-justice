import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MerchSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/40 text-emerald-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="font-serif text-4xl font-bold">Thank You</h1>
        <p className="mt-4 text-gray-400">
          Your order has been received. Every purchase supports our mission of advocacy,
          documentation, and remembrance.
        </p>
        <p className="mt-6 text-sm text-gray-500">
          A confirmation email will arrive once the payment is confirmed by Stripe. For support,
          contact us through the{" "}
          <Link href="/contact" className="text-red-400 underline-offset-4 hover:underline">
            contact page
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}

