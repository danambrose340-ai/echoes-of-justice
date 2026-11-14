import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 bg-justice-black">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deep-red font-serif text-sm font-bold text-white">
                EJ
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">Echoes of Justice</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Their Stories. Their Truth. Their Echo. A mission-driven community advocacy project
              for remembrance, accountability, and change.
            </p>
            <div className="mt-4 flex gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded border border-gray-700 text-sm text-gray-400 transition hover:border-deep-red hover:text-white"
                >
                  {link.platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Organization">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Organization</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/cases" className="hover:text-white">Cases</Link></li>
              <li><Link href="/stories" className="hover:text-white">Victim Stories</Link></li>
              <li><Link href="/missing" className="hover:text-white">Missing Persons</Link></li>
              <li><Link href="/justice" className="hover:text-white">Justice &amp; Accountability</Link></li>
              <li><Link href="/family-separation" className="hover:text-white">Family Separation &amp; Due Process</Link></li>
              <li><Link href="/news" className="hover:text-white">News &amp; Updates</Link></li>
            </ul>
          </nav>

          <nav aria-label="Get involved">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Get Involved</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/get-involved" className="hover:text-white">Get Involved</Link></li>
              <li><Link href="/know-your-rights" className="hover:text-white">Know Your Rights</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
              <li><Link href="/merch" className="hover:text-white">Merchandise</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Policies">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Policies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
              <li><Link href="/content-policy" className="hover:text-white">Content / Misinformation Policy</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <span>© {year} Echoes of Justice. All rights reserved.</span>
          <span>Colorado Springs · Community advocacy · Not a licensed nonprofit</span>
        </div>
      </div>
    </footer>
  );
}