import Link from 'next/link';
import { policeShootings, shootingsLastChecked, shootingsSince } from '@/data/police-shootings';

export default function ShootingCounter() {
  const total = policeShootings.length;

  return (
    <section className="border-y border-gray-800 bg-black" aria-labelledby="counter-heading">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center md:flex-row md:justify-center md:gap-10 md:text-left">
        <p
          className="counter-flash font-serif text-7xl font-bold leading-none tabular-nums sm:text-8xl"
          aria-hidden="true"
        >
          {total}
        </p>
        <div className="max-w-xl">
          <h2 id="counter-heading" className="font-serif text-2xl font-bold leading-snug text-white">
            <span className="sr-only">{total} </span>
            Colorado Springs police shootings since {shootingsSince}
          </h2>
          <p className="mt-2 leading-7 text-gray-400">
            Each one is an incident in which officers fired at a person. The count comes from
            published reporting and was last checked {shootingsLastChecked}.
          </p>
          <Link href="/news" className="mt-3 inline-block text-sm font-semibold text-red-400 hover:underline">
            See the reporting behind the count →
          </Link>
        </div>
      </div>
    </section>
  );
}
