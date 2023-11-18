import { gql } from "@apollo/client";

export const FRAGMENT_COMPANY = gql`
  fragment ComapnyFields on Company {
    uuid
    name
    email
    website
    industry
    location
  }
`;
