import { VisaHistory } from "app/graphql/generated";

export type VisaHistoryType  = Pick<
VisaHistory,
"visaFinalEntryDate" | "visaIssueDate" | "visaStatus" | "id"
>;