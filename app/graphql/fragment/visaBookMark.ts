import { gql } from '@apollo/client';

export const FRAGMENT_VISA_BOOKMARK = gql`
  fragment VisaBookmarkFields on VisaBookmark {
    user_id
    visa_code
  }
`;
