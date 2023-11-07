import { gql } from "@apollo/client";

export const GET_COMPANY = gql`
  query GetCompany($uuid: UUID) {
    companyCollection(filter: { uuid: { eq: $uuid } }) {
      edges {
        node {
          id
          uuid
          name
          email
          website
          industry
          location
        }
      }
    }
  }
`;
