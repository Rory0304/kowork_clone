import { gql } from '@apollo/client';

export const FRAGMENT_JOB_POST_BOOKMARK = gql`
  fragment JobPostBookmarkFields on JobPostBookmark {
    user_id
    job_post_id
  }
`;
