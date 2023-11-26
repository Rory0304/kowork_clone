import client from "../graphql/client";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetVisaHistoryDocument,
  GetVisaHistoryQuery,
  GetVisaHistoryQueryVariables,
  UpdateVisaEnrolLHistoryDocument,
  UpdateVisaEnrolLHistoryMutation,
  UpdateVisaEnrolLHistoryMutationVariables,
  UpdateVisaEnrolLHistoryMutationFn,
  UuidFilter,
} from "../graphql/generated";

interface GetVisaHistoryParams {
  userId: UuidFilter;
}

export const getVisaHistoryByUserId = async ({
  userId,
}: GetVisaHistoryParams) => {
  const { data } = await client.query<
    GetVisaHistoryQuery,
    GetVisaHistoryQueryVariables
  >({
    query: GetVisaHistoryDocument,
    variables: {
      userId: userId,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const visaHistory = data.visaHistoryCollection?.edges;

  return { visaHistory };
};

interface UpdateVisaHistoryParmas {
  userId: string;
  visaStatus: string;
  visaIssueDate: Date;
  visaFinalEntryDate: Date;
}

export const updateVisaHistory = async ({
  userId,
  visaStatus,
  visaIssueDate,
  visaFinalEntryDate,
}: UpdateVisaHistoryParmas) => {
  const { data } = await client.query<
    UpdateVisaEnrolLHistoryMutation,
    UpdateVisaEnrolLHistoryMutationVariables
  >({
    query: UpdateVisaEnrolLHistoryDocument,
    variables: {
      userId,
      visaFinalEntryDate,
      visaIssueDate,
      visaStatus,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const response = data.updateVisaHistoryCollection.records;

  return { response };
};
