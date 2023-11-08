import { gql } from "@apollo/client";
import { FRAGMENT_JOB_POST_LIST_ITEM } from "../fragment/jobPost";

export const GET_JOB_POST_BY_ID = gql`
  query GetJobPost($uuid: UUID) {
    jobPostCollection(filter: { uuid: { eq: $uuid } }) {
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

export const GET_JOB_POST_BY_FILTER = gql`
  query GetJobPostByFilter(
    $jobCategory: [JobCategory!]
    $siDo: [String!]
    $first: Int
    $after: Cursor
  ) {
    jobPostCollection(
      first: $first
      after: $after
      filter: {
        and: [{ jobCategory: { in: $jobCategory } }, { siDo: { in: $siDo } }]
      }
      orderBy: [{ created_at: DescNullsLast }]
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

  ${FRAGMENT_JOB_POST_LIST_ITEM}
`;


export const GET_HIGHLIGHTED_JOB_POST = gql`
  query GetHighlightedJobPost($first: Int, $after: Cursor) {
    jobPostCollection(
      first: $first
      after: $after
      orderBy: [{ endDate: DescNullsLast }]
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

  ${FRAGMENT_JOB_POST_LIST_ITEM}
`;


