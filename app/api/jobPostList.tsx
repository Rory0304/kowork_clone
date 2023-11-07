import client from "../graphql/client";
import { getFetchPolicy } from "../utils/getFetchPolicy";

import {
  GetJobPostDocument,
  GetJobPostQuery,
  GetJobPostQueryVariables,
  GetJobPostByFilterDocument,
  GetJobPostByFilterQueryVariables,
  GetJobPostByFilterQuery,
  GetHighlightedJobPostDocument,
  GetHighlightedJobPostQuery,
  GetHighlightedJobPostQueryVariables,
  JobCategory as JobCategoryType,
} from "../graphql/generated";

export { JobCategoryType };

//
// Get job post by id
//
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

//
// Get job post by filter options (category, area)
//
interface GetJobPostByFilterProps {
  jobCategory: JobCategoryType[];
  siDo?: string[];
  first: number;
  after?: string | undefined | null;
}

export const getJobPostByFilter = async ({
  jobCategory,
  siDo,
  after,
  first,
}: GetJobPostByFilterProps) => {
  const { data } = await client.query<
    GetJobPostByFilterQuery,
    GetJobPostByFilterQueryVariables
  >({
    query: GetJobPostByFilterDocument,
    variables: {
      jobCategory,
      siDo,
      first,
      ...(!!after && { after }),
    },
    fetchPolicy: getFetchPolicy(),
  });

  const jobPost = data.jobPostCollection?.edges;
  const pageInfo = data.jobPostCollection?.pageInfo;

  return { jobPost, pageInfo };
};

//
// Get highlighted post
//
interface GetHighlightedJobPostProps {
  first: number;
  after?: string | undefined | null;
}

export const getHighlightedJobPost = async ({
  after,
  first,
}: GetHighlightedJobPostProps) => {
  const { data } = await client.query<
    GetHighlightedJobPostQuery,
    GetHighlightedJobPostQueryVariables
  >({
    query: GetHighlightedJobPostDocument,
    variables: {
      first,
      ...(!!after && { after }),
    },
    fetchPolicy: getFetchPolicy(),
  });

  const jobPostList = data.jobPostCollection?.edges;
  const pageInfo = data.jobPostCollection?.pageInfo;

  return { jobPostList, pageInfo };
};
