import client from "../graphql/client";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetCompanyDocument,
  GetCompanyQuery,
  GetCompanyQueryVariables,
} from "../graphql/generated";

interface getNoticesParams {
  uuid: string;
}

export const getCompanyById = async ({ uuid }: getNoticesParams) => {
  const { data } = await client.query<
    GetCompanyQuery,
    GetCompanyQueryVariables
  >({
    query: GetCompanyDocument,
    variables: {
      uuid,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const companyData =
    data.companyCollection?.edges?.[0]?.node;

  return { companyData };
};
