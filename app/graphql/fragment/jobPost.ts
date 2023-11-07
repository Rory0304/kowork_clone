import { gql } from "@apollo/client";

export const FRAGMENT_JOB_POST_LIST_ITEM = gql`
  fragment JobPostListItemFields on JobPost {
    id
    title
    companyId
    jobCategory
    jobType
    endDate
    siDo
    siGunGu
  }
`;
