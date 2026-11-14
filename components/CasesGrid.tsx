import Link from 'next/link';
import type { Case } from '@/types';

export default function CasesGrid({ cases }: { cases: Case[] }) {
  if (!cases.length) {
    return (
      <div className="brand-panel rounded-2xl p-8 text-center">
        <p className="font-serif text-xl font-semibold text-white">No cases to display</p>
        <p className="mt-2 text-sm text-muted">Check back for verified case updates.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cases.map((caseItem) => (
        <article key={caseItem.id} className="brand-panel group flex h-full flex-col overflow-hidden rounded-2xl">
          <div className="relative flex aspect-[16/9] items-end overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_75%_0%,rgba(184,93,72,.22),transparent_48%),linear-gradient(145deg,#211d1b,#111113_65%)] p-5">
            <span className="font-serif text-4xl font-bold tracking-wide text-white/15" aria-hidden="true">
              {caseItem.name.split(' ').slice(0, 2).map((part) => part[0]).join('')}
            </span>
            <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-200">
              {caseItem.status}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{caseItem.date} <span aria-hidden="true">·</span> {caseItem.location}</p>
            <h2 className="mt-3 font-serif text-xl font-semibold text-white">{caseItem.name}</h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">{caseItem.summary}</p>
            <Link href={`/cases/${caseItem.slug}`} className="brand-link mt-5 inline-flex items-center gap-2 text-sm font-semibold">
              Read case record <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

