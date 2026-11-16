// Rights during a police encounter in Colorado. General information, not legal
// advice. Each item names the law it rests on; re-check before changing wording.
export const policeRightsLastReviewed = 'November 16, 2026';

export interface RightItem {
  title: string;
  body: string;
}

export const policeRights: RightItem[] = [
  {
    title: 'Stay calm and keep your hands visible',
    body: 'Do not run, argue or physically resist, even if you believe the stop is unfair. You can challenge it later in court or with a complaint.',
  },
  {
    title: 'Ask: "Am I free to go?"',
    body: 'If the officer says yes, calmly walk away. If not, you are being detained, and you can ask why.',
  },
  {
    title: 'You can stay silent',
    body: 'Say "I am going to remain silent." You do not have to answer questions about where you are going, what you are doing, or your immigration status. During a lawful stop an officer can ask for your name and address.',
  },
  {
    title: 'If you are driving',
    body: 'Show your license, registration and proof of insurance when asked. Keep your hands on the wheel until the officer asks for them, and say where they are before you reach.',
  },
  {
    title: 'Do not consent to a search',
    body: 'Say clearly "I do not consent to a search." Do not block or resist an officer who searches anyway; refusing consent protects your rights later in court.',
  },
  {
    title: 'You can record the police',
    body: 'Colorado law protects your right to film officers doing their jobs in public. Stay at a safe distance, do not interfere, and say out loud that you are recording.',
  },
  {
    title: 'If you are arrested, ask for a lawyer',
    body: 'Say "I want a lawyer" and stop talking. Do not sign anything or explain yourself without one. You can contact a lawyer and a family member soon after you are booked.',
  },
  {
    title: 'Officers must step in when force is excessive',
    body: 'Colorado requires officers to intervene when another officer uses unlawful force, and to report it. Note the names and badge numbers of every officer present.',
  },
  {
    title: 'Write everything down right away',
    body: 'Record badge numbers, patrol car numbers, the time, the place and any witnesses. Photograph injuries and get medical care. Keep copies of every document.',
  },
  {
    title: 'File a complaint and request the footage',
    body: 'File a complaint with the agency, and in Denver also with the Office of the Independent Monitor. Officers must wear body cameras, and footage of a misconduct complaint must generally be released within 21 days of a request.',
  },
];

export const policeRightsSources = [
  'U.S. Const. amend. IV and V; Miranda v. Arizona, 384 U.S. 436 (1966): protection from unreasonable searches and the right to remain silent.',
  'C.R.S. § 16-3-103: an officer may ask a person stopped on reasonable suspicion for name and address.',
  'C.R.S. §§ 16-3-311 and 13-21-128: the right to record police incidents, and a civil remedy when an officer unlawfully seizes or destroys a recording.',
  'C.R.S. § 16-3-402: right of a person in custody to communicate with a lawyer and family.',
  'C.R.S. § 18-8-802: officers’ duty to intervene in, and report, excessive force.',
  'C.R.S. § 24-31-902: body-worn cameras and release of recordings after a misconduct complaint (Senate Bill 20-217).',
];
