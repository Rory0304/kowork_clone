import {
  JobCategory as JobCategoryType,
  JobPost as JobPostType,
} from '../graphql/generated';

export { JobCategoryType, JobPostType };

export interface JobPostDescriptionContentType {
  qualification: string;
  description: string;
  preferred: string;
  etc: string;
}

export interface WorkingDaysType {
  days: string[];
}

export interface preferredVisaListType {
  visa: string[];
}

export interface JobPostDescriptionInfoType {
  en: JobPostDescriptionContentType;
  ko: JobPostDescriptionContentType;
}

export enum JobType {
  Temporary = 'Temporary',
  FullTime = 'FullTime',
}

export enum EmploymentArrangement {
  Office = 'Office',
  Offline = 'Offline',
}

interface CompanyInfo {
  id: number;
  name: string;
  email: string;
  website: string;
  industry: string;
  location: string;
}
