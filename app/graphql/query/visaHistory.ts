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
