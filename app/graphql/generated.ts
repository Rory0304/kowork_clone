import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
import { gql } from '@apollo/client';
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

export type JobPost = Node & {
  __typename?: 'JobPost';
  area: Scalars['String']['output'];
  benefits: Scalars['String']['output'];
  company: Company;
  companyId: Scalars['UUID']['output'];
  created_at: Scalars['Datetime']['output'];
  employmentArrangement: EmploymentArrangement;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['BigInt']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  jobDescription: Scalars['JSON']['output'];
  jobType: JobType;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  preferredVisaList: Scalars['JSON']['output'];
  salary?: Maybe<Scalars['BigFloat']['output']>;
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
  created_at?: InputMaybe<DatetimeFilter>;
  employmentArrangement?: InputMaybe<EmploymentArrangementFilter>;
  endDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<BigIntFilter>;
  jobType?: InputMaybe<JobTypeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<JobPostFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<JobPostFilter>>;
  salary?: InputMaybe<BigFloatFilter>;
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  employmentArrangement?: InputMaybe<EmploymentArrangement>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  jobDescription?: InputMaybe<Scalars['JSON']['input']>;
  jobType?: InputMaybe<JobType>;
  preferredVisaList?: InputMaybe<Scalars['JSON']['input']>;
  salary?: InputMaybe<Scalars['BigFloat']['input']>;
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
  created_at?: InputMaybe<OrderByDirection>;
  employmentArrangement?: InputMaybe<OrderByDirection>;
  endDate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  jobType?: InputMaybe<OrderByDirection>;
  salary?: InputMaybe<OrderByDirection>;
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
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  employmentArrangement?: InputMaybe<EmploymentArrangement>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  jobDescription?: InputMaybe<Scalars['JSON']['input']>;
  jobType?: InputMaybe<JobType>;
  preferredVisaList?: InputMaybe<Scalars['JSON']['input']>;
  salary?: InputMaybe<Scalars['BigFloat']['input']>;
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

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Company` collection */
  deleteFromCompanyCollection: CompanyDeleteResponse;
  /** Deletes zero or more records from the `JobPost` collection */
  deleteFromJobPostCollection: JobPostDeleteResponse;
  /** Deletes zero or more records from the `Notice` collection */
  deleteFromNoticeCollection: NoticeDeleteResponse;
  /** Adds one or more `Company` records to the collection */
  insertIntoCompanyCollection?: Maybe<CompanyInsertResponse>;
  /** Adds one or more `JobPost` records to the collection */
  insertIntoJobPostCollection?: Maybe<JobPostInsertResponse>;
  /** Adds one or more `Notice` records to the collection */
  insertIntoNoticeCollection?: Maybe<NoticeInsertResponse>;
  /** Updates zero or more records in the `Company` collection */
  updateCompanyCollection: CompanyUpdateResponse;
  /** Updates zero or more records in the `JobPost` collection */
  updateJobPostCollection: JobPostUpdateResponse;
  /** Updates zero or more records in the `Notice` collection */
  updateNoticeCollection: NoticeUpdateResponse;
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
export type JobPostKeySpecifier = ('area' | 'benefits' | 'company' | 'companyId' | 'created_at' | 'employmentArrangement' | 'endDate' | 'id' | 'images' | 'jobDescription' | 'jobType' | 'nodeId' | 'preferredVisaList' | 'salary' | 'title' | 'uuid' | 'workLocation' | 'workingDays' | 'workingHoursEnd' | 'workingHoursStart' | JobPostKeySpecifier)[];
export type JobPostFieldPolicy = {
	area?: FieldPolicy<any> | FieldReadFunction<any>,
	benefits?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyId?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	employmentArrangement?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	jobDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	jobType?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeId?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredVisaList?: FieldPolicy<any> | FieldReadFunction<any>,
	salary?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MutationKeySpecifier = ('deleteFromCompanyCollection' | 'deleteFromJobPostCollection' | 'deleteFromNoticeCollection' | 'insertIntoCompanyCollection' | 'insertIntoJobPostCollection' | 'insertIntoNoticeCollection' | 'updateCompanyCollection' | 'updateJobPostCollection' | 'updateNoticeCollection' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	deleteFromCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFromNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompanyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateJobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNoticeCollection?: FieldPolicy<any> | FieldReadFunction<any>
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
export type QueryKeySpecifier = ('companyCollection' | 'jobPostCollection' | 'node' | 'noticeCollection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	companyCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	jobPostCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	noticeCollection?: FieldPolicy<any> | FieldReadFunction<any>
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
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

export const GetCompanyDocument = gql`
    query GetCompany($uuid: UUID) {
  companyCollection(filter: {uuid: {eq: $uuid}}) {
    edges {
      node {
        id
        uuid
        name
        email
        website
        industry
        location
      }
    }
  }
}
    `;
export const GetJobPostDocument = gql`
    query GetJobPost($uuid: UUID) {
  jobPostCollection(filter: {uuid: {eq: $uuid}}) {
    edges {
      node {
        id
        title
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
      }
    }
  }
}
    `;
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
export type GetCompanyQueryVariables = Exact<{
  uuid?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetCompanyQuery = { __typename?: 'Query', companyCollection?: { __typename?: 'CompanyConnection', edges: Array<{ __typename?: 'CompanyEdge', node: { __typename?: 'Company', id: any, uuid: any, name: string, email?: string | null, website?: string | null, industry?: string | null, location?: string | null } }> } | null };

export type GetJobPostQueryVariables = Exact<{
  uuid?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type GetJobPostQuery = { __typename?: 'Query', jobPostCollection?: { __typename?: 'JobPostConnection', edges: Array<{ __typename?: 'JobPostEdge', node: { __typename?: 'JobPost', id: any, title: string, companyId: any, area: string, images?: any | null, salary?: any | null, benefits: string, jobDescription: any, workingDays: any, workLocation: string, workingHoursEnd: any, workingHoursStart: any, jobType: JobType, employmentArrangement: EmploymentArrangement, preferredVisaList: any, endDate?: any | null } }> } | null };

export type GetNoticesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetNoticesQuery = { __typename?: 'Query', noticeCollection?: { __typename?: 'NoticeConnection', edges: Array<{ __typename?: 'NoticeEdge', cursor: string, node: { __typename?: 'Notice', id: any, title: string } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };
