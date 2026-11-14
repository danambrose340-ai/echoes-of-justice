import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EditorialBadge from '@/components/EditorialBadge';
import { siteConfig } from '@/data/site-config';

const editorialTypes = [
  { type: 'verified' as const, label: 'Verified Facts', note: 'Confirmed through primary documents, court records, or multiple independent sources.' },
  { type: 'allegation' as const, label: 'Allegations', note: 'Claimed by a source but not yet independently confirmed. Presented with attribution.' },
  { type: 'family-statement' as const, label: 'Family Statements', note: 'Provided directly by family members or their counsel. Shared with consent.' },
  { type: 'unconfirmed' as const, label: 'Unconfirmed', note: 'Reported or circulating claims awaiting verification. Never labeled as fact.' },
];

const values = [
  { title: 'Document What Is Known', body: 'We separate confirmed fact from allegation so the public can weigh evidence fairly.' },
  { title: 'Center Survivors & Families', body: 'Families drive their own narratives. We publish only with consent.' },
  { title: 'Demand Accountability', body: 'Documentation is the first step toward justice. We follow cases through the system.' },
  { title: 'Protect the Vulnerable', body: 'Information that could endanger anyone is redacted. Safety comes before sensationalism.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Who We Are</p>
          <h1 className="mt-2 font-serif text-5xl font-bold">About Echoes of Justice</h1>
        </header>

        <section className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>
            {siteConfig.description}
          </p>
          <p>
            We are a mission-driven community advocacy project that documents cases of violence and
            injustice that too often fade from public view. We work alongside families, attorneys,
            and advocates to preserve the facts, amplify the voices that were silenced, and press for
            systemic accountability.
          </p>
          <p>
            Our work is grounded in a simple promise: <strong className="text-white">we never pass
            speculation off as fact.</strong> Every piece of information on this site is tagged with
            how it can be verified.
          </p>
        </section>

        <section
          className="mt-10 rounded-lg border border-amber-700/40 bg-amber-950/20 p-5 text-sm leading-6 text-amber-100/90"
          aria-labelledby="status-heading"
        >
          <h2 id="status-heading" className="text-xs font-semibold uppercase tracking-wider text-amber-300">
            Our status
          </h2>
          <p className="mt-2">
            Echoes of Justice is a mission-driven community advocacy project. It is not a licensed
            or registered nonprofit, donations are not tax-deductible, and we are still building the
            financial infrastructure to publish a full accounting of funds. Nothing on this site
            should be read as a claim of charitable registration or tax-exempt status.
          </p>
        </section>

        <section className="mt-16" aria-labelledby="editorial-standard">
          <h2 id="editorial-standard" className="mb-6 font-serif text-3xl font-bold">Editorial Standard</h2>
          <div className="space-y-4">
            {editorialTypes.map((item) => (
              <div key={item.type} className="rounded-lg border border-gray-800 bg-black/40 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <EditorialBadge type={item.type} />
                  <h3 className="font-semibold text-white">{item.label}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="our-values">
          <h2 id="our-values" className="mb-6 font-serif text-3xl font-bold">Our Values</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-gray-800 bg-black/40 p-5">
                <h3 className="font-serif text-lg font-bold text-red-300">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="transparency">
          <h2 id="transparency" className="mb-6 font-serif text-3xl font-bold">Transparency</h2>
          <p className="text-gray-400">
            Echoes of Justice follows a documented editorial process. Corrections are issued openly;
            material changes are noted on the relevant case page. We do not accept payment for
            coverage, and we keep any potential conflicts of interest disclosed on request.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

