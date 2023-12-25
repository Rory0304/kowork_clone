import { gql } from '@apollo/client';

export const FRAGMENT_RESUME = gql`
  fragment ResumeFields on Resume {
    uuid
    name
    gender
    country
    birthDate
    residence
    address
    detailAddress
    email
    phoneNumber
    career
    education
    language
    etc
  }
`;
