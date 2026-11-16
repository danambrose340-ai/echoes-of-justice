import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white" aria-label="About Echoes of Justice">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
          Their Stories. Their Truth. Their Echo.
        </p>
        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
          Some Stories Should Never Be Silenced.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          Echoes of Justice gives victims, families, and communities a voice beyond the
          silence—advocating for remembrance, accountability, transparency, healing, and change.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/share-story"
            className="rounded bg-deep-red px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-red-800 active:scale-[0.96]"
          >
            Share Your Story
          </Link>
          <Link
            href="/donate"
            className="rounded border border-gray-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition hover:border-white hover:text-white active:scale-[0.96]"
          >
            Support Our Mission
          </Link>
        </div>

        <p className="mt-10 max-w-xl border-t border-gray-800 pt-6 text-sm leading-6 text-gray-400">
          Echoes of Justice is a mission-driven community advocacy project. It is not a licensed or
          registered nonprofit, and donations are not tax-deductible.
        </p>
      </div>

      <div className="relative border-t border-gray-800 bg-black/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-4 text-xs uppercase tracking-wider text-gray-400">
          <span className="text-gray-200">Editorial Standard</span>
          <span className="text-emerald-400">■ Verified Facts</span>
          <span className="text-amber-400">■ Allegations</span>
          <span className="text-sky-400">■ Family Statements</span>
          <span className="text-red-300">■ Unconfirmed</span>
          <Link href="/justice" className="ml-auto text-gray-300 underline-offset-4 hover:underline">
            How we classify every claim
          </Link>
        </div>
      </div>
    </section>
  );
}