import { gql } from "@apollo/client";

export const FRAGMENT_VISA_HISTORY = gql`
  fragment VisaHistoryFields on VisaHistory {
    visaStatus
    visaIssueDate
    visaFinalEntryDate
  }
`;
