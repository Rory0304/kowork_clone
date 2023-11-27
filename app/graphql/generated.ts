import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

export type Company = Node & {
  __typename?: 'Company';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  jobPostCollection?: Maybe<JobPostConnection>;
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  uuid: Scalars['UUID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type CompanyJobPostCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<JobPostFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<JobPostOrderBy>>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
};

export type CompanyDeleteResponse = {
  __typename?: 'CompanyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Company>;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type CompanyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CompanyFilter>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  industry?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CompanyFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CompanyFilter>>;
  uuid?: InputMaybe<UuidFilter>;
  website?: InputMaybe<StringFilter>;
};

export type CompanyInsertInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyInsertResponse = {
  __typename?: 'CompanyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Company>;
};

export type CompanyOrderBy = {
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  industry?: InputMaybe<OrderByDirection>;
  location?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  uuid?: InputMaybe<OrderByDirection>;
  website?: InputMaybe<OrderByDirection>;
};

export type CompanyUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateResponse = {
  __typename?: 'CompanyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Company>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum DegreeType {
  Bachelor = 'Bachelor',
  Doctorate = 'Doctorate',
  Master = 'Master',
  ProBachelor = 'ProBachelor'
}

/** Boolean expression comparing fields on type "DegreeType" */
export type DegreeTypeFilter = {
  eq?: InputMaybe<DegreeType>;
  in?: InputMaybe<Array<DegreeType>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<DegreeType>;
};

export enum EmploymentArrangement {
  Office = 'Office',
  Offline = 'Offline'
}

/** Boolean expression comparing fields on type "EmploymentArrangement" */
export type EmploymentArrangementFilter = {
  eq?: InputMaybe<EmploymentArrangement>;
  in?: InputMaybe<Array<EmploymentArrangement>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<EmploymentArrangement>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export enum GenderType {
  Female = 'Female',
  Male = 'Male'
}

/** Boolean expression comparing fields on type "GenderType" */
export type GenderTypeFilter = {
  eq?: InputMaybe<GenderType>;
  in?: InputMaybe<Array<GenderType>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<GenderType>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export enum JobCategory {
  Etc = 'Etc',
  Language = 'Language',
  Manufacture = 'Manufacture',
  Office = 'Office',
  PartTime = 'PartTime'
}

/** Boolean expression comparing fields on type "JobCategory" */
export type JobCategoryFilter = {
  eq?: InputMaybe<JobCategory>;
  in?: InputMaybe<Array<JobCategory>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<JobCategory>;
};

export type JobPost = Node & {
  __typename?: 'JobPost';
  area: Scalars['String']['output'];
  benefits: Scalars['String']['output'];
  company: Company;
  companyId: Scalars['UUID']['output'];
  companyName: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  employmentArrangement: EmploymentArrangement;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['BigInt']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  jobCategory: JobCategory;
  jobDescription: Scalars['JSON']['output'];
  jobType: JobType;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  preferredVisaList: Scalars['JSON']['output'];
  salary?: Maybe<Scalars['BigFloat']['output']>;
  siDo: Scalars['String']['output'];
  siGunGu: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uuid: Scalars['UUID']['output'];
  workLocation: Scalars['String']['output'];
  workingDays: Scalars['JSON']['output'];
  workingHoursEnd: Scalars['Time']['output'];
  workingHoursStart: Scalars['Time']['output'];
};

export type JobPostConnection = {
  __typename?: 'JobPostConnection';
  edges: Array<JobPostEdge>;
  pageInfo: PageInfo;
};

export type JobPostDeleteResponse = {
  __typename?: 'JobPostDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<JobPost>;
};

export type JobPostEdge = {
  __typename?: 'JobPostEdge';
  cursor: Scalars['String']['output'];
  node: JobPost;
};

export type JobPostFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<JobPostFilter>>;
  area?: InputMaybe<StringFilter>;
  benefits?: InputMaybe<StringFilter>;
  companyId?: InputMaybe<UuidFilter>;
  companyName?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  employmentArrangement?: InputMaybe<EmploymentArrangementFilter>;
  endDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<BigIntFilter>;
  jobCategory?: InputMaybe<JobCategoryFilter>;
  jobType?: InputMaybe<JobTypeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<JobPostFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<JobPostFilter>>;
  salary?: InputMaybe<BigFloatFilter>;
  siDo?: InputMaybe<StringFilter>;
  siGunGu?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  uuid?: InputMaybe<UuidFilter>;
  workLocation?: InputMaybe<StringFilter>;
  workingHoursEnd?: InputMaybe<TimeFilter>;
  workingHoursStart?: InputMaybe<TimeFilter>;
};

export type JobPostInsertInput = {
  area?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  employmentArrangement?: InputMaybe<EmploymentArrangement>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  jobCategory?: InputMaybe<JobCategory>;
  jobDescription?: InputMaybe<Scalars['JSON']['input']>;
  jobType?: InputMaybe<JobType>;
  preferredVisaList?: InputMaybe<Scalars['JSON']['input']>;
  salary?: InputMaybe<Scalars['BigFloat']['input']>;
  siDo?: InputMaybe<Scalars['String']['input']>;
  siGunGu?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
  workLocation?: InputMaybe<Scalars['String']['input']>;
  workingDays?: InputMaybe<Scalars['JSON']['input']>;
  workingHoursEnd?: InputMaybe<Scalars['Time']['input']>;
  workingHoursStart?: InputMaybe<Scalars['Time']['input']>;
};

export type JobPostInsertResponse = {
  __typename?: 'JobPostInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<JobPost>;
};

export type JobPostOrderBy = {
  area?: InputMaybe<OrderByDirection>;
  benefits?: InputMaybe<OrderByDirection>;
  companyId?: InputMaybe<OrderByDirection>;
  companyName?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  employmentArrangement?: InputMaybe<OrderByDirection>;
  endDate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  jobCategory?: InputMaybe<OrderByDirection>;
  jobType?: InputMaybe<OrderByDirection>;
  salary?: InputMaybe<OrderByDirection>;
  siDo?: InputMaybe<OrderByDirection>;
  siGunGu?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  uuid?: InputMaybe<OrderByDirection>;
  workLocation?: InputMaybe<OrderByDirection>;
  workingHoursEnd?: InputMaybe<OrderByDirection>;
  workingHoursStart?: InputMaybe<OrderByDirection>;
};

export type JobPostUpdateInput = {
  area?: InputMaybe<Scalars['String']['input']>;
  benefits?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['UUID']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  employmentArrangement?: InputMaybe<EmploymentArrangement>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  jobCategory?: InputMaybe<JobCategory>;
  jobDescription?: InputMaybe<Scalars['JSON']['input']>;
  jobType?: InputMaybe<JobType>;
  preferredVisaList?: InputMaybe<Scalars['JSON']['input']>;
  salary?: InputMaybe<Scalars['BigFloat']['input']>;
  siDo?: InputMaybe<Scalars['String']['input']>;
  siGunGu?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['UUID']['input']>;
  workLocation?: InputMaybe<Scalars['String']['input']>;
  workingDays?: InputMaybe<Scalars['JSON']['input']>;
  workingHoursEnd?: InputMaybe<Scalars['Time']['input']>;
  workingHoursStart?: InputMaybe<Scalars['Time']['input']>;
};

export type JobPostUpdateResponse = {
  __typename?: 'JobPostUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<JobPost>;
};

export enum JobType {
  FullTime = 'FullTime',
  Temporary = 'Temporary'
}

/** Boolean expression comparing fields on type "JobType" */
export type JobTypeFilter = {
  eq?: InputMaybe<JobType>;
  in?: InputMaybe<Array<JobType>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<JobType>;
};

export enum LanguageLevel {
  Basic = 'Basic',
  Fluent = 'Fluent',
  Intermediate = 'Intermediate',
  Native = 'Native'
}

/** Boolean expression comparing fields on type "LanguageLevel" */
export type LanguageLevelFilter = {
  eq?: InputMaybe<LanguageLevel>;
  in?: InputMaybe<Array<LanguageLevel>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<LanguageLevel>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Company` collection */
  deleteFromCompanyCollection: CompanyDeleteResponse;
  /** Deletes zero or more records from the `JobPost` collection */
  deleteFromJobPostCollection: JobPostDeleteResponse;
  /** Deletes zero or more records from the `Notice` collection */
  deleteFromNoticeCollection: NoticeDeleteResponse;
  /** Deletes zero or more records from the `Profile` collection */
  deleteFromProfileCollection: ProfileDeleteResponse;
  /** Deletes zero or more records from the `Resume` collection */
  deleteFromResumeCollection: ResumeDeleteResponse;
  /** Deletes zero or more records from the `VisaHistory` collection */
  deleteFromVisaHistoryCollection: VisaHistoryDeleteResponse;
  /** Adds one or more `Company` records to the collection */
  insertIntoCompanyCollection?: Maybe<CompanyInsertResponse>;
  /** Adds one or more `JobPost` records to the collection */
  insertIntoJobPostCollection?: Maybe<JobPostInsertResponse>;
  /** Adds one or more `Notice` records to the collection */
  insertIntoNoticeCollection?: Maybe<NoticeInsertResponse>;
  /** Adds one or more `Profile` records to the collection */
  insertIntoProfileCollection?: Maybe<ProfileInsertResponse>;
  /** Adds one or more `Resume` records to the collection */
  insertIntoResumeCollection?: Maybe<ResumeInsertResponse>;
  /** Adds one or more `VisaHistory` records to the collection */
  insertIntoVisaHistoryCollection?: Maybe<VisaHistoryInsertResponse>;
  /** Updates zero or more records in the `Company` collection */
  updateCompanyCollection: CompanyUpdateResponse;
  /** Updates zero or more records in the `JobPost` collection */
  updateJobPostCollection: JobPostUpdateResponse;
  /** Updates zero or more records in the `Notice` collection */
  updateNoticeCollection: NoticeUpdateResponse;
  /** Updates zero or more records in the `Profile` collection */
  updateProfileCollection: ProfileUpdateResponse;
  /** Updates zero or more records in the `Resume` collection */
  updateResumeCollection: ResumeUpdateResponse;
  /** Updates zero or more records in the `VisaHistory` collection */
  updateVisaHistoryCollection: VisaHistoryUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CompanyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromJobPostCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<JobPostFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromNoticeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NoticeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromResumeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ResumeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromVisaHistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VisaHistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoCompanyCollectionArgs = {
  objects: Array<CompanyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoJobPostCollectionArgs = {
  objects: Array<JobPostInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoNoticeCollectionArgs = {
  objects: Array<NoticeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProfileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoResumeCollectionArgs = {
  objects: Array<ResumeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoVisaHistoryCollectionArgs = {
  objects: Array<VisaHistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateCompanyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CompanyFilter>;
  set: CompanyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateJobPostCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<JobPostFilter>;
  set: JobPostUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateNoticeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NoticeFilter>;
  set: NoticeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateResumeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ResumeFilter>;
  set: ResumeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateVisaHistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<VisaHistoryFilter>;
  set: VisaHistoryUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

export type Notice = Node & {
  __typename?: 'Notice';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NoticeConnection = {
  __typename?: 'NoticeConnection';
  edges: Array<NoticeEdge>;
  pageInfo: PageInfo;
};

export type NoticeDeleteResponse = {
  __typename?: 'NoticeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notice>;
};

export type NoticeEdge = {
  __typename?: 'NoticeEdge';
  cursor: Scalars['String']['output'];
  node: Notice;
};

export type NoticeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<NoticeFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<NoticeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<NoticeFilter>>;
  title?: InputMaybe<StringFilter>;
};

export type NoticeInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NoticeInsertResponse = {
  __typename?: 'NoticeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notice>;
};

export type NoticeOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
};

export type NoticeUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NoticeUpdateResponse = {
  __typename?: 'NoticeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Notice>;
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = Node & {
  __typename?: 'Profile';
  birthDate: Scalars['Date']['output'];
  country: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  gender: GenderType;
  id: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  residence: ResidenceType;
  userId: Scalars['UUID']['output'];
  userType: Scalars['String']['output'];
  visa: Scalars['String']['output'];
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
};

export type ProfileDeleteResponse = {
  __typename?: 'ProfileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['String']['output'];
  node: Profile;
};

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfileFilter>>;
  birthDate?: InputMaybe<DateFilter>;
  country?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  gender?: InputMaybe<GenderTypeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfileFilter>>;
  residence?: InputMaybe<ResidenceTypeFilter>;
  userId?: InputMaybe<UuidFilter>;
  userType?: InputMaybe<StringFilter>;
  visa?: InputMaybe<StringFilter>;
};

export type ProfileInsertInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  gender?: InputMaybe<GenderType>;
  name?: InputMaybe<Scalars['String']['input']>;
  residence?: InputMaybe<ResidenceType>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
  visa?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileInsertResponse = {
  __typename?: 'ProfileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileOrderBy = {
  birthDate?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  residence?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  userType?: InputMaybe<OrderByDirection>;
  visa?: InputMaybe<OrderByDirection>;
};

export type ProfileUpdateInput = {
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  gender?: InputMaybe<GenderType>;
  name?: InputMaybe<Scalars['String']['input']>;
  residence?: InputMaybe<ResidenceType>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
  visa?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileUpdateResponse = {
  __typename?: 'ProfileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `Company` */
  companyCollection?: Maybe<CompanyConnection>;
  /** A pagable collection of type `JobPost` */
  jobPostCollection?: Maybe<JobPostConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Notice` */
  noticeCollection?: Maybe<NoticeConnection>;
  /** A pagable collection of type `Profile` */
  profileCollection?: Maybe<ProfileConnection>;
  /** A pagable collection of type `Resume` */
  resumeCollection?: Maybe<ResumeConnection>;
  /** A pagable collection of type `VisaHistory` */
  visaHistoryCollection?: Maybe<VisaHistoryConnection>;
};


/** The root type for querying data */
export type QueryCompanyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CompanyOrderBy>>;
};


/** The root type for querying data */
export type QueryJobPostCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<JobPostFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<JobPostOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryNoticeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NoticeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NoticeOrderBy>>;
};


/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryResumeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ResumeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ResumeOrderBy>>;
};


/** The root type for querying data */
export type QueryVisaHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<VisaHistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VisaHistoryOrderBy>>;
};

export enum ResidenceType {
  Abroad = 'Abroad',
  Domestic = 'Domestic'
}

/** Boolean expression comparing fields on type "ResidenceType" */
export type ResidenceTypeFilter = {
  eq?: InputMaybe<ResidenceType>;
  in?: InputMaybe<Array<ResidenceType>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<ResidenceType>;
};

export type Resume = Node & {
  __typename?: 'Resume';
  address?: Maybe<Scalars['String']['output']>;
  birthDate: Scalars['Date']['output'];
  career?: Maybe<Scalars['JSON']['output']>;
  country: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  detailAddress?: Maybe<Scalars['String']['output']>;
  education?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender: GenderType;
  id: Scalars['BigInt']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  residence: ResidenceType;
  userId: Scalars['UUID']['output'];
  visa: Scalars['String']['output'];
};

export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  edges: Array<ResumeEdge>;
  pageInfo: PageInfo;
};

export type ResumeDeleteResponse = {
  __typename?: 'ResumeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Resume>;
};

export type ResumeEdge = {
  __typename?: 'ResumeEdge';
  cursor: Scalars['String']['output'];
  node: Resume;
};

export type ResumeFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ResumeFilter>>;
  birthDate?: InputMaybe<DateFilter>;
  country?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  detailAddress?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  gender?: InputMaybe<GenderTypeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ResumeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ResumeFilter>>;
  phoneNumber?: InputMaybe<StringFilter>;
  residence?: InputMaybe<ResidenceTypeFilter>;
  userId?: InputMaybe<UuidFilter>;
  visa?: InputMaybe<StringFilter>;
};

export type ResumeInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  career?: InputMaybe<Scalars['JSON']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  detailAddress?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderType>;
  language?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  residence?: InputMaybe<ResidenceType>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visa?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeInsertResponse = {
  __typename?: 'ResumeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Resume>;
};

export type ResumeOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  birthDate?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  detailAddress?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  phoneNumber?: InputMaybe<OrderByDirection>;
  residence?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  visa?: InputMaybe<OrderByDirection>;
};

export type ResumeUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  career?: InputMaybe<Scalars['JSON']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  detailAddress?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<GenderType>;
  language?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  residence?: InputMaybe<ResidenceType>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visa?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeUpdateResponse = {
  __typename?: 'ResumeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Resume>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type VisaHistory = Node & {
  __typename?: 'VisaHistory';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  userId: Scalars['UUID']['output'];
  visaFinalEntryDate: Scalars['Date']['output'];
  visaIssueDate: Scalars['Date']['output'];
  visaStatus: Scalars['String']['output'];
};

export type VisaHistoryConnection = {
  __typename?: 'VisaHistoryConnection';
  edges: Array<VisaHistoryEdge>;
  pageInfo: PageInfo;
};

export type VisaHistoryDeleteResponse = {
  __typename?: 'VisaHistoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<VisaHistory>;
};

export type VisaHistoryEdge = {
  __typename?: 'VisaHistoryEdge';
  cursor: Scalars['String']['output'];
  node: VisaHistory;
};

export type VisaHistoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<VisaHistoryFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<VisaHistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<VisaHistoryFilter>>;
  userId?: InputMaybe<UuidFilter>;
  visaFinalEntryDate?: InputMaybe<DateFilter>;
  visaIssueDate?: InputMaybe<DateFilter>;
  visaStatus?: InputMaybe<StringFilter>;
};

export type VisaHistoryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visaFinalEntryDate?: InputMaybe<Scalars['Date']['input']>;
  visaIssueDate?: InputMaybe<Scalars['Date']['input']>;
  visaStatus?: InputMaybe<Scalars['String']['input']>;
};

export type VisaHistoryInsertResponse = {
  __typename?: 'VisaHistoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<VisaHistory>;
};

export type VisaHistoryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
  visaFinalEntryDate?: InputMaybe<OrderByDirection>;
  visaIssueDate?: InputMaybe<OrderByDirection>;
  visaStatus?: InputMaybe<OrderByDirection>;
};

export type VisaHistoryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visaFinalEntryDate?: InputMaybe<Scalars['Date']['input']>;
  visaIssueDate?: InputMaybe<Scalars['Date']['input']>;
  visaStatus?: InputMaybe<Scalars['String']['input']>;
};

export type VisaHistoryUpdateResponse = {
  __typename?: 'VisaHistoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<VisaHistory>;
};

export type CompanyKeySpecifier = ('email' | 'id' | 'industry' | 'jobPostCollection' | 'location' | 'name' | 'nodeId' | 'uuid' | 'website' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	industry?: FieldPolicy<any> | FieldReadFunction<any>,
	jobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyConnectionKeySpecifier = ('edges' | 'pageInfo' | CompanyConnectionKeySpecifier)[];
export type CompanyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyDeleteResponseKeySpecifier = ('affectedCount' | 'records' | CompanyDeleteResponseKeySpecifier)[];
export type CompanyDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyEdgeKeySpecifier = ('cursor' | 'node' | CompanyEdgeKeySpecifier)[];
export type CompanyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyInsertResponseKeySpecifier = ('affectedCount' | 'records' | CompanyInsertResponseKeySpecifier)[];
export type CompanyInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyUpdateResponseKeySpecifier = ('affectedCount' | 'records' | CompanyUpdateResponseKeySpecifier)[];
export type CompanyUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostKeySpecifier = ('area' | 'benefits' | 'company' | 'companyId' | 'companyName' | 'created_at' | 'employmentArrangement' | 'endDate' | 'id' | 'images' | 'jobCategory' | 'jobDescription' | 'jobType' | 'nodeId' | 'preferredVisaList' | 'salary' | 'siDo' | 'siGunGu' | 'title' | 'uuid' | 'workLocation' | 'workingDays' | 'workingHoursEnd' | 'workingHoursStart' | JobPostKeySpecifier)[];
export type JobPostFieldPolicy = {
	area?: FieldPolicy<any> | FieldReadFunction<any>,
	benefits?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	employmentArrangement?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	jobCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	jobDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	jobType?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredVisaList?: FieldPolicy<any> | FieldReadFunction<any>,
	salary?: FieldPolicy<any> | FieldReadFunction<any>,
	siDo?: FieldPolicy<any> | FieldReadFunction<any>,
	siGunGu?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uuid?: FieldPolicy<any> | FieldReadFunction<any>,
	workLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	workingDays?: FieldPolicy<any> | FieldReadFunction<any>,
	workingHoursEnd?: FieldPolicy<any> | FieldReadFunction<any>,
	workingHoursStart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostConnectionKeySpecifier = ('edges' | 'pageInfo' | JobPostConnectionKeySpecifier)[];
export type JobPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostDeleteResponseKeySpecifier = ('affectedCount' | 'records' | JobPostDeleteResponseKeySpecifier)[];
export type JobPostDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostEdgeKeySpecifier = ('cursor' | 'node' | JobPostEdgeKeySpecifier)[];
export type JobPostEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostInsertResponseKeySpecifier = ('affectedCount' | 'records' | JobPostInsertResponseKeySpecifier)[];
export type JobPostInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobPostUpdateResponseKeySpecifier = ('affectedCount' | 'records' | JobPostUpdateResponseKeySpecifier)[];
export type JobPostUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('deleteFromCompanyCollection' | 'deleteFromJobPostCollection' | 'deleteFromNoticeCollection' | 'deleteFromProfileCollection' | 'deleteFromResumeCollection' | 'deleteFromVisaHistoryCollection' | 'insertIntoCompanyCollection' | 'insertIntoJobPostCollection' | 'insertIntoNoticeCollection' | 'insertIntoProfileCollection' | 'insertIntoResumeCollection' | 'insertIntoVisaHistoryCollection' | 'updateCompanyCollection' | 'updateJobPostCollection' | 'updateNoticeCollection' | 'updateProfileCollection' | 'updateResumeCollection' | 'updateVisaHistoryCollection' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	deleteFromCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromProfileCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromResumeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromVisaHistoryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoProfileCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoResumeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoVisaHistoryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfileCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResumeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateVisaHistoryCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('nodeId' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeKeySpecifier = ('created_at' | 'id' | 'nodeId' | 'title' | NoticeKeySpecifier)[];
export type NoticeFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeConnectionKeySpecifier = ('edges' | 'pageInfo' | NoticeConnectionKeySpecifier)[];
export type NoticeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeDeleteResponseKeySpecifier = ('affectedCount' | 'records' | NoticeDeleteResponseKeySpecifier)[];
export type NoticeDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeEdgeKeySpecifier = ('cursor' | 'node' | NoticeEdgeKeySpecifier)[];
export type NoticeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeInsertResponseKeySpecifier = ('affectedCount' | 'records' | NoticeInsertResponseKeySpecifier)[];
export type NoticeInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeUpdateResponseKeySpecifier = ('affectedCount' | 'records' | NoticeUpdateResponseKeySpecifier)[];
export type NoticeUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('birthDate' | 'country' | 'created_at' | 'gender' | 'id' | 'name' | 'nodeId' | 'residence' | 'userId' | 'userType' | 'visa' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	birthDate?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	residence?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	userType?: FieldPolicy<any> | FieldReadFunction<any>,
	visa?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileConnectionKeySpecifier = ('edges' | 'pageInfo' | ProfileConnectionKeySpecifier)[];
export type ProfileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileDeleteResponseKeySpecifier = ('affectedCount' | 'records' | ProfileDeleteResponseKeySpecifier)[];
export type ProfileDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileEdgeKeySpecifier = ('cursor' | 'node' | ProfileEdgeKeySpecifier)[];
export type ProfileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileInsertResponseKeySpecifier = ('affectedCount' | 'records' | ProfileInsertResponseKeySpecifier)[];
export type ProfileInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileUpdateResponseKeySpecifier = ('affectedCount' | 'records' | ProfileUpdateResponseKeySpecifier)[];
export type ProfileUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('companyCollection' | 'jobPostCollection' | 'node' | 'noticeCollection' | 'profileCollection' | 'resumeCollection' | 'visaHistoryCollection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	companyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	jobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	noticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	profileCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	resumeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	visaHistoryCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeKeySpecifier = ('address' | 'birthDate' | 'career' | 'country' | 'created_at' | 'detailAddress' | 'education' | 'email' | 'gender' | 'id' | 'language' | 'name' | 'nodeId' | 'phoneNumber' | 'residence' | 'userId' | 'visa' | ResumeKeySpecifier)[];
export type ResumeFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	birthDate?: FieldPolicy<any> | FieldReadFunction<any>,
	career?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	detailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	education?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	residence?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	visa?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeConnectionKeySpecifier = ('edges' | 'pageInfo' | ResumeConnectionKeySpecifier)[];
export type ResumeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeDeleteResponseKeySpecifier = ('affectedCount' | 'records' | ResumeDeleteResponseKeySpecifier)[];
export type ResumeDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeEdgeKeySpecifier = ('cursor' | 'node' | ResumeEdgeKeySpecifier)[];
export type ResumeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeInsertResponseKeySpecifier = ('affectedCount' | 'records' | ResumeInsertResponseKeySpecifier)[];
export type ResumeInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResumeUpdateResponseKeySpecifier = ('affectedCount' | 'records' | ResumeUpdateResponseKeySpecifier)[];
export type ResumeUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryKeySpecifier = ('created_at' | 'id' | 'nodeId' | 'userId' | 'visaFinalEntryDate' | 'visaIssueDate' | 'visaStatus' | VisaHistoryKeySpecifier)[];
export type VisaHistoryFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	visaFinalEntryDate?: FieldPolicy<any> | FieldReadFunction<any>,
	visaIssueDate?: FieldPolicy<any> | FieldReadFunction<any>,
	visaStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryConnectionKeySpecifier = ('edges' | 'pageInfo' | VisaHistoryConnectionKeySpecifier)[];
export type VisaHistoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryDeleteResponseKeySpecifier = ('affectedCount' | 'records' | VisaHistoryDeleteResponseKeySpecifier)[];
export type VisaHistoryDeleteResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryEdgeKeySpecifier = ('cursor' | 'node' | VisaHistoryEdgeKeySpecifier)[];
export type VisaHistoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryInsertResponseKeySpecifier = ('affectedCount' | 'records' | VisaHistoryInsertResponseKeySpecifier)[];
export type VisaHistoryInsertResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VisaHistoryUpdateResponseKeySpecifier = ('affectedCount' | 'records' | VisaHistoryUpdateResponseKeySpecifier)[];
export type VisaHistoryUpdateResponseFieldPolicy = {
	affectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	records?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	CompanyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyConnectionKeySpecifier | (() => undefined | CompanyConnectionKeySpecifier),
		fields?: CompanyConnectionFieldPolicy,
	},
	CompanyDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyDeleteResponseKeySpecifier | (() => undefined | CompanyDeleteResponseKeySpecifier),
		fields?: CompanyDeleteResponseFieldPolicy,
	},
	CompanyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyEdgeKeySpecifier | (() => undefined | CompanyEdgeKeySpecifier),
		fields?: CompanyEdgeFieldPolicy,
	},
	CompanyInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyInsertResponseKeySpecifier | (() => undefined | CompanyInsertResponseKeySpecifier),
		fields?: CompanyInsertResponseFieldPolicy,
	},
	CompanyUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyUpdateResponseKeySpecifier | (() => undefined | CompanyUpdateResponseKeySpecifier),
		fields?: CompanyUpdateResponseFieldPolicy,
	},
	JobPost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostKeySpecifier | (() => undefined | JobPostKeySpecifier),
		fields?: JobPostFieldPolicy,
	},
	JobPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostConnectionKeySpecifier | (() => undefined | JobPostConnectionKeySpecifier),
		fields?: JobPostConnectionFieldPolicy,
	},
	JobPostDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostDeleteResponseKeySpecifier | (() => undefined | JobPostDeleteResponseKeySpecifier),
		fields?: JobPostDeleteResponseFieldPolicy,
	},
	JobPostEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostEdgeKeySpecifier | (() => undefined | JobPostEdgeKeySpecifier),
		fields?: JobPostEdgeFieldPolicy,
	},
	JobPostInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostInsertResponseKeySpecifier | (() => undefined | JobPostInsertResponseKeySpecifier),
		fields?: JobPostInsertResponseFieldPolicy,
	},
	JobPostUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobPostUpdateResponseKeySpecifier | (() => undefined | JobPostUpdateResponseKeySpecifier),
		fields?: JobPostUpdateResponseFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Notice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		fields?: NoticeFieldPolicy,
	},
	NoticeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeConnectionKeySpecifier | (() => undefined | NoticeConnectionKeySpecifier),
		fields?: NoticeConnectionFieldPolicy,
	},
	NoticeDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeDeleteResponseKeySpecifier | (() => undefined | NoticeDeleteResponseKeySpecifier),
		fields?: NoticeDeleteResponseFieldPolicy,
	},
	NoticeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeEdgeKeySpecifier | (() => undefined | NoticeEdgeKeySpecifier),
		fields?: NoticeEdgeFieldPolicy,
	},
	NoticeInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeInsertResponseKeySpecifier | (() => undefined | NoticeInsertResponseKeySpecifier),
		fields?: NoticeInsertResponseFieldPolicy,
	},
	NoticeUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeUpdateResponseKeySpecifier | (() => undefined | NoticeUpdateResponseKeySpecifier),
		fields?: NoticeUpdateResponseFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	ProfileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileConnectionKeySpecifier | (() => undefined | ProfileConnectionKeySpecifier),
		fields?: ProfileConnectionFieldPolicy,
	},
	ProfileDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileDeleteResponseKeySpecifier | (() => undefined | ProfileDeleteResponseKeySpecifier),
		fields?: ProfileDeleteResponseFieldPolicy,
	},
	ProfileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileEdgeKeySpecifier | (() => undefined | ProfileEdgeKeySpecifier),
		fields?: ProfileEdgeFieldPolicy,
	},
	ProfileInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileInsertResponseKeySpecifier | (() => undefined | ProfileInsertResponseKeySpecifier),
		fields?: ProfileInsertResponseFieldPolicy,
	},
	ProfileUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileUpdateResponseKeySpecifier | (() => undefined | ProfileUpdateResponseKeySpecifier),
		fields?: ProfileUpdateResponseFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Resume?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeKeySpecifier | (() => undefined | ResumeKeySpecifier),
		fields?: ResumeFieldPolicy,
	},
	ResumeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeConnectionKeySpecifier | (() => undefined | ResumeConnectionKeySpecifier),
		fields?: ResumeConnectionFieldPolicy,
	},
	ResumeDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeDeleteResponseKeySpecifier | (() => undefined | ResumeDeleteResponseKeySpecifier),
		fields?: ResumeDeleteResponseFieldPolicy,
	},
	ResumeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeEdgeKeySpecifier | (() => undefined | ResumeEdgeKeySpecifier),
		fields?: ResumeEdgeFieldPolicy,
	},
	ResumeInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeInsertResponseKeySpecifier | (() => undefined | ResumeInsertResponseKeySpecifier),
		fields?: ResumeInsertResponseFieldPolicy,
	},
	ResumeUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResumeUpdateResponseKeySpecifier | (() => undefined | ResumeUpdateResponseKeySpecifier),
		fields?: ResumeUpdateResponseFieldPolicy,
	},
	VisaHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryKeySpecifier | (() => undefined | VisaHistoryKeySpecifier),
		fields?: VisaHistoryFieldPolicy,
	},
	VisaHistoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryConnectionKeySpecifier | (() => undefined | VisaHistoryConnectionKeySpecifier),
		fields?: VisaHistoryConnectionFieldPolicy,
	},
	VisaHistoryDeleteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryDeleteResponseKeySpecifier | (() => undefined | VisaHistoryDeleteResponseKeySpecifier),
		fields?: VisaHistoryDeleteResponseFieldPolicy,
	},
	VisaHistoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryEdgeKeySpecifier | (() => undefined | VisaHistoryEdgeKeySpecifier),
		fields?: VisaHistoryEdgeFieldPolicy,
	},
	VisaHistoryInsertResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryInsertResponseKeySpecifier | (() => undefined | VisaHistoryInsertResponseKeySpecifier),
		fields?: VisaHistoryInsertResponseFieldPolicy,
	},
	VisaHistoryUpdateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VisaHistoryUpdateResponseKeySpecifier | (() => undefined | VisaHistoryUpdateResponseKeySpecifier),
		fields?: VisaHistoryUpdateResponseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const ComapnyFieldsFragmentDoc = gql`
    fragment ComapnyFields on Company {
  uuid
  name
  email
  website
  industry
  location
}
    `;
export const JobPostListItemFieldsFragmentDoc = gql`
    fragment JobPostListItemFields on JobPost {
  id
  title
  companyName
  jobCategory
  jobType
  endDate
  siDo
  siGunGu
}
    `;
export const JobPostItemFieldsFragmentDoc = gql`
    fragment JobPostItemFields on JobPost {
  id
  title
  companyName
  companyId
  area
  images
  salary
  benefits
  jobDescription
  workingDays
  workLocation
  workingHoursEnd
  workingHoursStart
  jobType
  employmentArrangement
  preferredVisaList
  endDate
  siDo
  siGunGu
}
    `;
export const VisaHistoryFieldsFragmentDoc = gql`
    fragment VisaHistoryFields on VisaHistory {
  visaStatus
  visaIssueDate
  visaFinalEntryDate
}
    `;
export const GetCompanyDocument = gql`
    query GetCompany($uuid: UUID) {
  companyCollection(filter: {uuid: {eq: $uuid}}) {
    edges {
      node {
        ...ComapnyFields
      }
    }
  }
}
    ${ComapnyFieldsFragmentDoc}`;
export const GetJobPostDocument = gql`
    query GetJobPost($uuid: UUID) {
  jobPostCollection(filter: {uuid: {eq: $uuid}}) {
    edges {
      node {
        ...JobPostItemFields
      }
    }
  }
}
    ${JobPostItemFieldsFragmentDoc}`;
export const GetJobPostByFilterDocument = gql`
    query GetJobPostByFilter($jobCategory: [JobCategory!], $siDo: [String!], $first: Int, $after: Cursor) {
  jobPostCollection(
    first: $first
    after: $after
    filter: {and: [{jobCategory: {in: $jobCategory}}, {siDo: {in: $siDo}}]}
    orderBy: [{created_at: DescNullsLast}]
  ) {
    edges {
      node {
        ...JobPostListItemFields
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${JobPostListItemFieldsFragmentDoc}`;
export const GetHighlightedJobPostDocument = gql`
    query GetHighlightedJobPost($first: Int, $after: Cursor) {
  jobPostCollection(
    first: $first
    after: $after
    orderBy: [{endDate: DescNullsLast}]
  ) {
    edges {
      node {
        ...JobPostListItemFields
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${JobPostListItemFieldsFragmentDoc}`;
export const GetNoticesDocument = gql`
    query GetNotices($first: Int, $after: Cursor) {
  noticeCollection(first: $first, after: $after) {
    edges {
      node {
        id
        title
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;
export const GetVisaHistoryDocument = gql`
    query GetVisaHistory($userId: UUID) {
  visaHistoryCollection(filter: {userId: {eq: $userId}}) {
    edges {
      node {
        ...VisaHistoryFields
      }
    }
  }
}
    ${VisaHistoryFieldsFragmentDoc}`;
export const InsertVisaEnrolLHistoryDocument = gql`
    mutation insertVisaEnrolLHistory($userId: UUID, $visaStatus: String, $visaIssueDate: Date, $visaFinalEntryDate: Date) {
  insertIntoVisaHistoryCollection(
    objects: {userId: $userId, visaStatus: $visaStatus, visaIssueDate: $visaIssueDate, visaFinalEntryDate: $visaFinalEntryDate}
  ) {
    records {
      id
    }
  }
}
    `;
export type InsertVisaEnrolLHistoryMutationFn = Apollo.MutationFunction<InsertVisaEnrolLHistoryMutation, InsertVisaEnrolLHistoryMutationVariables>;
export type InsertVisaEnrolLHistoryMutationOptions = Apollo.BaseMutationOptions<InsertVisaEnrolLHistoryMutation, InsertVisaEnrolLHistoryMutationVariables>;
export const UpdateVisaEnrolLHistoryDocument = gql`
    mutation updateVisaEnrolLHistory($userId: UUID, $visaStatus: String, $visaIssueDate: Date, $visaFinalEntryDate: Date) {
  updateVisaHistoryCollection(
    set: {visaStatus: $visaStatus, visaIssueDate: $visaIssueDate, visaFinalEntryDate: $visaFinalEntryDate}
    filter: {userId: {eq: $userId}}
  ) {
    records {
      id
    }
  }
}
    `;
export type UpdateVisaEnrolLHistoryMutationFn = Apollo.MutationFunction<UpdateVisaEnrolLHistoryMutation, UpdateVisaEnrolLHistoryMutationVariables>;
export type UpdateVisaEnrolLHistoryMutationOptions = Apollo.BaseMutationOptions<UpdateVisaEnrolLHistoryMutation, UpdateVisaEnrolLHistoryMutationVariables>;
export type ComapnyFieldsFragment = { __typename?: 'Company', uuid: any, name: string, email?: string | null, website?: string | null, industry?: string | null, location?: string | null };

export type JobPostListItemFieldsFragment = { __typename?: 'JobPost', id: any, title: string, companyName: string, jobCategory: JobCategory, jobType: JobType, endDate?: any | null, siDo: string, siGunGu: string };

export type JobPostItemFieldsFragment = { __typename?: 'JobPost', id: any, title: string, companyName: string, companyId: any, area: string, images?: any | null, salary?: any | null, benefits: string, jobDescription: any, workingDays: any, workLocation: string, workingHoursEnd: any, workingHoursStart: any, jobType: JobType, employmentArrangement: EmploymentArrangement, preferredVisaList: any, endDate?: any | null, siDo: string, siGunGu: string };

export type VisaHistoryFieldsFragment = { __typename?: 'VisaHistory', visaStatus: string, visaIssueDate: any, visaFinalEntryDate: any };

export type GetCompanyQueryVariables = Exact<{
  uuid?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetCompanyQuery = { __typename?: 'Query', companyCollection?: { __typename?: 'CompanyConnection', edges: Array<{ __typename?: 'CompanyEdge', node: { __typename?: 'Company', uuid: any, name: string, email?: string | null, website?: string | null, industry?: string | null, location?: string | null } }> } | null };

export type GetJobPostQueryVariables = Exact<{
  uuid?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetJobPostQuery = { __typename?: 'Query', jobPostCollection?: { __typename?: 'JobPostConnection', edges: Array<{ __typename?: 'JobPostEdge', node: { __typename?: 'JobPost', id: any, title: string, companyName: string, companyId: any, area: string, images?: any | null, salary?: any | null, benefits: string, jobDescription: any, workingDays: any, workLocation: string, workingHoursEnd: any, workingHoursStart: any, jobType: JobType, employmentArrangement: EmploymentArrangement, preferredVisaList: any, endDate?: any | null, siDo: string, siGunGu: string } }> } | null };

export type GetJobPostByFilterQueryVariables = Exact<{
  jobCategory?: InputMaybe<Array<JobCategory> | JobCategory>;
  siDo?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetJobPostByFilterQuery = { __typename?: 'Query', jobPostCollection?: { __typename?: 'JobPostConnection', edges: Array<{ __typename?: 'JobPostEdge', node: { __typename?: 'JobPost', id: any, title: string, companyName: string, jobCategory: JobCategory, jobType: JobType, endDate?: any | null, siDo: string, siGunGu: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetHighlightedJobPostQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetHighlightedJobPostQuery = { __typename?: 'Query', jobPostCollection?: { __typename?: 'JobPostConnection', edges: Array<{ __typename?: 'JobPostEdge', node: { __typename?: 'JobPost', id: any, title: string, companyName: string, jobCategory: JobCategory, jobType: JobType, endDate?: any | null, siDo: string, siGunGu: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetNoticesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetNoticesQuery = { __typename?: 'Query', noticeCollection?: { __typename?: 'NoticeConnection', edges: Array<{ __typename?: 'NoticeEdge', cursor: string, node: { __typename?: 'Notice', id: any, title: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GetVisaHistoryQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetVisaHistoryQuery = { __typename?: 'Query', visaHistoryCollection?: { __typename?: 'VisaHistoryConnection', edges: Array<{ __typename?: 'VisaHistoryEdge', node: { __typename?: 'VisaHistory', visaStatus: string, visaIssueDate: any, visaFinalEntryDate: any } }> } | null };

export type InsertVisaEnrolLHistoryMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visaStatus?: InputMaybe<Scalars['String']['input']>;
  visaIssueDate?: InputMaybe<Scalars['Date']['input']>;
  visaFinalEntryDate?: InputMaybe<Scalars['Date']['input']>;
}>;


export type InsertVisaEnrolLHistoryMutation = { __typename?: 'Mutation', insertIntoVisaHistoryCollection?: { __typename?: 'VisaHistoryInsertResponse', records: Array<{ __typename?: 'VisaHistory', id: any }> } | null };

export type UpdateVisaEnrolLHistoryMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['UUID']['input']>;
  visaStatus?: InputMaybe<Scalars['String']['input']>;
  visaIssueDate?: InputMaybe<Scalars['Date']['input']>;
  visaFinalEntryDate?: InputMaybe<Scalars['Date']['input']>;
}>;


export type UpdateVisaEnrolLHistoryMutation = { __typename?: 'Mutation', updateVisaHistoryCollection: { __typename?: 'VisaHistoryUpdateResponse', records: Array<{ __typename?: 'VisaHistory', id: any }> } };
