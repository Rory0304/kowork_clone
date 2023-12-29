import { gql } from '@apollo/client';

import {
  FRAGMENT_JOB_POST_ITEM,
  FRAGMENT_JOB_POST_LIST_ITEM,
} from '../fragment/jobPost';

export const GET_JOB_POSTS_BY_ID = gql`
  query GetJobPostsById($uuids: [UUID!]) {
    jobPostCollection(filter: { uuid: { in: $uuids } }) {
      edges {
        node {
          ...JobPostItemFields
        }
      }
    }
  }

  ${FRAGMENT_JOB_POST_ITEM}
`;

export const GET_JOB_POST_BY_KEYWORD = gql`
  query GetJobPostByKeyword($title: String, $jobCategory: JobCategory) {
    jobPostCollection(
      filter: {
        or: [{ title: { like: $title } }, { jobCategory: { eq: $jobCategory } }]
      }
      orderBy: [{ created_at: DescNullsLast }]
    ) {
      edges {
        node {
          ...JobPostListItemFields
        }
      }
    }
  }

  ${FRAGMENT_JOB_POST_LIST_ITEM}
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
