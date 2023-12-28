import { gql } from '@apollo/client';

export const FRAGMENT_JOB_POST_LIST_ITEM = gql`
  fragment JobPostListItemFields on JobPost {
    id
    uuid
    title
    companyName
    jobCategory
    jobType
    endDate
    siDo
    siGunGu
  }
`;

export const FRAGMENT_JOB_POST_ITEM = gql`
  fragment JobPostItemFields on JobPost {
    id
    uuid
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
