import { gql } from '@apollo/client';

import { FRAGMENT_JOB_POST_BOOKMARK } from '../fragment/jobPostBookmark';

export const GET_JOB_POST_BOOKMARK_BY_IDS = gql`
  query GetJobPostBookmarkByIds($jobPostIds: [UUID!], $userId: UUID) {
    jobPostBookmarkCollection(
      filter: {
        and: [
          { job_post_id: { in: $jobPostIds } }
          { user_id: { eq: $userId } }
        ]
      }
    ) {
      edges {
        node {
          ...JobPostBookmarkFields
        }
      }
    }
  }

  ${FRAGMENT_JOB_POST_BOOKMARK}
`;

export const GET_JOB_POST_BOOKMARK_BY_USER_ID = gql`
  query GetJobPostBookmarkByUserId($userId: UUID) {
    jobPostBookmarkCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          ...JobPostBookmarkFields
        }
      }
    }
  }

  ${FRAGMENT_JOB_POST_BOOKMARK}
`;

export const INSERT_JOB_POST_BOOKMARK_BY_IDS = gql`
  mutation InsertPostBookmarkByIds($userId: UUID, $jobPostId: UUID) {
    insertIntoJobPostBookmarkCollection(
      objects: { job_post_id: $jobPostId, user_id: $userId }
    ) {
      records {
        id
      }
    }
  }
`;

export const REMOVE_JOB_POST_BOOKMARK_BY_IDS = gql`
  mutation RemovePostBookmarkByIds($userId: UUID, $jobPostId: UUID) {
    deleteFromJobPostBookmarkCollection(
      filter: {
        and: [{ user_id: { eq: $userId } }, { job_post_id: { eq: $jobPostId } }]
      }
    ) {
      records {
        id
      }
    }
  }
`;
