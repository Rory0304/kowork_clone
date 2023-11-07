import {
  JobCategory as JobCategoryType,
  JobPost as JobPostType,
} from "../graphql/generated";

export { JobCategoryType, JobPostType };

export enum JobType {
  Temporary = "Temporary",
  FullTime = "FullTime",
}

export enum EmploymentArrangement {
  Office = "Office",
  Offline = "Offline",
}

interface CompanyInfo {
  id: number;
  name: string;
  email: string;
  website: string;
  industry: string;
  location: string;
}
