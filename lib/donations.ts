// Donations run through Stripe-hosted payment links, so no payment backend is
// needed and no card data touches this site. Set the links as environment
// variables on the host:
//   NEXT_PUBLIC_DONATE_URL          one-time link where the donor chooses the amount
//   NEXT_PUBLIC_DONATE_MONTHLY_URL  optional monthly link
import { isTrustedCheckoutUrl } from '@/lib/server-api';

function trusted(value: string | undefined): string {
  return isTrustedCheckoutUrl(value) ? value : '';
}

export const donationLinks = {
  oneTime: trusted(process.env.NEXT_PUBLIC_DONATE_URL),
  monthly: trusted(process.env.NEXT_PUBLIC_DONATE_MONTHLY_URL),
};

export function donationUrl(frequency: 'one-time' | 'monthly', amount: number): string {
  if (frequency === 'monthly') return donationLinks.monthly;
  if (!donationLinks.oneTime) return '';
  const url = new URL(donationLinks.oneTime);
  // Stripe pre-fills the amount (in cents) on links where the donor chooses what to pay.
  url.searchParams.set('__prefilled_amount', String(Math.round(amount * 100)));
  return url.toString();
}
