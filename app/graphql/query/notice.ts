import { gql } from '@apollo/client';

export const GET_NOTICES = gql`
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
