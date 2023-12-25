import { gql } from "@apollo/client";
import { FRAGMENT_RESUME } from "../fragment/resume";

export const GET_RESUME_BY_ID = gql`
  query GetResumeById($userId: UUID) {
    resumeCollection(filter: { userId: { eq: $userId } }) {
      edges {
        node {
          ...ResumeFields
        }
      }
    }
  }

  ${FRAGMENT_RESUME}
`;

export const INSERT_RESUME_BY_ID = gql`
  mutation InsertResumeById(
    $uuid: UUID
    $userId: UUID
    $name: String
    $gender: GenderType
    $country: String
    $birthDate: Date
    $residence: ResidenceType
    $address: String
    $detailAddress: String
    $email: String
    $phoneNumber: String
    $career: [JSON]
    $education: [JSON]
    $language: JSON
    $etc: JSON
  ) {
    insertIntoResumeCollection(
      objects: {
        uuid: $uuid
        userId: $userId
        name: $name
        gender: $gender
        country: $country
        birthDate: $birthDate
        residence: $residence
        address: $address
        detailAddress: $detailAddress
        email: $email
        phoneNumber: $phoneNumber
        career: $career
        education: $education
        language: $language
        etc: $etc
      }
    ) {
      records {
        id
      }
    }
  }
`;

export const UPDATE_RESUME_BY_ID = gql`
  mutation UpdateResumeById(
    $uuid: UUID
    $name: String
    $gender: GenderType
    $country: String
    $birthDate: Date
    $residence: ResidenceType
    $address: String
    $detailAddress: String
    $email: String
    $phoneNumber: String
    $career: [JSON]
    $education: [JSON]
    $language: JSON
    $etc: JSON
  ) {
    updateResumeCollection(
      filter: { uuid: { eq: $uuid } }
      set: {
        name: $name
        gender: $gender
        country: $country
        birthDate: $birthDate
        residence: $residence
        address: $address
        detailAddress: $detailAddress
        email: $email
        phoneNumber: $phoneNumber
        career: $career
        education: $education
        language: $language
        etc: $etc
      }
    ) {
      records {
        id
      }
    }
  }
`;
