import client from "../graphql/client";

import { supabaseClient } from "app/utils/supabase";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetVisaHistoryDocument,
  GetVisaHistoryQuery,
  GetVisaHistoryQueryVariables,
  UpdateVisaEnrolLHistoryDocument,
  UpdateVisaEnrolLHistoryMutation,
  UpdateVisaEnrolLHistoryMutationVariables,
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

interface VisaHistoryParmas {
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
}: VisaHistoryParmas) => {
  const { data, error } = await supabaseClient
    .from("Profile")
    .update({ visaStatus, visaFinalEntryDate, visaIssueDate })
    .eq("userId", userId);

  if (error) {
    throw new Error("fail to update visa history");
  }

  return data;
};

export const insertVisaHistory = async ({
  userId,
  visaStatus,
  visaIssueDate,
  visaFinalEntryDate,
}: VisaHistoryParmas) => {
  const { data, error } = await supabaseClient
    .from("VisaHistory")
    .insert({ userId, visaStatus, visaIssueDate, visaFinalEntryDate });

  if (error) {
    throw new Error("fail to insert visa history");
  }

  return data;
};
