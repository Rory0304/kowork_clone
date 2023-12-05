import { gql } from "@apollo/client";

export const FRAGMENT_PROFILE = gql`
  fragment ProfileFields on Profile {
    name
    gender
    country
    birthDate
    residence
    userType
  }
`;
