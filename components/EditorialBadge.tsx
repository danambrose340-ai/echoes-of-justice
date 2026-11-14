import React from 'react';

export type EditorialBadgeType =
  | 'verified'
  | 'allegation'
  | 'family-statement'
  | 'unconfirmed';

interface Props {
  type: EditorialBadgeType;
  children?: React.ReactNode;
  className?: string;
}

const CONFIG: Record<
  EditorialBadgeType,
  { chip: string; border: string; label: string; icon: React.ReactNode }
> = {
  verified: {
    chip: 'text-emerald-400 border-emerald-500/50 bg-emerald-900/20',
    border: 'border-l-emerald-400',
    label: 'VERIFIED FACT',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  allegation: {
    chip: 'text-amber-400 border-amber-500/50 bg-amber-900/20',
    border: 'border-l-amber-500',
    label: 'ALLEGATION',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </svg>
    ),
  },
  'family-statement': {
    chip: 'text-sky-400 border-sky-500/50 bg-sky-900/20',
    border: 'border-l-sky-400',
    label: 'FAMILY STATEMENT',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  unconfirmed: {
    chip: 'text-red-300 border-red-500/50 border-dashed bg-red-900/20',
    border: 'border-l-red-500 border-dashed',
    label: 'UNCONFIRMED INFO',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 8v5M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
};

export default function EditorialBadge({ type, children, className = '' }: Props) {
  const style = CONFIG[type];

  if (!children) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${style.chip} ${className}`}
        role="note"
        aria-label={style.label}
      >
        <span aria-hidden="true">{style.icon}</span>
        {style.label}
      </span>
    );
  }

  return (
    <div className={`my-4 rounded border border-gray-800 bg-slate-900/60 p-4 ${style.border} ${className}`} role="note">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
        <span aria-hidden="true">{style.icon}</span>
        <span>{style.label}</span>
      </div>
      <div className="mt-2 text-white/90">{children}</div>
    </div>
  );
}
