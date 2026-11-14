import Image from 'next/image';
import Link from 'next/link';
import type { MissingPerson } from '@/types';

export default function MissingPersonsGrid({ persons }: { persons: MissingPerson[] }) {
  if (!persons.length) {
    return (
      <div className="brand-panel rounded-2xl p-8 text-center">
        <p className="font-serif text-xl font-semibold text-white">No active notices</p>
        <p className="mt-2 text-sm text-muted">There are no missing-person profiles listed right now.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {persons.map((person) => (
        <article key={person.id} className="brand-panel group overflow-hidden rounded-2xl">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#2b2120] via-[#171719] to-[#302921]">
            {person.photo ? (
              <Image
                src={person.photo}
                alt={`Photograph of ${person.name}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <svg width="96" height="96" viewBox="0 0 96 96" aria-hidden="true" className="text-gray-600" fill="currentColor">
                <circle cx="48" cy="34" r="18" />
                <path d="M14 88c0-18 15-30 34-30s34 12 34 30v8H14z" />
              </svg>
            )}
            <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/65 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Last seen {person.lastSeen}
            </span>
          </div>
          <div className="p-5">
            <h2 className="font-serif text-xl font-semibold text-white">{person.name}</h2>
            <p className="mt-1 text-sm text-muted">{person.lastLocation}</p>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-300">{person.description}</p>
            <Link href={`/missing/${person.slug}`} className="brand-link mt-5 inline-flex items-center gap-2 text-sm font-semibold">
              View profile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
