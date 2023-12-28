import { gql } from '@apollo/client';

import { FRAGMENT_VISA_BOOKMARK } from '../fragment/visaBookMark';

export const GET_VISA_BOOKMARK_BY_USER_ID = gql`
  query GetVisaBookmarkByUserId($userId: UUID) {
    visaBookmarkCollection(filter: { and: [{ user_id: { eq: $userId } }] }) {
      edges {
        node {
          ...VisaBookmarkFields
        }
      }
    }
  }

  ${FRAGMENT_VISA_BOOKMARK}
`;

export const INSERT_VISA_BOOKMARK = gql`
  mutation InsertVisaBookmark($userId: UUID, $visaCodes: [String]) {
    insertIntoVisaBookmarkCollection(
      objects: { user_id: $userId, visa_code: $visaCodes }
    ) {
      records {
        id
      }
    }
  }
`;

export const UPDATE_VISA_BOOKMARK = gql`
  mutation UpdateVisaBookmark($userId: UUID, $visaCodes: [String]) {
    updateVisaBookmarkCollection(
      filter: { user_id: { eq: $userId } }
      set: { user_id: $userId, visa_code: $visaCodes }
      atMost: 20
    ) {
      records {
        id
      }
    }
  }
`;
