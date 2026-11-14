import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sources = [
  {
    label: 'Colorado Revised Statutes § 16-3-103 — Stopping of suspect',
    url: 'https://colorado.public.law/statutes/crs_16-3-103',
    note: 'Colorado stop authority, identity and explanation requests, and limited weapons pat-down authority; statutory text sourced to the 2024 CRS.',
  },
  {
    label: 'Colorado Revised Statutes § 16-3-102 — Arrest by peace officer',
    url: 'https://colorado.public.law/statutes/crs_16-3-102',
    note: 'Colorado statutory arrest grounds.',
  },
  {
    label: 'Colorado Revised Statutes § 24-31-902 — Incident recordings',
    url: 'https://colorado.public.law/statutes/crs_24-31-902',
    note: 'Body-worn/dash-camera activation, complaint-related recording release, and privacy/ongoing-investigation exceptions.',
  },
  {
    label: 'Colorado Revised Statutes §§ 24-72-203 and 24-72-204 — Public records',
    url: 'https://colorado.public.law/statutes/crs_24-72-204',
    note: 'CORA access rules and exceptions, including discretionary withholding of certain law-enforcement investigative records. Section 24-72-203 governs inspection and response timing.',
  },
  {
    label: 'Colorado Division of Criminal Justice — Body-Worn Cameras',
    url: 'https://dcj.colorado.gov/dcj-offices/oajja/body-worn-cameras',
    note: 'State overview of Colorado’s body-worn-camera requirements and SB 20-217.',
  },
  {
    label: 'Colorado POST — Certification Inquiries & Officer Complaints',
    url: 'https://post.colorado.gov/certification-inquiries-officer-complaints',
    note: 'Explains POST authority and routes for criminal and non-criminal complaints.',
  },
  {
    label: 'Colorado Revised Statutes § 18-8-103 — Resisting arrest',
    url: 'https://colorado.public.law/statutes/crs_18-8-103',
    note: 'Defines Colorado’s resisting-arrest offense and its elements.',
  },
  {
    label: 'Colorado Revised Statutes § 18-9-304 — Eavesdropping',
    url: 'https://colorado.public.law/statutes/crs_18-9-304',
    note: 'Colorado’s rule on certain recordings of conversations by someone not visibly present.',
  },
  {
    label: 'U.S. Department of Justice — Law Enforcement Misconduct',
    url: 'https://www.justice.gov/crt/law-enforcement-misconduct',
    note: 'Federal overview of constitutional misconduct enforcement; criminal prosecution under 18 U.S.C. § 242 has demanding intent and proof requirements.',
  },
  {
    label: 'U.S. Department of Justice — Civil Rights Division report form',
    url: 'https://civilrights.justice.gov/report/',
    note: 'Report suspected civil-rights violations; the Division reviews reports and decides whether it can help or refer them.',
  },
  {
    label: 'Colorado Attorney General — Governmental Authority Complaint',
    url: 'https://coag.gov/file-complaint/',
    note: 'For allegations that a governmental authority engaged in a pattern or practice depriving people of legal rights; not an investigation of an individual case.',
  },
  {
    label: 'Tenth Circuit — Irizarry v. Yehia, 38 F.4th 1282 (2022)',
    url: 'https://law.justia.com/cases/federal/appellate-courts/ca10/21-1247/21-1247-2022-07-11.html',
    note: 'Published circuit decision recognizing First Amendment protection for recording police performing public duties in public, subject to applicable limits.',
  },
  {
    label: 'FBI Denver — contact and tips',
    url: 'https://www.fbi.gov/contact-us/field-offices/denver',
    note: 'FBI Denver contact information for Colorado and Wyoming; 303-629-7171 or tips.fbi.gov.',
  },
  {
    label: 'ADA.gov — Effective Communication',
    url: 'https://www.ada.gov/resources/effective-communication/',
    note: 'Federal guidance on effective communication and auxiliary aids for people with communication disabilities.',
  },
];

const sections = [
  {
    number: '01',
    title: 'Before an encounter',
    points: [
      'If it is safe and practical, tell someone you trust where you are and keep your phone accessible. Consider memorizing an emergency contact.',
      'If you have a disability, communication need, language barrier, or medical condition that may affect the interaction, use a short, clear explanation or request an accommodation when you can.',
      'If you are a passenger, do not reach suddenly for documents. Ask before moving and follow clear safety instructions.',
    ],
  },
  {
    number: '02',
    title: 'Clarify whether you are free to leave',
    points: [
      'In a calm voice, ask: “Am I free to leave, or am I being detained?” If told you may leave, move away calmly; do not run or make sudden movements.',
      'Colorado law permits an officer to briefly stop someone on reasonable suspicion of crime. A statutory stop is not itself an arrest. The legal standard and duration depend on the facts; do not assume every police conversation is a detention.',
      'If detained, you can say: “I want to remain silent. I would like to speak with a lawyer.” Avoid arguing about the law at the scene.',
    ],
  },
  {
    number: '03',
    title: 'Identification, questions, and searches',
    points: [
      'Colorado Revised Statutes § 16-3-103 says an officer making a qualifying stop may require your name and address, identification if available, and an explanation of your actions. It expressly says an officer may not require you to produce or disclose your Social Security number under that section.',
      'This statute is not a universal “stop-and-identify” rule for every encounter. Whether a stop is lawful, what identification is required, and what other laws apply depend on the situation. Driving and other regulated activities have separate rules.',
      'If asked to consent to a search and you do not want to, clearly say: “I do not consent to a search.” Do not physically resist. An officer may claim other legal authority; let a lawyer challenge that later.',
      'A pat-down during a § 16-3-103 stop is limited by the statute to a reasonable suspicion that the officer’s personal safety requires it, and is for weapons. Do not reach toward pockets or objects; calmly state what you are doing before moving.',
    ],
  },
  {
    number: '04',
    title: 'If you are arrested or force is used',
    points: [
      'Do not pull away, fight, threaten, or physically interfere. Colorado’s resisting-arrest statute, § 18-8-103, concerns using or threatening force or other means creating a substantial risk of bodily injury to prevent an arrest. Its subsection (2) says an unlawful arrest alone is not a defense where its stated conditions apply. A lawyer can advise on a particular case.',
      'State clearly that you are remaining silent and want a lawyer. Do not sign or explain anything you do not understand; ask for counsel and interpretation.',
      'If injured or in medical distress, say so plainly and request medical help. If you cannot communicate verbally, use an agreed signal, device, written note, or support person where possible.',
    ],
  },
  {
    number: '05',
    title: 'Recording and documenting',
    points: [
      'The Tenth Circuit, which includes Colorado, recognized First Amendment protection for recording police performing public duties in public in Irizarry v. Yehia (2022). This is not permission to interfere, cross a safety boundary, trespass, or obstruct an investigation; applicable limits depend on context.',
      'Colorado’s eavesdropping statute addresses recording by someone not visibly present without consent of at least one principal party. Its scope is fact-specific; this is not a complete analysis of recording law. Do not treat a phone camera as blanket permission to secretly capture private conversations.',
      'Colorado § 24-31-902 generally requires body-worn or dash cameras to be activated for specified public-facing law-enforcement interactions, subject to statutory exceptions. If there is a misconduct complaint, the statute provides a request process and timing rules for recordings, with privacy and active-investigation exceptions.',
      'As soon as practical, write down the date, time, location, badge/name and agency if safely observed, witness names, what was said, sequence of events, and any injuries. Preserve original photos, video, messages, and medical records; do not edit originals.',
    ],
  },
  {
    number: '06',
    title: 'After the encounter',
    points: [
      'Prioritize immediate medical care and personal safety. Tell a trusted person what happened and preserve relevant documents and contact information.',
      'For a complaint, Colorado POST says to first contact the officer’s supervisor, then the agency’s internal affairs unit or agency head; for potential criminal conduct, it identifies the district attorney for the relevant judicial district as another route. POST itself has limited authority over individual complaints.',
      'For body-camera/dash-camera material, § 24-31-902 sets a specific complaint-related release process and exceptions. Other records may be requested under CORA, but law-enforcement investigative records may be withheld in the public interest and other privacy or statutory exceptions apply. Identify the agency, date, time and location, and retain proof of the written request.',
      'You may report a possible federal civil-rights violation through DOJ’s Civil Rights Division. DOJ says reports are reviewed and may lead to follow-up, referral, or a determination that it cannot assist. For potential federal criminal law-enforcement misconduct, DOJ directs the public to the FBI.',
    ],
  },
];

export default function SaferInteractionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Safer Police Interactions | Echoes of Justice</title>
        <meta name="description" content="Practical, Colorado-focused information for safer police interactions, grounded in current statutes and official guidance. Not legal advice." />
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Colorado guide · Based on 2024 Colorado Revised Statutes</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Safer police interactions</h1>
          <p className="mt-5 text-lg leading-8 text-gray-300">
            A calm, practical reference for street encounters, traffic stops, and what to do afterward. No script can guarantee safety; circumstances, local rules, and individual needs differ.
          </p>
        </header>

        <aside className="mb-12 rounded-xl border border-amber-700/40 bg-amber-950/30 p-5 sm:p-6" role="note" aria-label="Important safety notice">
          <p className="font-semibold text-amber-100">If there is immediate danger</p>
          <p className="mt-2 text-sm leading-6 text-amber-100/80">Move to a safer place if possible. Call 911 for an emergency, or ask someone nearby to call. Do not delay urgent medical care to document an incident.</p>
        </aside>

        <nav aria-label="Guide contents" className="mb-12 rounded-xl border border-gray-800 bg-black/30 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">In this guide</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {sections.map((section) => <a key={section.number} href={`#section-${section.number}`} className="text-gray-300 underline decoration-gray-700 underline-offset-4 hover:text-white">{section.title}</a>)}
            <a href="#sources" className="text-gray-300 underline decoration-gray-700 underline-offset-4 hover:text-white">Sources & limits</a>
          </div>
        </nav>

        <div className="space-y-5">
          {sections.map((section) => (
            <section id={`section-${section.number}`} key={section.number} className="scroll-mt-24 rounded-xl border border-gray-800 bg-black/30 p-5 sm:p-7" aria-labelledby={`heading-${section.number}`}>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-red-300" aria-hidden="true">{section.number}</span>
                <h2 id={`heading-${section.number}`} className="font-serif text-2xl font-bold">{section.title}</h2>
              </div>
              <ul className="mt-5 space-y-4 pl-5 text-sm leading-7 text-gray-300 marker:text-red-400">
                {section.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </section>
          ))}
        </div>

        <section id="sources" className="mt-14 scroll-mt-24" aria-labelledby="sources-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">Primary references</p>
          <h2 id="sources-heading" className="mt-2 font-serif text-3xl font-bold">Sources & limits</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
            This guide prioritizes Colorado statutes, a Tenth Circuit decision, and government sources. The Colorado Public Law reproductions cite the Colorado General Assembly’s 2024 Revised Statutes PDFs; check the official text and any later amendments before relying on it. The law changes, and how it applies depends on facts and court decisions.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {sources.map((source) => (
              <li key={source.url} className="rounded-lg border border-gray-800 bg-black/30 p-4">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-red-200 underline decoration-red-900 underline-offset-4 hover:text-white">{source.label}<span className="sr-only"> (opens in a new tab)</span></a>
                <p className="mt-2 text-xs leading-5 text-gray-500">{source.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="mt-12 rounded-xl border border-red-900/60 bg-red-950/20 p-5 sm:p-6" aria-labelledby="disclaimer-heading">
          <h2 id="disclaimer-heading" className="font-serif text-xl font-bold">Disclaimer — general information, not legal advice</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            This page is educational information, not legal advice, representation, or a guarantee of any outcome or safety. It is primarily about Colorado law and is not a complete statement of every applicable law. Do not rely on it instead of advice from a licensed attorney familiar with your circumstances. Rights and obligations vary by location, status, and facts; laws and agency procedures may change. Nothing here encourages resisting, obstructing, or escalating an encounter. If you need legal assistance, contact a Colorado attorney or legal aid provider.
          </p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
