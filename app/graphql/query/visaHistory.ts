import { gql } from "@apollo/client";
import { FRAGMENT_VISA_HISTORY } from "../fragment/visaHIstory";

export const GET_VISA_HISTORY = gql`
  query GetVisaHistory($userId: UUID) {
    visaHistoryCollection(filter: { userId: { eq: $userId } }) {
      edges {
        node {
          ...VisaHistoryFields
        }
      }
    }
  }

  ${FRAGMENT_VISA_HISTORY}
`;

export const INSERT_VISA_HISTORY = gql`
  mutation insertVisaEnrolLHistory(
    $userId: UUID
    $visaStatus: String
    $visaIssueDate: Date
    $visaFinalEntryDate: Date
    ) {
    insertIntoVisaHistoryCollection(
      objects: {
        userId: $userId
        visaStatus: $visaStatus
        visaIssueDate: $visaIssueDate
        visaFinalEntryDate: $visaFinalEntryDate
      }
    ) {
      records {
        id
      }
    }
  }
`;

export const UPDATE_VISA_HISTORY = gql`
  mutation updateVisaEnrolLHistory(
    $userId: UUID
    $visaStatus: String
    $visaIssueDate: Date
    $visaFinalEntryDate: Date
  ) {
    updateVisaHistoryCollection(
      set: {
        visaStatus: $visaStatus
        visaIssueDate: $visaIssueDate
        visaFinalEntryDate: $visaFinalEntryDate
      }
      filter: { userId: { eq: $userId } }
    ) {
      records {
        id
      }
    }
  }
`;

export const DELETE_VISA_HISTORY = gql`
  mutation DeleteVisaHistory($id: [BigInt!]) {
    deleteFromVisaHistoryCollection(filter: {id: {in: $id}}, atMost: 10) {
      affectedCount
    }
  }
`