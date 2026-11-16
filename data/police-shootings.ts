// Police shootings counted on the home page. The counter is the length of this
// list, so adding an incident here updates the number everywhere on the next
// deploy. Add an incident only with a published source, newest first.
//
// Scope: incidents since January 1, 2026 in which Colorado Springs Police
// Department officers fired at a person. The count matches the Gazette's
// running tally ("six police shootings so far this year", November 13, 2026).
export interface PoliceShooting {
  date: string; // ISO date of the incident
  agency: string;
  location: string;
  outcome: 'killed' | 'injured' | 'not confirmed';
  sourceUrl: string;
}

export const shootingsSince = 'January 1, 2026';
export const shootingsLastChecked = 'November 16, 2026';

const GAZETTE_TALLY =
  'https://gazette.com/2026/11/13/officers-responding-to-police-shooting-around-north-nevada-avenue/';

export const policeShootings: PoliceShooting[] = [
  {
    date: '2026-11-13',
    agency: 'Colorado Springs Police Department',
    location: 'Shadow Mountain Apartments, near Austin Bluffs Parkway',
    outcome: 'injured',
    sourceUrl: GAZETTE_TALLY,
  },
  {
    date: '2026-11-12',
    agency: 'Colorado Springs Police Department',
    location: 'Circle K, 3200 block of Austin Bluffs Parkway',
    outcome: 'killed',
    sourceUrl: 'https://gazette.com/2026/11/12/woman-dies-in-officer-involved-shooting-at-colorado-springs-circle-k/',
  },
  {
    date: '2026-11-04',
    agency: 'Colorado Springs Police Department',
    location: 'Aviator Apartments, North Murray Boulevard',
    outcome: 'injured',
    sourceUrl: 'https://gazette.com/2026/11/04/colorado-springs-officers-involved-in-shooting/',
  },
  {
    date: '2026-04-04',
    agency: 'Colorado Springs Police Department',
    location: 'McDonald’s parking lot, North Academy Boulevard',
    outcome: 'killed',
    sourceUrl: 'https://krdo.com/news/2026/08/17/cspd-deadly-force-ruled-justified/',
  },
  {
    date: '2026-02-02',
    agency: 'Colorado Springs Police Department',
    location: 'East Bijou Street',
    outcome: 'injured',
    sourceUrl: GAZETTE_TALLY,
  },
  {
    date: '2026-01-31',
    agency: 'Colorado Springs Police Department',
    location: 'Colorado Springs',
    outcome: 'not confirmed',
    sourceUrl: GAZETTE_TALLY,
  },
];
