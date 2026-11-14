import { useState } from 'react';
import type { FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { formValues, submitSiteForm } from '@/lib/forms';

export default function ShareStoryPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [consent, setConsent] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    const form = event.currentTarget;
    setStatus('sending');
    if (await submitSiteForm('family-story', formValues(form))) {
      setStatus('sent');
      form.reset();
      setConsent(false);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Their stories. Their truth.</p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Share a remembrance</h1>
          <p className="mt-4 leading-7 text-gray-400">Tell us about someone you want remembered. Submissions are reviewed and are never published without separate, explicit publication consent.</p>
        </header>

        <aside className="mb-8 rounded-lg border border-amber-700/40 bg-amber-950/20 p-4 text-sm leading-6 text-amber-100/90">
          This form is not an emergency or confidential tip line. Please do not include account passwords, Social Security numbers, private medical information, minors’ identifying details, or information that could place someone at risk. For urgent danger, call 911.
        </aside>

        <form onSubmit={submit} className="space-y-5 rounded-xl border border-gray-800 bg-black/30 p-5 sm:p-7">
          <div>
            <label htmlFor="story-name" className="block text-sm font-medium text-gray-200">Your name</label>
            <input id="story-name" name="name" required maxLength={120} autoComplete="name" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
          </div>
          <div>
            <label htmlFor="story-email" className="block text-sm font-medium text-gray-200">Email for follow-up</label>
            <input id="story-email" name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
          </div>
          <div>
            <label htmlFor="story-subject" className="block text-sm font-medium text-gray-200">Name of the person you want remembered</label>
            <input id="story-subject" name="subject_name" required maxLength={120} className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
          </div>
          <div>
            <label htmlFor="story-relationship" className="block text-sm font-medium text-gray-200">Your relationship (optional)</label>
            <input id="story-relationship" name="relationship" maxLength={80} className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
          </div>
          <div>
            <label htmlFor="story-message" className="block text-sm font-medium text-gray-200">Your remembrance</label>
            <textarea id="story-message" name="story" required minLength={20} maxLength={5000} rows={7} className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            <p className="mt-2 text-xs text-gray-500">Please share only what you have the right to provide and what you feel comfortable sending by email.</p>
          </div>
          <label className="flex items-start gap-3 text-sm leading-6 text-gray-300">
            <input type="checkbox" name="publication_consent" value="yes" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-1 h-4 w-4 accent-red-700" />
            <span>I am authorized to share this remembrance for review. I understand this submission alone does not authorize publication; Echoes of Justice will request separate explicit consent before publishing.</span>
          </label>
          <button type="submit" disabled={status === 'sending' || !consent} className="w-full rounded bg-deep-red px-6 py-3 font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50">
            {status === 'sending' ? 'Submitting…' : 'Send remembrance for review'}
          </button>
          {status === 'sent' && <p role="status" className="rounded bg-emerald-900/30 p-4 text-sm text-emerald-300">Thank you. Your remembrance was sent for review; it has not been published.</p>}
          {status === 'error' && <p role="alert" className="rounded bg-red-900/30 p-4 text-sm text-red-300">We could not deliver your submission. No confirmation was recorded; please try again later or use the Contact page.</p>}
          <p className="text-xs leading-5 text-gray-500">See our <Link href="/privacy" className="underline underline-offset-4 hover:text-white">Privacy Policy</Link> for information about submissions. Do not send confidential or legally sensitive material here.</p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
