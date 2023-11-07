export enum JobType {
  Temporary = "Temporary",
  FullTime = "FullTime",
}

export enum EmploymentArrangement {
  Office = "Office",
  Offline = "Offline",
}

export interface JobPostType {
  id: string;
  title: string;
  companyId: string;
  endDate: string;
  basicInfo: {
    jobType: JobType;
    workingHours: {
      startTime: string;
      endTime: string;
    };
    workingDays: string[];
    employmentArrangement: EmploymentArrangement;
    area: string;
    images?: string[];
    salary?: number;
  };
  detailInfo: {
    jobDescription: {
      ko: {
        description?: string;
        qualification?: string;
        preferred?: string;
        etc?: string;
      };
      en: {
        description?: string;
        qualification?: string;
        preferred?: string;
        etc?: string;
      };
    };
    preferredVisaList: string[];
    benefits: string;
    workLocation: string;
  };
}

interface CompanyInfo {
  id: number;
  name: string;
  email: string;
  website: string;
  industry: string;
  location: string;
}
