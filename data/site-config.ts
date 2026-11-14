import { SiteConfig } from '@/types';
import { realMissingPersons } from '@/data/missing-persons';

export const siteConfig: SiteConfig = {
  title: 'Echoes of Justice',
  description:
    'Echoes of Justice gives victims, families, and communities a voice beyond the silence — advocating for remembrance, accountability, transparency, healing, and change.',
  navItems: [
    { label: 'About', href: '/about' },
    { label: 'Cases', href: '/cases' },
    { label: 'Missing Persons', href: '/missing' },
    { label: 'Victim Stories', href: '/stories' },
    { label: 'Justice & Accountability', href: '/justice' },
    { label: 'Family Separation & Due Process', href: '/family-separation' },
    { label: 'Resources', href: '/resources' },
    { label: 'Merch', href: '/merch' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ],
  cases: [
    {
      id: 5,
      slug: 'richard-ward',
      name: 'Richard Ward',
      img: '',
      date: 'February 2022',
      incidentDate: 'February 22, 2022',
      location: 'Pueblo West, Pueblo County, CO',
      status: 'Civil rights lawsuit pending',
      summary:
        'Richard Ward, 32, was shot and killed by a Pueblo County sheriff\'s deputy outside Liberty Point International Middle School in Pueblo West, where he had gone with his mother to pick up his younger brother. The district attorney ruled the shooting justified. His family\'s federal civil rights lawsuit is still pending.',
      facts:
        'Shot three times by a Pueblo County sheriff\'s deputy on February 22, 2022. No weapon was found on him. The district attorney ruled the shooting justified in October 2022; a federal civil rights lawsuit filed by his family in February 2023 is pending.',
      meta: 'Estate of Richard Ward v. Pueblo County · U.S. District Court, District of Colorado, No. 1:23-cv-00473 · Tenth Circuit No. 25-1224 · Record last checked November 11, 2026',
      content: [
        {
          type: 'verified',
          heading: 'What the public record shows',
          text: 'On February 22, 2022, Richard Ward, 32, went with his mother and her partner to Liberty Point International Middle School in Pueblo West to pick up his younger brother. Deputies were sent to the school on a report of a suspicious person trying to get into cars. They found Ward sitting in the back seat of his mother\'s SUV; he told them he had mistaken another vehicle for hers and apologized. Deputy Charles McWhorter pulled him from the car, and after a brief struggle shot him three times in the chest. Ward died at the scene. The district attorney\'s review found no weapon on him. The encounter was recorded on body camera, and the family\'s attorneys released the footage in February 2023.',
        },
        {
          type: 'verified',
          heading: 'Official findings and court rulings',
          text: 'In October 2022 the 10th Judicial District Attorney ruled the shooting justified and filed no charges. In February 2023 the sheriff\'s office gave the deputy a Purple Heart for injuries from the encounter. Ward\'s family filed a federal civil rights lawsuit that month. In May 2025 the federal judge ruled, before trial, that deputies violated the Fourth Amendment rights of Ward\'s mother by arresting and holding her for hours after the shooting with no probable cause, and sent the excessive-force and wrongful-death claims to a jury. The defendants appealed. On June 10, 2026, the Tenth Circuit Court of Appeals upheld the denial of qualified immunity.',
        },
        {
          type: 'allegation',
          heading: 'What the family alleges',
          text: 'The lawsuit alleges the deputy used excessive force against an unarmed man who posed no threat, and that Pueblo County failed to train deputies properly on the use of force. It also challenges the arrest of Ward\'s mother and her partner, the seizure of their property and their questioning. The family\'s attorneys say the pill Ward put in his mouth while looking for his ID was likely anxiety medication. These claims have not been decided by a jury.',
        },
        {
          type: 'allegation',
          heading: 'What the deputies say',
          text: 'The deputy who fired said Ward headbutted him and that he believed Ward was reaching for his gun. The district attorney concluded the deputies believed their lives or the lives of others were in danger. The defendants deny the lawsuit\'s claims. The federal judge found the evidence on these points is disputed and must be decided by a jury.',
        },
        {
          type: 'unconfirmed',
          heading: 'What we have not been able to confirm',
          text: 'We have not found a trial date set after the June 2026 appeals ruling, or any verdict or settlement. We will update this record when the court docket changes.',
        },
      ],
      timeline: [
        { date: 'February 22, 2022', event: 'Richard Ward is shot and killed by a Pueblo County sheriff\'s deputy outside Liberty Point International Middle School in Pueblo West.' },
        { date: 'October 2022', event: 'The 10th Judicial District Attorney rules the shooting justified. No charges are filed.' },
        { date: 'February 17, 2023', event: 'The Pueblo County Sheriff\'s Office awards the deputy a Purple Heart.' },
        { date: 'February 21, 2023', event: 'Ward\'s family files a federal civil rights lawsuit; body-camera footage is released.' },
        { date: 'July 2023 – January 2024', event: 'A federal judge twice declines to dismiss the lawsuit.' },
        { date: 'May 9, 2025', event: 'The judge finds deputies and the county liable for unlawfully detaining Ward\'s mother and sends the excessive-force and wrongful-death claims to a jury.' },
        { date: 'June 10, 2026', event: 'The Tenth Circuit Court of Appeals upholds the denial of qualified immunity.' },
      ],
      related: [],
      documents: [
        { title: 'District Attorney decision letter (October 2022)', url: 'https://county.pueblo.org/sites/default/files/2022-10/Officer%20Involved%20Incident%20on%20February%2022%2C%202022.pdf', type: 'Official finding' },
        { title: 'Tenth Circuit opinion, Estate of Ward v. Lucero, No. 25-1224 (June 10, 2026)', url: 'https://law.justia.com/cases/federal/appellate-courts/ca10/25-1224/25-1224-2026-06-10.html', type: 'Court ruling' },
        { title: 'Pueblo Chieftain: deputies set for civil trial (May 2025)', url: 'https://www.yahoo.com/news/pueblo-sheriffs-deputies-set-civil-130109326.html', type: 'News report' },
        { title: 'Colorado Politics: 10th Circuit tosses defendants\' appeal (June 2026)', url: 'https://www.coloradopolitics.com/2026/06/10/10th-circuit-tosses-pueblo-county-sheriff-defendants-appeal-in-fatal-shooting-lawsuit/', type: 'News report' },
        { title: 'NBC News: family sues Colorado deputies (February 2023)', url: 'https://www.nbcnews.com/news/us-news/family-man-shot-middle-school-pickup-sues-colorado-deputies-wrongful-d-rcna71678', type: 'News report' },
      ],
      officialCaseInfo: {
        caseNumber: '1:23-cv-00473 (D. Colo.)',
        agency: 'U.S. District Court, District of Colorado',
      },
    },
  ],
  missingPersons: realMissingPersons,
  stories: [],
  // Every entry was checked against the organization's own website. Re-check before
  // editing, and update resourcesLastVerified in pages/resources.tsx when you do.
  resources: [
    { id: 1, name: '988 Colorado Mental Health Line', desc: 'Free, confidential crisis support by call, text or chat, 24 hours a day. In an emergency, call 911.', tag: 'Crisis Support', phone: '988', url: 'https://www.988colorado.com/en' },
    { id: 2, name: 'National Domestic Violence Hotline', desc: 'Confidential support, safety planning and referrals, 24 hours a day.', tag: 'Domestic Violence', phone: '800-799-7233', url: 'https://www.thehotline.org/' },
    { id: 3, name: 'Violence Free Colorado', desc: 'Statewide domestic violence coalition with a directory of local programs.', tag: 'Domestic Violence', url: 'https://violencefreecolorado.org/' },
    { id: 4, name: 'Colorado Organization for Victim Assistance (COVA)', desc: 'Statewide nonprofit that supports crime victims and connects them with local advocates.', tag: 'Victim Assistance', url: 'https://www.covahelps.org/' },
    { id: 5, name: 'Crime Victim Compensation — how to file', desc: 'State guide to filing a claim. Claims are filed in the judicial district where the crime happened; this page lists every district.', tag: 'Victim Assistance', url: 'https://dcj.colorado.gov/how-to-file-a-claim-for-victim-compensation' },
    { id: 6, name: 'Crime Victim Compensation — 4th Judicial District', desc: 'Claims for crimes in El Paso and Teller counties, through the District Attorney\'s office in Colorado Springs.', tag: 'Victim Assistance', phone: '719-520-6000', url: 'https://www.da4colorado.gov/victims-compensation' },
    { id: 7, name: 'Colorado Legal Services', desc: 'Free civil legal help for low-income Coloradans.', tag: 'Legal Resources', phone: '303-837-1313', url: 'https://www.coloradolegalservices.org/' },
    { id: 8, name: 'ACLU of Colorado', desc: 'Civil liberties organization. Accepts requests for legal help on civil rights issues.', tag: 'Legal Resources', url: 'https://www.aclu-co.org/' },
    { id: 9, name: 'Colorado Bureau of Investigation — Missing Persons', desc: 'State unit that assists local agencies. CBI does not take reports; file a missing person report with your local police or sheriff first.', tag: 'Missing Persons', phone: '303-239-4211', url: 'https://cbi.colorado.gov/sections/investigations/missing-persons' },
    { id: 10, name: 'NamUs', desc: 'National database of missing, unidentified and unclaimed persons. Families can search and add case information.', tag: 'Missing Persons', url: 'https://namus.nij.ojp.gov/' },
    { id: 11, name: 'Denver Office of the Independent Monitor', desc: 'Civilian oversight office that accepts complaints about Denver police officers and sheriff deputies.', tag: 'Police Accountability', url: 'https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Office-of-the-Independent-Monitor/Commendations-and-Complaints' },
    { id: 12, name: 'Colorado Attorney General — File a Complaint', desc: 'State complaint portal, including civil rights concerns about government agencies.', tag: 'Police Accountability', url: 'https://coag.gov/file-complaint/' },
    { id: 13, name: 'Colorado Judicial Branch', desc: 'Court locations, forms, self-help resources and case information.', tag: 'Court Resources', url: 'https://www.coloradojudicial.gov/' },
    { id: 14, name: 'NAMI Colorado', desc: 'Mental health education, support groups and advocacy for individuals and families.', tag: 'Counseling & Grief', url: 'https://namicolorado.org/' },
    { id: 15, name: 'Child Protection Ombudsman of Colorado', desc: 'Independent state agency that investigates complaints about how child protection services were delivered.', tag: 'Family Defense', phone: '720-625-8640', url: 'https://coloradocpo.org/' },
    { id: 16, name: 'Office of Respondent Parents’ Counsel', desc: 'Court-appointed lawyers and parent advocates for indigent parents in dependency and neglect cases.', tag: 'Family Defense', phone: '303-731-8770', url: 'https://coloradoorpc.org/' },
  ],
  merch: [
    { id: 1, name: 'Echo Tee — Black', desc: 'Simple, bold signature tee. Proceeds support mission activities.', collection: 'Awareness', price: 32, size: 'S / M / L / XL / 2XL', img: '/images/merch/echo-tee.jpg' },
    { id: 2, name: 'Remembrance Hoodie', desc: 'Soft heavyweight hoodie with memorial marking.', collection: 'Remembrance', price: 58, size: 'S / M / L / XL / 2XL / 3XL', img: '/images/merch/remembrance-hoodie.jpg' },
    { id: 3, name: 'Justice Long Sleeve', desc: 'Minimal design for everyday wear.', collection: 'Justice', price: 42, size: 'S / M / L / XL / 2XL', img: '/images/merch/justice-long-sleeve.jpg' },
    { id: 4, name: 'Awareness Cap', desc: 'Structured cap in black.', collection: 'Awareness', price: 26, size: 'One Size', img: '/images/merch/awareness-cap.jpg' },
    { id: 5, name: 'Memorial Wristband', desc: 'Silicone wristband for awareness and remembrance.', collection: 'Remembrance', price: 6, size: 'One Size', img: '/images/merch/memorial-wristband.jpg' },
    { id: 6, name: 'Echo Sticker Pack', desc: 'Set of durable sticker designs.', collection: 'Accessories', price: 12, size: 'Pack of 5', img: '/images/merch/echo-stickers.jpg' },
    { id: 7, name: 'Voices Tee — White', desc: 'Designed to amplify voices, not silence them.', collection: 'Voices', price: 34, size: 'S / M / L / XL / 2XL', img: '/images/merch/voices-tee.jpg' },
    { id: 8, name: 'Limited Edition Hoodie — Charcoal', desc: 'Small-batch drop. Numbered design.', collection: 'Remembrance', price: 74, size: 'S / M / L / XL', img: '/images/merch/limited-hoodie.jpg' },
    { id: 9, name: 'Awareness Tote Bag', desc: 'Canvas tote with mission messaging.', collection: 'Accessories', price: 22, size: 'One Size', img: '/images/merch/awareness-tote.jpg' },
  ],
  faqs: [
    {
      id: 1,
      question: 'Is Echoes of Justice a nonprofit?',
      answer: 'No. Echoes of Justice is a mission-driven community advocacy project. It is not a licensed or registered nonprofit, and donations are not tax-deductible. If charitable status is important to you, please support an established organization instead.',
    },
    {
      id: 2,
      question: 'Can I submit a case anonymously?',
      answer: "Yes. Submissions can include contact information only if you choose. All submissions are reviewed before any action is taken.",
    },
    {
      id: 3,
      question: 'Will my story be published immediately?',
      answer: "No. Every story is reviewed, and nothing is published without the submitter's explicit consent.",
    },
    {
      id: 4,
      question: 'Does Echoes of Justice give legal advice?',
      answer: 'No. We provide general information and advocacy support, not legal advice. For legal guidance, consult a licensed attorney.',
    },
  ],
  donationOptions: [
    { amount: 25 },
    { amount: 50 },
    { amount: 100 },
    { amount: 250 },
    { amount: 500 },
  ],
  socialLinks: [
    { platform: 'Facebook', url: '#', label: 'Facebook' },
    { platform: 'Instagram', url: '#', label: 'Instagram' },
    { platform: 'X / Twitter', url: '#', label: 'X' },
    { platform: 'YouTube', url: '#', label: 'YouTube' },
  ],
};
