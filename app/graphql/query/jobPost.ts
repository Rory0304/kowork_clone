import { gql } from "@apollo/client";

export const GET_JOB_POST_BY_ID = gql`
  query GetJobPost($uuid: UUID) {
    jobPostCollection(filter: { uuid: { eq: $uuid } }) {
      edges {
        node {
          id
          title
          companyId
          area
          images
          salary
          benefits
          jobDescription
          workingDays
          workLocation
          workingHoursEnd
          workingHoursStart
          jobType
          employmentArrangement
          preferredVisaList
          endDate
        }
      }
    }
  }
`;
