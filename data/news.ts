// News links shown on /news. Every item points to the original report; the
// summary is our own short description, not a quotation. Add an item only after
// reading the source, and keep newest first.
export interface NewsItem {
  date: string;
  title: string;
  source: string;
  url: string;
  summary: string;
  topic: 'Police accountability' | 'Courts' | 'Legislation' | 'Missing persons';
  caseSlug?: string;
}

export const newsLastChecked = 'November 14, 2026';

export const newsItems: NewsItem[] = [
  {
    date: 'August 28, 2026',
    title: 'Federal judge dismisses excessive-force lawsuit against Colorado Springs and an officer',
    source: 'Colorado Politics',
    url: 'https://www.coloradopolitics.com/2026/08/28/federal-judge-dismisses-excessive-force-lawsuit-against-colorado-springs-officer/',
    summary:
      'A federal judge dismissed a lawsuit brought by a man shot by a Colorado Springs officer in June 2024, ruling the officer was protected by qualified immunity and that the complaint did not show a city policy caused the injury.',
    topic: 'Courts',
  },
  {
    date: 'August 17, 2026',
    title: 'District attorney rules the fatal shooting of Benjamin Greenfield justified',
    source: 'KRDO',
    url: 'https://krdo.com/news/2026/08/17/cspd-deadly-force-ruled-justified/',
    summary:
      'The 4th Judicial District Attorney cleared three Colorado Springs officers who fired 39 rounds in a McDonald\'s parking lot on North Academy Boulevard in April.',
    topic: 'Police accountability',
    caseSlug: 'benjamin-greenfield',
  },
  {
    date: 'June 25, 2026',
    title: 'Family sues Colorado Springs police over the shooting of Alex Martinez-Sarmiento',
    source: 'Colorado Springs Gazette',
    url: 'https://gazette.com/2026/06/25/colorado-springs-police-sued-after-deadly-shooting/',
    summary:
      'The sister of a 26-year-old man shot in the back while running from an officer downtown in July 2025 filed a lawsuit alleging a long-standing failure to train and discipline officers. The district attorney had ruled the shooting justified.',
    topic: 'Police accountability',
  },
  {
    date: 'June 10, 2026',
    title: 'Appeals court rejects deputies\' appeal in the Richard Ward lawsuit',
    source: 'Colorado Politics',
    url: 'https://www.coloradopolitics.com/2026/06/10/10th-circuit-tosses-pueblo-county-sheriff-defendants-appeal-in-fatal-shooting-lawsuit/',
    summary:
      'The Tenth Circuit left in place a ruling denying immunity to Pueblo County deputies over the 2022 shooting of Richard Ward outside a middle school.',
    topic: 'Courts',
    caseSlug: 'richard-ward',
  },
  {
    date: 'June 3, 2026',
    title: 'New Colorado law gives families faster access to body-camera footage',
    source: 'Colorado Freedom of Information Coalition',
    url: 'https://coloradofoic.org/senate-bill-provides-quicker-access-to-bodycam-footage-for-families-of-people-killed-by-law-enforcement/',
    summary:
      'Senate Bill 26-190, signed June 3, requires an agency to give the immediate family of a person killed by an officer\'s use of force all recordings of the death within 21 days, without the family having to file a misconduct complaint.',
    topic: 'Legislation',
  },
  {
    date: 'April 24, 2026',
    title: 'Body-camera footage released from the stop that ended in Benjamin Greenfield\'s death',
    source: 'Colorado Springs Gazette',
    url: 'https://gazette.com/2026/04/24/alleged-drug-deal-led-police-to-stop-man-before-trading-fire-killing-him-body-cam-shows/',
    summary:
      'Footage from one officer\'s camera shows the stop in the McDonald\'s parking lot, including an officer asking whether a noise he heard was a gunshot.',
    topic: 'Police accountability',
    caseSlug: 'benjamin-greenfield',
  },
  {
    date: 'February 4, 2026',
    title: 'Colorado Missing Persons Day observed at the State Capitol',
    source: 'Colorado Bureau of Investigation',
    url: 'https://cbi.colorado.gov/news-article/colorado-missing-persons-day-february-4-2026-ceremony-to-be-held-at-state-capitol',
    summary:
      'The state\'s annual day of recognition for missing Coloradans and their families, with a ceremony at the Capitol.',
    topic: 'Missing persons',
  },
];
