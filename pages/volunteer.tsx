'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { submitSiteForm } from '@/lib/forms';

const SKILLS = ['Research & Documentation', 'Writing & Editing', 'Legal Support', 'Family Outreach', 'Social Media & Design', 'Events & Community'];

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    skills: [] as string[],
    availability: '',
    references: '',
    motivation: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleSkill = (skill: string) =>
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const ok = await submitSiteForm('volunteer', { ...form, skills: form.skills.join(', ') });
    setStatus(ok ? 'sent' : 'error');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <header className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Get Involved</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">Volunteer</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Documenters, researchers, writers, designers, and organizers — lend your skills to the
            mission. Volunteer applications are confidential and reviewed by our coordination team.
          </p>
        </header>

        <form onSubmit={submit} className="space-y-5 rounded-lg border border-gray-800 bg-black/40 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="vol-name" className="block text-sm text-gray-300">Full name</label>
              <input id="vol-name" required value={form.name} onChange={(e) => update('name', e.target.value)}
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
            </div>
            <div>
              <label htmlFor="vol-email" className="block text-sm text-gray-300">Email</label>
              <input id="vol-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)}
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="vol-city" className="block text-sm text-gray-300">City / Region</label>
              <input id="vol-city" value={form.city} onChange={(e) => update('city', e.target.value)}
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
            </div>
            <div>
              <label htmlFor="vol-availability" className="block text-sm text-gray-300">Hours per week (approximate)</label>
              <input id="vol-availability" value={form.availability} onChange={(e) => update('availability', e.target.value)}
                className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
            </div>
          </div>

          <fieldset>
            <legend className="block text-sm text-gray-300">Areas of interest</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  aria-pressed={form.skills.includes(skill)}
                  className={`rounded border px-3 py-2 text-sm transition ${
                    form.skills.includes(skill)
                      ? 'border-deep-red bg-deep-red/10 text-white'
                      : 'border-gray-700 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="vol-refs" className="block text-sm text-gray-300">References (optional)</label>
            <textarea id="vol-refs" rows={2} value={form.references} onChange={(e) => update('references', e.target.value)}
              className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
          </div>
          <div>
            <label htmlFor="vol-motivation" className="block text-sm text-gray-300">Why do you want to volunteer?</label>
            <textarea id="vol-motivation" rows={4} value={form.motivation} onChange={(e) => update('motivation', e.target.value)}
              className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red" />
          </div>

          <button type="submit" disabled={status === 'sending'}
            className="w-full rounded bg-deep-red px-6 py-3 font-semibold uppercase tracking-wider transition hover:bg-red-800 disabled:opacity-60">
            {status === 'sending' ? 'Submitting…' : 'Submit Application'}
          </button>
          {status === 'sent' && (
            <p className="rounded bg-emerald-900/30 px-4 py-3 text-sm text-emerald-400">
              Thank you — your application has been received. We will be in touch.
            </p>
          )}
          {status === 'error' && (
            <p className="rounded bg-red-900/30 px-4 py-3 text-sm text-red-400">
              We could not submit your application right now. Please try again shortly.
            </p>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}

