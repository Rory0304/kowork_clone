import client from "../graphql/client";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetJobPostDocument,
  GetJobPostQuery,
  GetJobPostQueryVariables,
} from "../graphql/generated";

interface getJobPostByIdParams {
  uuid: string;
}

export const getJobPostById = async ({ uuid }: getJobPostByIdParams) => {
  const { data } = await client.query<
    GetJobPostQuery,
    GetJobPostQueryVariables
  >({
    query: GetJobPostDocument,
    variables: {
      uuid: uuid,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const jobPost = data.jobPostCollection?.edges;
  return { jobPost };
};
