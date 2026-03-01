/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  years?: string;
  gpa?: string;
  notes?: string;
}

export interface Reference {
  title: string;
  url: string;
}

export interface InfoboxLink {
  label: string;
  url: string;
}

export interface Infobox {
  fullName: string;
  currentRole: string;
  org: string;
  education: string[];
  knownFor: string[];
  website?: string;
  links: InfoboxLink[];
}

export interface ProfileData {
  slug: string;
  name: string;
  currentRole: string;
  org: string;
  education: Education[];
  humanContent: string;
  structuredData: Record<string, any>;
  infobox: Infobox;
  references: Reference[];
}

export type ProfileRecord = Record<string, ProfileData>;
