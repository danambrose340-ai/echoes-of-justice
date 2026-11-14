import { useState } from 'react';
import type { FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { formValues, submitSiteForm } from '@/lib/forms';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const delivered = await submitSiteForm('contact', formValues(form));
    if (delivered) {
      setStatus('sent');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <p className="leading-7 text-gray-300">
            Use the form below for general questions, press requests, case information and partnership
            requests. Every message is read by a person. Please do not send confidential or sensitive
            information through this form.
          </p>
          <div className="mt-6 rounded-lg border border-gray-800 bg-black/40 p-5">
            <h2 className="text-xl font-semibold">Families</h2>
            <p className="mt-2 leading-7 text-gray-400">
              If you would like your loved one remembered under Families Speak, send us their story.
              Nothing is published without your separate, explicit consent.
            </p>
            <Link href="/share-story" className="mt-3 inline-block text-sm font-semibold text-red-400 underline underline-offset-4 hover:text-white">
              Share your family&rsquo;s story
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-gray-400">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 focus:border-deep-red"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1 block text-gray-400">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 focus:border-deep-red"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1 block text-gray-400">Subject</label>
                <select id="contact-subject" name="subject" className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 focus:border-deep-red">
                  <option>General Inquiry</option>
                  <option>Family Story</option>
                  <option>Case Submission</option>
                  <option>Media &amp; Press</option>
                  <option>Partnership Request</option>
                  <option>Donation Question</option>
                  <option>Volunteer Interest</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-gray-400">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  minLength={5}
                  maxLength={5000}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 focus:border-deep-red"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" disabled={status === 'sending'} className="w-full rounded-lg bg-deep-red py-3 font-semibold text-white transition-colors hover:bg-red-800 disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'sent' && <p role="status" className="rounded bg-emerald-900/30 p-3 text-sm text-emerald-300">Your message was sent. We will be in touch.</p>}
              {status === 'error' && <p role="alert" className="rounded bg-red-900/30 p-3 text-sm text-red-300">We could not send your message. Please try again later.</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

