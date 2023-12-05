import { gql } from "@apollo/client";
import { FRAGMENT_PROFILE } from "../fragment/profile";

export const GET_PROFILE_BY_ID = gql`
  query GetProfile($userId: UUID) {
    profileCollection(filter: { userId: { eq: $userId } }) {
      edges {
        node {
          ...ProfileFields
        }
      }
    }
  }

  ${FRAGMENT_PROFILE}
`;
