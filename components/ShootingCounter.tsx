import Link from 'next/link';
import { policeShootings, shootingsIncompleteCities, shootingsLastChecked, shootingsSince } from '@/data/police-shootings';

function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

export default function ShootingCounter() {
  const total = policeShootings.length;
  const byCity = new Map<string, number>();
  policeShootings.forEach((s) => byCity.set(s.city, (byCity.get(s.city) || 0) + 1));
  const cities = Array.from(byCity.entries()).sort((a, b) => b[1] - a[1]);

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
            Documented police shootings in {joinNames(cities.map(([city]) => city))} since {shootingsSince}
          </h2>
          {cities.length > 1 && (
            <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">
              {cities.map(([city, count]) => `${city} ${count}`).join(' · ')}
            </p>
          )}
          <p className="mt-2 leading-7 text-gray-400">
            Each one is an incident in which city police officers fired at a person. The count
            comes from published reporting and official records, and was last checked{' '}
            {shootingsLastChecked}.
            {shootingsIncompleteCities.length > 0 && (
              <>
                {' '}
                We are still verifying {joinNames(shootingsIncompleteCities)}, so the real number is likely
                higher.
              </>
            )}
          </p>
          <Link href="/news" className="mt-3 inline-block text-sm font-semibold text-red-400 hover:underline">
            See the reporting behind the count →
          </Link>
        </div>
      </div>
    </section>
  );
}
