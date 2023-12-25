import { gql } from '@apollo/client';

import { FRAGMENT_COMPANY } from '../fragment/company';

export const GET_COMPANY = gql`
  query GetCompany($uuid: UUID) {
    companyCollection(filter: { uuid: { eq: $uuid } }) {
      edges {
        node {
          ...ComapnyFields
        }
      }
    }
  }

  ${FRAGMENT_COMPANY}
`;
