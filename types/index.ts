export type EditorialType = 'verified' | 'allegation' | 'family-statement' | 'unconfirmed';

export interface CaseContentBlock {
  type: EditorialType;
  heading?: string;
  text: string;
}

export interface CaseTimelineEntry {
  date: string;
  event: string;
}

export interface CaseDocument {
  title: string;
  url: string;
  type: string;
}

export interface Case {
  id: number;
  slug: string;
  name: string;
  img: string;
  date: string;
  incidentDate?: string;
  location: string;
  status: string;
  summary: string;
  facts: string;
  meta: string;
  content?: CaseContentBlock[];
  timeline?: CaseTimelineEntry[];
  familyStatement?: string;
  related?: number[];
  documents?: CaseDocument[];
  officialCaseInfo?: {
    caseNumber: string;
    agency: string;
    agencyContact?: string;
  };
  updates?: Array<{ date: string; title: string; body: string }>;
  uuid?: string;
}

export interface MissingPerson {
  id: number;
  slug: string;
  name: string;
  age?: string;
  ageLastSeen?: string;
  gender?: string;
  height?: string;
  weight?: string;
  hairColor?: string;
  eyeColor?: string;
  race?: string;
  distinguishingFeatures?: string;
  clothing?: string;
  photo?: string;
  lastSeen: string;
  lastLocation: string;
  county?: string;
  description: string;
  caseOnFile?: string;
  namUsCaseNumber?: string;
  sourceUrl?: string;
  sourceName?: string;
  lastVerified?: string;
  lawEnforcement?: { agency: string; phone?: string; caseNumber?: string };
  familyContact?: string;
}

export interface Story {
  id: number;
  slug: string;
  name: string;
  sub: string;
  photo: string;
  quote: string;
  foot: string;
  relationship?: string;
  incidentDate?: string;
  location?: string;
  narrative?: string;
}

export interface Resource {
  id: number;
  name: string;
  desc: string;
  tag: string;
  phone?: string;
  url?: string;
}

export interface MerchItem {
  id: number;
  name: string;
  desc: string;
  collection: string;
  price: number;
  size: string;
  img: string;
}

export interface ResearchSource {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url: string;
}

export interface FamilySeparationStat {
  value: string;
  label: string;
  detail: string;
  sourceId: string;
}

export interface LegalMilestone {
  year: string;
  title: string;
  body: string;
  sourceId?: string;
}

export interface FamilySeparationPressurePoint {
  id: string;
  title: string;
  badge: EditorialType;
  body: string;
  sourceIds: string[];
}

export interface FamilySeparationCase {
  id: string;
  title: string;
  location: string;
  period: string;
  badge: EditorialType;
  summary: string;
  outcome: string;
  sourceIds: string[];
}

export interface ContestedClaim {
  claim: string;
  status: 'supported' | 'not-supported' | 'contested';
  body: string;
  sourceId?: string;
}

export interface FamilyRight {
  title: string;
  body: string;
  citation?: string;
}

export interface FamilySeparationResource {
  name: string;
  desc: string;
  phone?: string;
  url: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  navItems: Array<{ label: string; href: string }>;
  cases: Case[];
  missingPersons: MissingPerson[];
  stories: Story[];
  resources: Resource[];
  merch: MerchItem[];
  faqs: Array<{ id: number; question: string; answer: string }>;
  donationOptions: Array<{ amount: number }>;
  socialLinks: Array<{ platform: string; url: string; label: string }>;
}
