'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site-config';
import { donationLinks, donationUrl } from '@/lib/donations';

const PRESETS = siteConfig.donationOptions?.length
  ? siteConfig.donationOptions.map((option) => option.amount)
  : [25, 50, 100, 250, 500];

export default function DonateSection() {
  const [amount, setAmount] = useState<number>(50);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const isOpen = Boolean(donationLinks.oneTime);
  const hasMonthly = Boolean(donationLinks.monthly);

  const handleDonate = () => {
    const url = donationUrl(frequency, amount);
    if (url) window.location.assign(url);
  };

  return (
    <section id="donate" className="mx-auto max-w-3xl px-4 py-16" aria-labelledby="donate-heading">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Support the Mission</p>
        <h2 id="donate-heading" className="mt-2 font-serif text-3xl font-bold">Donate</h2>
        <p className="mt-3 max-w-2xl text-gray-300">
          Giving is optional and supports the mission: documenting cases, standing with families,
          and pressing for accountability. It does not buy coverage or influence what we publish.
        </p>
      </div>

      {!isOpen && (
        <div className="rounded-lg border border-gray-800 bg-black/40 p-6">
          <h3 className="font-serif text-xl font-bold text-white">Online giving is not open yet</h3>
          <p className="mt-3 leading-7 text-gray-300">
            We are still setting up secure checkout. Until then, the best way to help is to share a
            case, volunteer, or send us information through the Contact page.
          </p>
        </div>
      )}

      {isOpen && (
      <div className="rounded-lg border border-gray-800 bg-black/40 p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              onClick={() => setAmount(preset)}
              className={`rounded border px-3 py-3 text-center transition ${
                amount === preset
                  ? 'border-deep-red bg-deep-red/10 text-white'
                  : 'border-gray-700 text-gray-300 hover:border-gray-500'
              }`}
              aria-pressed={amount === preset}
            >
              <span className="block text-lg font-bold">${preset}</span>
            </button>
          ))}
        </div>

        <label className="mt-4 block text-sm text-gray-300" htmlFor="custom-amount">
          Or enter a custom amount (USD)
        </label>
        <input
          id="custom-amount"
          type="number"
          min={1}
          value={amount}
          onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 1))}
          className="mt-1 w-full rounded border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-deep-red"
        />

        {hasMonthly && (
        <fieldset className="mt-5">
          <legend className="text-sm text-gray-300">Frequency</legend>
          <div className="mt-2 flex gap-3">
            {(['one-time', 'monthly'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                aria-pressed={frequency === f}
                className={`rounded border px-4 py-2 text-sm uppercase tracking-wider transition ${
                  frequency === f
                    ? 'border-deep-red bg-deep-red/10 text-white'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500'
                }`}
              >
                {f === 'one-time' ? 'One-time' : 'Monthly'}
              </button>
            ))}
          </div>
        </fieldset>
        )}
        {hasMonthly && frequency === 'monthly' && (
          <p className="mt-3 text-xs text-gray-500">Monthly giving uses the fixed amount shown at checkout.</p>
        )}

        <button
          onClick={handleDonate}
          className="mt-6 w-full rounded bg-deep-red px-6 py-3 font-semibold uppercase tracking-wider text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.96]"
        >
          {frequency === 'monthly' ? 'Give monthly' : `Donate $${amount}`}
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Checkout is handled securely by Stripe. No card details ever touch our servers.
        </p>
      </div>
      )}

      <aside className="mt-6 rounded-lg border border-amber-700/40 bg-amber-950/20 p-5 text-sm leading-6 text-amber-100/90">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
          Before you give
        </h3>
        <p className="mt-2">
          Echoes of Justice is a mission-driven community advocacy project. We are not a licensed or
          registered nonprofit, and donations are not tax-deductible. We are still building the
          financial infrastructure to publish a full accounting of funds, so we are not making
          allocation promises — no percentage breakdown is available yet.
        </p>
        <p className="mt-2">
          If charitable giving or a tax receipt matters to you, please wait until that structure is in
          place, or give directly to an established organization working on the issue.
        </p>
      </aside>
    </section>
  );
}
