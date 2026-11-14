'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_ITEMS: Array<{ label: string; href: string; wideOnly?: boolean }> = [
  { label: 'About', href: '/about' },
  { label: 'Cases', href: '/cases' },
  { label: 'Missing', href: '/missing' },
  { label: 'Stories', href: '/stories' },
  { label: 'News', href: '/news' },
  { label: 'Justice', href: '/justice' },
  { label: 'Due Process', href: '/family-separation', wideOnly: true },
  { label: 'Resources', href: '/resources' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Merch', href: '/merch' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-sm ${
        scrolled ? 'shadow-lg shadow-black/40' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3" aria-label="Primary">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Echoes of Justice - Home">
          <Image
            src="/images/brand/echoes-of-justice-logo.svg"
            alt="Echoes of Justice - Their Stories. Their Truth. Their Echo."
            width={660}
            height={180}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-4 text-sm uppercase tracking-wider text-gray-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-white transition ${item.wideOnly ? 'hidden xl:block' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded bg-deep-red px-4 py-2 text-white transition hover:bg-red-800 active:scale-[0.96]"
          >
            Donate
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobileMenu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? (
              <>
                <path d="M6 6l12 12M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobileMenu" className="border-t border-gray-800 bg-black px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-3 text-sm uppercase tracking-wider text-gray-300 hover:bg-gray-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="rounded bg-deep-red px-3 py-3 text-center text-sm uppercase tracking-wider text-white hover:bg-red-800"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}