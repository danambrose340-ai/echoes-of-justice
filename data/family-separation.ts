import {
  ContestedClaim,
  FamilyRight,
  FamilySeparationCase,
  FamilySeparationPressurePoint,
  FamilySeparationResource,
  FamilySeparationStat,
  LegalMilestone,
  ResearchSource,
} from '@/types';

/**
 * Research file for the Family Separation & Due Process section.
 *
 * Every claim on the page is tied to a source below. Figures come from federal
 * data, state law, courts, or named reporting; claims that could not be
 * verified are listed as claims, not facts. Update the `lastReviewed` date
 * whenever the underlying sources are re-checked.
 */
export const lastReviewed = 'October 28, 2026';

export const sources: ResearchSource[] = [
  {
    id: 'cm2023',
    title: 'Child Maltreatment 2023',
    publisher: 'U.S. Department of Health & Human Services, Children’s Bureau',
    date: 'January 8, 2025',
    url: 'https://acf.gov/cb/report/child-maltreatment-2023',
  },
  {
    id: 'afcars2023',
    title: '“Number of Youth in Foster Care Declines Again” (AFCARS FY2023 data)',
    publisher: 'The Imprint',
    date: '2025',
    url: 'https://imprintnews.org/youth-services-insider/number-youth-foster-care-declines-again/261073',
  },
  {
    id: 'kim2017',
    title: '“Lifetime Prevalence of Investigating Child Maltreatment Among US Children”',
    publisher: 'American Journal of Public Health (Kim, Wildeman, Jonson-Reid & Drake)',
    date: 'February 2017',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5227926/',
  },
  {
    id: 'imprint-emergency',
    title: '“Most Children Taken Into Foster Care on an ‘Emergency’ Basis Before Parents Get a Hearing”',
    publisher: 'The Imprint',
    date: 'December 11, 2025',
    url: 'https://imprintnews.org/top-stories/despite-federal-law-and-due-process-rights-most-children-taken-into-foster-care-on-an-emergency-basis-before-parents-get-a-hearing/269291',
  },
  {
    id: 'propublica-hidden',
    title: '“They Took Us Away From Each Other”: Lost Inside America’s Shadow Foster System',
    publisher: 'ProPublica and The New York Times Magazine',
    date: 'December 1, 2021',
    url: 'https://www.propublica.org/article/they-took-us-away-from-each-other-lost-inside-americas-shadow-foster-system',
  },
  {
    id: 'stanford-hidden',
    title: '“America’s Hidden Foster Care System”',
    publisher: 'Stanford Law Review (Josh Gupta-Kagan)',
    date: '2020',
    url: 'https://review.law.stanford.edu/wp-content/uploads/sites/3/2020/04/Gupta-Kagan-72-Stan.-L.-Rev.-841.pdf',
  },
  {
    id: 'newyorker-acs',
    title: '“Taking Children from Their Parents Without a Court Order”',
    publisher: 'The New Yorker',
    date: 'May 28, 2026',
    url: 'https://www.newyorker.com/news/our-local-correspondents/taking-children-from-their-parents-without-a-court-order',
  },
  {
    id: 'nbc-pelletier',
    title: '“Boston Children’s Hospital Wasn’t Negligent in Pelletier Case, Jury Finds”',
    publisher: 'NBC Boston (Associated Press)',
    date: 'February 20, 2020',
    url: 'https://www.nbcboston.com/news/local/jury-findings-justina-pelletier-boston-childrens-hospital/2079394/',
  },
  {
    id: 'ap-sabey',
    title: '“How and when to remove children from their homes? A federal lawsuit raises thorny questions”',
    publisher: 'Associated Press (via Sentinel Colorado)',
    date: 'May 31, 2023',
    url: 'https://sentinelcolorado.com/uncategorized/how-and-when-to-remove-children-from-their-homes-a-federal-lawsuit-raises-thorny-questions/',
  },
  {
    id: 'stanley',
    title: 'Stanley v. Illinois, 405 U.S. 645 (1972)',
    publisher: 'Supreme Court of the United States',
    date: '1972',
    url: 'https://supreme.justia.com/cases/federal/us/405/645/',
  },
  {
    id: 'santosky',
    title: 'Santosky v. Kramer, 455 U.S. 745 (1982)',
    publisher: 'Supreme Court of the United States',
    date: '1982',
    url: 'https://supreme.justia.com/cases/federal/us/455/745/',
  },
  {
    id: 'lassiter',
    title: 'Lassiter v. Department of Social Services, 452 U.S. 18 (1981)',
    publisher: 'Supreme Court of the United States',
    date: '1981',
    url: 'https://supreme.justia.com/cases/federal/us/452/18/',
  },
  {
    id: 'asfa',
    title: '42 U.S.C. § 675(5)(E) — Adoption and Safe Families Act permanency provisions',
    publisher: 'U.S. Code (Legal Information Institute)',
    date: '1997, as amended',
    url: 'https://www.law.cornell.edu/uscode/text/42/675',
  },
  {
    id: 'crs-405',
    title: 'C.R.S. § 19-3-405 — Temporary protective custody',
    publisher: 'Colorado Revised Statutes',
    date: '2025',
    url: 'https://law.justia.com/codes/colorado/title-19/article-3/part-4/section-19-3-405/',
  },
  {
    id: 'crs-202',
    title: 'C.R.S. § 19-3-202 — Right to counsel and jury trial',
    publisher: 'Colorado Revised Statutes',
    date: '2025',
    url: 'https://law.justia.com/codes/colorado/title-19/article-3/part-2/section-19-3-202/',
  },
  {
    id: 'cpo',
    title: 'Child Protection Ombudsman of Colorado — complaint process and FAQ',
    publisher: 'Office of Colorado’s Child Protection Ombudsman',
    date: '2026',
    url: 'https://coloradocpo.org/',
  },
  {
    id: 'cpo-montezuma',
    title: 'Montezuma County Department of Social Services investigation',
    publisher: 'Office of Colorado’s Child Protection Ombudsman',
    date: '2019',
    url: 'https://coloradocpo.org/special-initiative/space-is-the-place/',
  },
  {
    id: 'cosun-falsify',
    title: '“One state agency is charging another $30 an hour for records”',
    publisher: 'The Colorado Sun',
    date: 'July 23, 2024',
    url: 'https://coloradosun.com/2024/07/23/child-ombudsman-information-battle/',
  },
  {
    id: 'nccpr-due',
    title: '“Solutions: Due Process” — NCCPR’s due process agenda for children and families',
    publisher: 'National Coalition for Child Protection Reform',
    date: 'Updated February 2026',
    url: 'https://nccpr.org/solutions-due-process/',
  },
  {
    id: 'humphries',
    title: 'Los Angeles County v. Humphries, 562 U.S. 29 (2010), vacating Humphries v. County of Los Angeles, 554 F.3d 1170 (9th Cir. 2009)',
    publisher: 'Supreme Court of the United States',
    date: '2010',
    url: 'https://supreme.justia.com/cases/federal/us/562/29/',
  },
  {
    id: 'orpc',
    title: 'Family Center — rights information and resources for parents',
    publisher: 'Colorado Office of Respondent Parents’ Counsel',
    date: '2026',
    url: 'https://coloradoorpc.org/family-center/',
  },
  {
    id: 'cwla-co',
    title: 'Colorado state fact sheet',
    publisher: 'Child Welfare League of America',
    date: '2024',
    url: 'https://www.cwla.org/wp-content/uploads/2024/04/Colorado-2024.pdf',
  },
  {
    id: 'nccpr-incentives',
    title: '“Financial Incentives: You Get What You Pay For”',
    publisher: 'National Coalition for Child Protection Reform',
    date: 'Issue Paper 12',
    url: 'https://nccpr.org/nccpr-issue-paper-12-financial-incentives-you-get-what-you-pay-for/',
  },
  {
    id: 'rcfp-co',
    title: 'Colorado — Reporter’s Recording Guide',
    publisher: 'Reporters Committee for Freedom of the Press',
    date: '2026',
    url: 'https://www.rcfp.org/reporters-recording-guide/colorado/',
  },
];

export const headlineStats: FamilySeparationStat[] = [
  {
    value: '4.4 million',
    label: 'CPS referrals in one year',
    detail:
      'Federal data for fiscal year 2023 estimates 4,399,000 referrals involving roughly 7.78 million children. About 47.5 percent of referrals were screened in for investigation.',
    sourceId: 'cm2023',
  },
  {
    value: '37.4%',
    label: 'of U.S. children are investigated before age 18',
    detail:
      'The lifetime rate is 53.0 percent for Black children and 10.2 percent for Asian and Pacific Islander children — the widest documented disparity in who gets investigated at all.',
    sourceId: 'kim2017',
  },
  {
    value: '70–95%',
    label: 'of foster care entries are “emergency” removals',
    detail:
      'In several states, most children enter foster care before any hearing where a parent can object. Texas reports that all of its removals happen on this basis.',
    sourceId: 'imprint-emergency',
  },
  {
    value: '343,077',
    label: 'children in foster care on a single day',
    detail:
      'That was the count on September 30, 2023. Another 175,283 children entered care during the year. These figures exclude informal placements that never enter the court system.',
    sourceId: 'afcars2023',
  },
  {
    value: '64.1%',
    label: 'of substantiated victims are “neglect only”',
    detail:
      'Neglect, not physical or sexual abuse, is the most common basis for state intervention — a category researchers say overlaps heavily with poverty.',
    sourceId: 'cm2023',
  },
  {
    value: '~250,000',
    label: 'children moved into “hidden foster care” annually',
    detail:
      'Best estimates suggest roughly as many children are placed with relatives or friends outside the courts as enter formal foster care — with no petition, no hearing and often no monitoring.',
    sourceId: 'propublica-hidden',
  },
];

export const legalMilestones: LegalMilestone[] = [
  {
    year: '1972',
    title: 'Stanley v. Illinois',
    body:
      'The Supreme Court held that, “as a matter of due process law,” a parent is entitled to a hearing on their fitness before the state takes their children. That principle — a hearing before removal — is the foundation families still cite.',
    sourceId: 'stanley',
  },
  {
    year: '1981',
    title: 'Lassiter v. Department of Social Services',
    body:
      'The Court declined to recognize an absolute right to appointed counsel for indigent parents facing termination, deciding the question case by case. As a result, whether a parent has a lawyer at the moment that matters most still depends on the state.',
    sourceId: 'lassiter',
  },
  {
    year: '1982',
    title: 'Santosky v. Kramer',
    body:
      'Terminating parental rights requires “clear and convincing evidence.” The Court described the parent-child relationship as one of the most fundamental liberty interests recognized under the Fourteenth Amendment.',
    sourceId: 'santosky',
  },
  {
    year: '1997',
    title: 'Adoption and Safe Families Act',
    body:
      'Federal law requires states to seek termination of parental rights once a child has been in foster care for 15 of the most recent 22 months, with limited exceptions. The clock starts running at removal — including removals that were never reviewed by a judge first.',
    sourceId: 'asfa',
  },
  {
    year: 'Colorado',
    title: 'C.R.S. § 19-3-405',
    body:
      'Colorado allows temporary protective custody where continuing to live at home would present a danger to the child’s life or health in the reasonably foreseeable future. A court-appointed official must be reachable by phone at all times to issue orders, and protective custody cannot exceed 72 hours, excluding weekends and court holidays.',
    sourceId: 'crs-405',
  },
  {
    year: 'Colorado',
    title: 'C.R.S. § 19-3-202',
    body:
      'At the first appearance, a Colorado court must advise a parent of the right to be represented by counsel at every stage and of the right to seek appointment of counsel through the Office of Respondent Parents’ Counsel if the parent cannot afford a lawyer. Parents may also demand a jury at the adjudicatory hearing.',
    sourceId: 'crs-202',
  },
];

export const pressurePoints: FamilySeparationPressurePoint[] = [
  {
    id: 'emergency-default',
    title: 'The emergency exception became the rule',
    badge: 'verified',
    body:
      'The law permits removal without a prior hearing only when immediate danger makes a hearing impossible. Reporting across multiple states found emergency removals accounting for 70 to 95 percent of all foster care entries, and Texas confirms that every removal it makes is handled this way. NYU’s Family Defense Clinic calls genuine emergencies “an incredibly small number of cases.”',
    sourceIds: ['imprint-emergency'],
  },
  {
    id: 'ex-parte',
    title: 'The first judge hears only one side',
    badge: 'verified',
    body:
      'Where judicial sign-off is required, it is usually obtained ex parte — by phone or email, with the agency presenting its case and no parent present. Former juvenile court judge Gayl Carr estimated that more than 90 percent of her foster care cases began this way. A judge reviewing a one-sided file “is only as good as the information the agency presents.”',
    sourceIds: ['imprint-emergency'],
  },
  {
    id: 'counsel-late',
    title: 'The lawyer arrives after the child is gone',
    badge: 'verified',
    body:
      'Because Lassiter left appointed counsel to state discretion and case-by-case review, a parent’s access to a lawyer at the removal stage varies by state. Colorado is stronger than most: state law provides a right to counsel at every stage, and protective custody is capped at 72 hours. Elsewhere, the first hearing can arrive with the parent unrepresented.',
    sourceIds: ['lassiter', 'crs-202', 'nccpr-due'],
  },
  {
    id: 'hidden-foster-care',
    title: '“Safety plans” move children outside the courts',
    badge: 'verified',
    body:
      'Instead of filing a petition, caseworkers often persuade a parent to send a child to a relative or friend. At least 35 states use these arrangements; in Texas alone, workers entered roughly 34,000 safety-plan placements in 2014 — more than the number of formal removals. There is frequently no time limit, no monitoring standard, and no guaranteed path to reunification.',
    sourceIds: ['propublica-hidden', 'stanford-hidden'],
  },
  {
    id: 'sealed-records',
    title: 'Records are sealed, and registries can outlast the case',
    badge: 'verified',
    body:
      'Dependency hearings and files are closed in most states, which makes patterns hard to audit. Separately, central abuse registries can list people based on an agency finding rather than a court judgment: in 2009 the Ninth Circuit held that California’s registry, which listed people without a hearing, violated due process. The Supreme Court vacated that ruling on a separate municipal-liability question, leaving the underlying practice in place.',
    sourceIds: ['nccpr-due', 'humphries'],
  },
  {
    id: 'incentives',
    title: 'Federal money follows placement, not prevention',
    badge: 'allegation',
    body:
      'Title IV-E reimburses states a share of foster care and adoption costs — 50 to 83 cents on the dollar for eligible children, roughly half of all children. Critics argue that structure tilts agencies toward removal and adoption. It is a real policy debate; it is not proof that any individual caseworker is paid per child, and we have found no credible evidence of per-child bounties.',
    sourceIds: ['nccpr-incentives'],
  },
];

export const documentedCases: FamilySeparationCase[] = [
  {
    id: 'sabey',
    title: 'Taken at 1 a.m., with no warrant and no court order',
    location: 'Waltham, Massachusetts · family with Colorado ties',
    period: 'July 2022',
    badge: 'verified',
    summary:
      'Sarah Perkins and Joshua Sabey took their three-month-old son to an emergency room with a 103-degree fever. An X-ray found a healing rib fracture the family believes happened weeks earlier when a grandmother caught the baby as he slipped from a car seat. Hospital staff reported possible abuse. Days after a home visit found no evidence of abuse, state workers and police arrived around 1 a.m. and took both children. They had no warrant and no court order, neither of which Massachusetts requires in an emergency.',
    outcome:
      'The children were placed with grandparents within 24 hours, returned home after four weeks, and full custody was restored about three months later after roughly $50,000 in private legal fees. The family’s federal lawsuit, brought with the Pacific Legal Foundation, alleges an unreasonable search, an unreasonable seizure of the children, and deprivation of parental rights without due process.',
    sourceIds: ['ap-sabey'],
  },
  {
    id: 'nyc',
    title: 'A city bypasses family court about half the time',
    location: 'New York City',
    period: '2026 class action',
    badge: 'verified',
    summary:
      'Reporting on New York’s Administration for Children’s Services found the agency skips the legally required court application in roughly half of its removals, taking children first and arguing emergency afterward — about 1,400 such removals a year. In more than a quarter of the cases where the agency then seeks authorization, a judge orders the children returned immediately. Around 90 percent of children removed on an emergency basis are Black or Latino.',
    outcome:
      'In May 2026 a class action was filed alleging violations of the Fourth Amendment (unreasonable seizure of children) and the Fourteenth Amendment (racially discriminatory removals). Those claims are allegations and have not been adjudicated.',
    sourceIds: ['newyorker-acs'],
  },
  {
    id: 'georgia',
    title: '“The requirement of exceptional circumstances was simply ignored”',
    location: 'Fulton County, Georgia',
    period: '2023–2025',
    badge: 'verified',
    summary:
      'Two cases reached the Georgia Court of Appeals after children were removed on an emergency basis following a sibling’s death — one by suicide, one from SIDS — while their parents were cooperating with caseworkers. In one, an Atlanta mother of five lost two children 30 days after her 13-year-old son died; the agency said the children were not in danger but cited an unsecured firearm that investigators later acknowledged was not hers. Asked about the 30-day gap, a special investigator testified: “I cannot explain that time gap.”',
    outcome:
      'The juvenile court ordered the children returned, with the judge saying she was “baffled” the department fought the case. Two appellate panels split 2–1 against the families; Judge Christopher McFadden dissented, writing that the exceptional-circumstances requirement was ignored and “that seems to be the routine practice. And that is very bad.” The families sought review by the Georgia Supreme Court.',
    sourceIds: ['imprint-emergency'],
  },
  {
    id: 'cordell',
    title: 'Two sisters diverted into a system nobody monitors',
    location: 'Cherokee County, North Carolina',
    period: '2016',
    badge: 'verified',
    summary:
      'After their mother died and one sister attempted suicide, two teenagers were separated by county caseworkers. No petition was filed. One was sent to a friend’s parents; the other was placed with a near-stranger under a power of attorney signed by her father. A cash benefit meant for the younger sister created friction in the placement, and she soon moved between friends’ couches while still in high school.',
    outcome:
      'It took years before the sisters learned that neither had ever been in the foster care system — so none of its protections, case plans, or reunification requirements applied. The law professor who documented the practice calls it “a due-process violation all across the country.”',
    sourceIds: ['propublica-hidden', 'stanford-hidden'],
  },
  {
    id: 'pelletier',
    title: 'A diagnostic dispute became a year in state custody',
    location: 'Boston, Massachusetts',
    period: '2013–2014',
    badge: 'verified',
    summary:
      'Justina Pelletier was 14 and had been diagnosed with mitochondrial disease when doctors at Boston Children’s Hospital concluded her symptoms were largely psychological and raised concerns about medical child abuse. When her parents disagreed and tried to return to the treating hospital, the state Department of Children and Families took custody. She spent nearly a year in state custody, much of it in a psychiatric ward.',
    outcome:
      'A judge ordered her returned to her parents in 2014. In 2020, a Suffolk County jury found the hospital was not medically negligent. We report that outcome because it is part of the record, and the case remains a reference point in debates over who decides when a parent and a doctor disagree.',
    sourceIds: ['nbc-pelletier'],
  },
  {
    id: 'montezuma',
    title: 'The opposite failure: a county that did not act',
    location: 'Montezuma County, Colorado',
    period: '2018–2019',
    badge: 'verified',
    summary:
      'Colorado’s independent Child Protection Ombudsman opened an investigation after a citizen reported that a county caseworker had failed to assess 28 child abuse and neglect cases. The nine-month review found the county department’s practices affected the safety of at least a dozen children and that it violated state law and regulations 67 times across 21 referrals and assessments.',
    outcome:
      'The case is included deliberately. The evidence of over-removal does not show that children are never in danger. In the same system, families can be separated without enough process — and children can be left in harm with too little.',
    sourceIds: ['cpo-montezuma'],
  },
];

export const contestedClaims: ContestedClaim[] = [
  {
    claim: '“Caseworkers get paid per child they remove.”',
    status: 'not-supported',
    body:
      'We found no credible evidence of per-child payments or bounties to caseworkers. Federal Title IV-E funds reimburse a share of foster care and adoption costs, which critics argue rewards placement — a claim about structural incentives, not individual payouts. Repeating the bounty claim makes the documented cases easier to dismiss.',
  },
  {
    claim: '“Most reports are false.”',
    status: 'not-supported',
    body:
      'The verified figure is different: in 2014, only 21.9 percent of investigated reports were substantiated. An unsubstantiated report is not the same as a false one — it means the agency did not meet its own standard. Researchers also find that substantiated and unsubstantiated cases often have similar later outcomes, which is why “any investigation” is used as the measure of system contact.',
    sourceId: 'kim2017',
  },
  {
    claim: '“Children are never in real danger; every removal is unnecessary.”',
    status: 'not-supported',
    body:
      'Federal data estimate about 2,000 children died from abuse or neglect in fiscal year 2023. Colorado’s own ombudsman documented a county that failed to assess 28 cases, affecting at least a dozen children. A serious account of this issue has to hold both truths: wrongful separation is real, and so is the harm the system is meant to prevent.',
    sourceId: 'cm2023',
  },
  {
    claim: '“The system targets families because they are poor.”',
    status: 'contested',
    body:
      'Neglect is the basis for 64.1 percent of substantiated victimizations, and neglect definitions frequently turn on housing, supervision, food and medical care — conditions that money can fix. Critics argue this amounts to policing poverty; agencies argue they respond to harm and offer services first. The disagreement is genuine, and the data support concern without settling motive.',
    sourceId: 'cm2023',
  },
  {
    claim: '“Nothing protects families anywhere.”',
    status: 'not-supported',
    body:
      'Colorado requires judicial availability around the clock, caps protective custody at 72 hours, and gives parents a statutory right to counsel at every stage, with appointed counsel available through the Office of Respondent Parents’ Counsel. Those protections are real and unevenly enforced. Knowing what the law already requires is the first tool a family has.',
    sourceId: 'crs-405',
  },
];

export const familyRights: FamilyRight[] = [
  {
    title: 'Ask who they are and what the allegation is',
    body:
      'Write down names, titles, agency and badge numbers, and the date and time. Ask what specific allegation brought them and whether the report was screened in. Ask for it in writing.',
  },
  {
    title: 'Ask whether there is a court order',
    body:
      'If there is no court order and no emergency, you are not required to consent to a search of your home. Say clearly that you do not consent. If they assert an emergency or involve police, do not physically resist — comply, stay calm, and contact a lawyer immediately. Nothing you say can be unsaid.',
  },
  {
    title: 'Ask for a lawyer at the first appearance',
    body:
      'Colorado law gives parents the right to be represented at every stage, and the Office of Respondent Parents’ Counsel provides court-appointed lawyers for parents who cannot afford one. Ask the court to appoint counsel early; do not wait until a termination petition is filed.',
    citation: 'C.R.S. § 19-3-202',
  },
  {
    title: 'Know the 72-hour clock',
    body:
      'Temporary protective custody in Colorado cannot exceed 72 hours, excluding weekends and court holidays, before a court proceeding. Ask for the shelter hearing date and the name of the judge or magistrate who authorized the removal.',
    citation: 'C.R.S. § 19-3-405',
  },
  {
    title: 'Ask for the Notice of Rights and Remedies for Families',
    body:
      'If your child was removed, Colorado law requires that you receive this notice and that the court explain it to you. If you did not get it, ask for it on the record.',
    citation: 'C.R.S. § 19-3-202',
  },
  {
    title: 'Read a “safety plan” before you sign it',
    body:
      'A plan that moves your child to a relative or friend can become hidden foster care — outside the court, without monitoring, and without a reunification timetable. Ask what happens if you decline, what services are offered, how long the arrangement lasts, and who reviews it. Get every plan in writing.',
  },
  {
    title: 'Do not miss a hearing',
    body:
      'Appellate courts have reversed default judgments entered against parents who were not present, but the burden of showing up is yours. Ask the clerk for the date, time and courtroom in writing, and tell the court immediately if you cannot attend.',
  },
  {
    title: 'Keep your own record',
    body:
      'Save texts, emails, voicemails and your own contemporaneous notes. Colorado is a one-party-consent state for recording conversations you are part of; confirm with your lawyer before recording anything, and never record a conversation you are not part of.',
    citation: 'C.R.S. §§ 18-9-303, 18-9-304',
  },
  {
    title: 'File a complaint with the independent ombudsman',
    body:
      'The Child Protection Ombudsman is a separate state agency that investigates concerns about Colorado’s child protection system and must respond within 48 business hours. It can review records families cannot access directly.',
    citation: '720-625-8640',
  },
  {
    title: 'Ask for your records',
    body:
      'You can request your case records from the county and, in an open case, through the court. Ask your attorney to request the removal affidavit, the screening decision and the case notes.',
  },
];

export const reforms = [
  {
    title: 'A judge before removal, except in a documented emergency',
    body:
      'Require prior judicial authorization for removal unless there is an articulable, immediate danger — and require the parent to be heard at the first review, not weeks later.',
  },
  {
    title: 'Counsel at first contact, not first hearing',
    body:
      'Guarantee appointed counsel from the moment an investigation opens, as Colorado largely does for proceedings, and pay appointed lawyers enough to make representation real.',
  },
  {
    title: 'End hidden foster care',
    body:
      'Any placement outside the home should be on the record, time-limited, monitored to the same standard as foster care, and reviewable by a court — with services for the caregiver.',
  },
  {
    title: 'Open the proceedings, with narrow exceptions',
    body:
      'At least 14 states open dependency hearings to the public and press. Secrecy protects agencies more often than it protects children; narrow sealing should require a finding of harm.',
  },
  {
    title: 'Notice and a hearing before a registry listing',
    body:
      'A registry entry can cost a person a job or a license. It should require notice, a hearing and a way to appeal — not an internal finding alone.',
  },
  {
    title: 'Publish the data, county by county',
    body:
      'Removals, emergency removals, returns ordered at first hearing, time to counsel, and outcomes should be public. You cannot audit a system that does not count what it does.',
  },
  {
    title: 'Fund the conditions that cause neglect',
    body:
      'Housing, food, child care and treatment cost less than foster care and do not traumatize children. Prevention is the only reform that reduces the number of cases at the front end.',
  },
];

export const coloradoResources: FamilySeparationResource[] = [
  {
    name: 'Child Protection Ombudsman of Colorado',
    desc: 'Independent state agency that investigates complaints about Colorado’s child protection system and helps families navigate it.',
    phone: '720-625-8640',
    url: 'https://coloradocpo.org/',
  },
  {
    name: 'Office of Respondent Parents’ Counsel',
    desc: 'Court-appointed lawyers, parent advocates and social workers for indigent parents in dependency and neglect cases. Publishes a Know Your Rights flyer.',
    phone: '303-731-8770',
    url: 'https://coloradoorpc.org/family-center/',
  },
  {
    name: 'Office of the Child’s Representative',
    desc: 'Guardian ad litem representation for children in Colorado dependency and neglect proceedings.',
    phone: '303-860-1517',
    url: 'https://www.coloradochildrep.org/',
  },
  {
    name: 'Colorado Legal Services',
    desc: 'Free civil legal help for eligible low-income Coloradans, including family and benefits matters.',
    url: 'https://www.coloradolegalservices.org/',
  },
  {
    name: '988 Colorado — Mental Health Line',
    desc: '24/7 crisis support by call or text for parents and youth. Colorado Crisis Services now routes to 988.',
    phone: '988',
    url: 'https://www.988colorado.com/',
  },
  {
    name: 'National Coalition for Child Protection Reform',
    desc: 'National advocacy organization publishing research and reform recommendations on family separation and due process.',
    url: 'https://nccpr.org/',
  },
];

/** Condensed, print-friendly version of the rights list. */
export const quickRights: Array<{ title: string; body: string }> = [
  {
    title: 'Ask for identification and the allegation',
    body:
      'Write down the caseworker’s name, agency and phone number, and ask what specific report brought them. Ask whether it was screened in.',
  },
  {
    title: 'Ask whether they have a court order',
    body:
      'No order and no emergency? You are not required to consent to a search of your home. Say plainly: “I do not consent.” If they claim an emergency, do not physically resist — comply and call a lawyer.',
  },
  {
    title: 'Say as little as possible until you have counsel',
    body:
      'Be polite. Do not guess, speculate, or sign statements you have not read. Anything you say can appear in a report you will have to correct later.',
  },
  {
    title: 'Ask the court to appoint a lawyer at the first appearance',
    body:
      'Colorado law gives parents the right to be represented at every stage; the Office of Respondent Parents’ Counsel provides appointed lawyers for parents who cannot afford one. (C.R.S. § 19-3-202)',
  },
  {
    title: 'Know the 72-hour limit',
    body:
      'Temporary protective custody cannot exceed 72 hours, excluding weekends and court holidays, before a court proceeding. Ask for the shelter hearing date. (C.R.S. § 19-3-405)',
  },
  {
    title: 'Get the Notice of Rights and Remedies',
    body:
      'If your child was removed, the court must explain this notice to you. If it did not, ask for it on the record.',
  },
  {
    title: 'Read every “safety plan” before signing',
    body:
      'A plan that sends your child to a relative or friend can become hidden foster care: no court, no monitoring, no reunification clock. Ask what happens if you decline and get it in writing.',
  },
  {
    title: 'Do not miss a hearing',
    body:
      'Ask the clerk for the date, time and courtroom in writing. If you cannot attend, tell the court before the hearing — a default can be entered without you.',
  },
  {
    title: 'Keep your own file',
    body:
      'Notes, texts, emails, voicemails, dates and names. Colorado is a one-party-consent state for recording conversations you are part of; ask your lawyer before recording anything.',
  },
  {
    title: 'Call the independent ombudsman',
    body:
      'The Child Protection Ombudsman investigates complaints about Colorado’s child protection system and responds within 48 business hours: 720-625-8640.',
  },
];

export const getSource = (id: string): ResearchSource | undefined =>
  sources.find((source) => source.id === id);
