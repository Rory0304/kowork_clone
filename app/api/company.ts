import client from "../graphql/client";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetNoticesDocument,
  GetNoticesQuery,
  GetNoticesQueryVariables,
} from "../graphql/generated";

interface getNoticesParams {
  cursor: string;
  limit: number;
}

export const getCompanyById = async ({ cursor, limit }: getNoticesParams) => {
  const { data } = await client.query<
    GetNoticesQuery,
    GetNoticesQueryVariables
  >({
    query: GetNoticesDocument,
    variables: {
      first: limit,
      after: cursor,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const notices = data.noticeCollection?.edges.map((item) => item.node) ?? [];
  const noticesPageInfo = data.noticeCollection?.pageInfo;

  return { notices, noticesPageInfo };
};
