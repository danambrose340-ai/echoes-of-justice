// Police shootings counted on the home page. The counter is the length of this
// list, so adding an incident here updates the number everywhere on the next
// deploy. Add an incident only with a published source, newest first.
//
// Scope: incidents since January 1, 2026 in which officers of the Colorado
// Springs, Denver or Pueblo police departments fired at a person. Shootings by
// sheriffs, the State Patrol and federal agents are not counted.
// Colorado Springs matches the Gazette's running tally (six as of November 13,
// 2026). Denver and Pueblo have no published tally and are still being
// verified, so those two lists are a minimum, not a complete count.
export interface PoliceShooting {
  date: string; // ISO date of the incident
  city: 'Colorado Springs' | 'Denver' | 'Pueblo';
  agency: string;
  location: string;
  outcome: 'killed' | 'injured' | 'not confirmed';
  sourceUrl: string;
}

export const shootingsSince = 'January 1, 2026';
export const shootingsIncompleteCities = ['Denver', 'Pueblo'];
export const shootingsLastChecked = 'November 16, 2026';

const GAZETTE_TALLY =
  'https://gazette.com/2026/11/13/officers-responding-to-police-shooting-around-north-nevada-avenue/';

export const policeShootings: PoliceShooting[] = [
  {
    date: '2026-11-13',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'Shadow Mountain Apartments, near Austin Bluffs Parkway',
    outcome: 'injured',
    sourceUrl: GAZETTE_TALLY,
  },
  {
    date: '2026-11-12',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'Circle K, 3200 block of Austin Bluffs Parkway',
    outcome: 'killed',
    sourceUrl: 'https://gazette.com/2026/11/12/woman-dies-in-officer-involved-shooting-at-colorado-springs-circle-k/',
  },
  {
    date: '2026-11-04',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'Aviator Apartments, North Murray Boulevard',
    outcome: 'injured',
    sourceUrl: 'https://gazette.com/2026/11/04/colorado-springs-officers-involved-in-shooting/',
  },
  {
    date: '2026-10-10',
    city: 'Pueblo',
    agency: 'Pueblo Police Department',
    location: 'Regency Park Apartments, near Gaylord Avenue',
    outcome: 'killed',
    sourceUrl: 'https://www.officer.com/on-the-street/news/55411141/home-invasion-suspect-luis-antonio-morales-killed-in-shootout-with-pueblo-police',
  },
  {
    date: '2026-07-05',
    city: 'Denver',
    agency: 'Denver Police Department',
    location: 'East 50th Avenue and Washington Street',
    outcome: 'injured',
    sourceUrl: 'https://www.denvergazette.com/2026/07/14/bodycam-footage-shows-denver-police-shoot-man-who-charged-officer-with-knife/',
  },
  {
    date: '2026-06-02',
    city: 'Pueblo',
    agency: 'Pueblo Police Department',
    location: '800 block of East 5th Street',
    outcome: 'injured',
    sourceUrl: 'https://seconews.org/article/8940',
  },
  {
    date: '2026-05-14',
    city: 'Pueblo',
    agency: 'Pueblo Police Department',
    location: 'Drew Dix Park, near Carousel Lane',
    outcome: 'killed',
    sourceUrl: 'https://seconews.org/article/8816',
  },
  {
    date: '2026-05-03',
    city: 'Denver',
    agency: 'Denver Police Department',
    location: '16th Street and California Street',
    outcome: 'injured',
    sourceUrl: 'https://www.denvergazette.com/2026/05/03/armed-suspect-hospitalized-after-downtown-denver-police-shooting/',
  },
  {
    date: '2026-04-25',
    city: 'Denver',
    agency: 'Denver Police Department',
    location: '4300 block of South Quebec Street',
    outcome: 'killed',
    sourceUrl: 'https://www.denvergazette.com/2026/07/22/denver-da-clears-officer-in-april-fatal-shooting/',
  },
  {
    date: '2026-04-07',
    city: 'Denver',
    agency: 'Denver Police Department',
    location: '1012 South Quitman Street',
    outcome: 'killed',
    // Denver District Attorney decision letter dated June 25, 2026.
    sourceUrl: 'https://www.denverda.org/officer-involved-shooting-investigations/',
  },
  {
    date: '2026-04-04',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'McDonald’s parking lot, North Academy Boulevard',
    outcome: 'killed',
    sourceUrl: 'https://krdo.com/news/2026/08/17/cspd-deadly-force-ruled-justified/',
  },
  {
    date: '2026-02-02',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'East Bijou Street',
    outcome: 'injured',
    sourceUrl: GAZETTE_TALLY,
  },
  {
    date: '2026-01-31',
    city: 'Colorado Springs',
    agency: 'Colorado Springs Police Department',
    location: 'Colorado Springs',
    outcome: 'not confirmed',
    sourceUrl: GAZETTE_TALLY,
  },
];
