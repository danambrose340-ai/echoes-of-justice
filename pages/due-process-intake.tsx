import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formValues, submitSiteForm } from '@/lib/forms';

const DOCUMENT_OPTIONS = [
  'court petition or order',
  'removal affidavit',
  'police report',
  'case plan or safety plan',
  'agency correspondence',
  'texts, emails or voicemails',
  'audio or video recording',
  'other records',
];

export default function DueProcessIntakePage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [consent, setConsent] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) return;
    const form = event.currentTarget;
    setStatus('sending');
    if (await submitSiteForm('due-process-intake', formValues(form))) {
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Family Separation &amp; Due Process
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Case intake</h1>
          <p className="mt-4 leading-7 text-gray-400">
            Tell us what happened and what records exist. Intake is a first step, not legal
            representation: sending this form does not create an attorney-client relationship and does
            not pause any court deadline you may have.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Read the{' '}
            <Link href="/know-your-rights" className="text-gray-300 underline underline-offset-2 hover:text-white">
              Know Your Rights one-pager
            </Link>{' '}
            and the{' '}
            <Link href="/family-separation" className="text-gray-300 underline underline-offset-2 hover:text-white">
              research behind this section
            </Link>{' '}
            first if you have not.
          </p>
        </header>

        <aside className="mb-8 rounded-lg border border-amber-700/40 bg-amber-950/20 p-4 text-sm leading-6 text-amber-100/90">
          <strong>Do not send documents through this form.</strong> We ask for attachments only after
          an initial review, and we will tell you how to send them securely. Do not include Social
          Security numbers, financial account numbers, full medical records, or information about
          anyone who could be endangered. In an emergency, call 911. If a court date is approaching,
          contact a lawyer now —{' '}
          <Link href="/know-your-rights" className="underline underline-offset-2">
            the one-pager lists free and low-cost options
          </Link>
          .
        </aside>

        <form onSubmit={submit} className="space-y-5 rounded-xl border border-gray-800 bg-black/30 p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="intake-name" className="block text-sm font-medium text-gray-200">
                Your name <span className="text-red-400">*</span>
              </label>
              <input id="intake-name" name="name" required maxLength={120} autoComplete="name" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-email" className="block text-sm font-medium text-gray-200">
                Email <span className="text-red-400">*</span>
              </label>
              <input id="intake-email" name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-phone" className="block text-sm font-medium text-gray-200">
                Phone (optional)
              </label>
              <input id="intake-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-county" className="block text-sm font-medium text-gray-200">
                Colorado county <span className="text-red-400">*</span>
              </label>
              <input id="intake-county" name="county" required maxLength={80} placeholder="e.g. El Paso" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-agency" className="block text-sm font-medium text-gray-200">
                County department or agency
              </label>
              <input id="intake-agency" name="agency" maxLength={120} placeholder="e.g. El Paso County DHS" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-case" className="block text-sm font-medium text-gray-200">
                Case or docket number
              </label>
              <input id="intake-case" name="case_number" maxLength={120} placeholder="Agency or court number, if you have it" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-removal-date" className="block text-sm font-medium text-gray-200">
                Date of removal or first contact
              </label>
              <input id="intake-removal-date" name="removal_date" maxLength={40} placeholder="MM/DD/YYYY" inputMode="numeric" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white" />
            </div>
            <div>
              <label htmlFor="intake-counsel" className="block text-sm font-medium text-gray-200">
                Do you have a lawyer? <span className="text-red-400">*</span>
              </label>
              <select id="intake-counsel" name="has_counsel" required defaultValue="" className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white">
                <option value="" disabled>
                  Select one
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Not sure</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="intake-narrative" className="block text-sm font-medium text-gray-200">
              What happened? <span className="text-red-400">*</span>
            </label>
            <textarea
              id="intake-narrative"
              name="narrative"
              required
              minLength={40}
              maxLength={6000}
              rows={7}
              placeholder="Dates, who was involved, what the agency said the allegation was, whether there was a court order, and what has happened since."
              className="mt-2 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white"
            />
            <p className="mt-2 text-xs text-gray-500">
              Facts are more useful than conclusions. Include the date of any hearing you have
              already attended.
            </p>
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-gray-200">What records exist?</legend>
            <p className="mt-1 text-xs text-gray-500">
              Check what you have or can request. Do not attach anything here.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {DOCUMENT_OPTIONS.map((option) => (
                <label key={option} className="flex items-start gap-2 text-sm text-gray-300">
                  <input type="checkbox" name="documents" value={option} className="mt-1 h-4 w-4 accent-red-700" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-sm leading-6 text-gray-300">
            <input
              type="checkbox"
              name="contact_consent"
              value="yes"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
              className="mt-1 h-4 w-4 accent-red-700"
            />
            <span>
              I understand this is not legal advice, that submitting does not create an
              attorney-client relationship, and that Echoes of Justice may contact me about this
              submission. I have not included information I am not authorized to share.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === 'sending' || !consent}
            className="w-full rounded bg-deep-red px-6 py-3 font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? 'Submitting…' : 'Send for initial review'}
          </button>

          {status === 'sent' && (
            <p role="status" className="rounded bg-emerald-900/30 p-4 text-sm text-emerald-300">
              Received. We will review the summary and reply to your email. Nothing has been
              published, and no records have been requested yet.
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="rounded bg-red-900/30 p-4 text-sm text-red-300">
              We could not deliver your submission. Nothing was recorded; please try again later or
              use the Contact page.
            </p>
          )}

          <p className="text-xs leading-5 text-gray-500">
            See our{' '}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
              Privacy Policy
            </Link>{' '}
            for how submissions are handled.
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
