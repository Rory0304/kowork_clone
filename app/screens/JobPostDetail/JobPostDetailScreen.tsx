import React from "react";
import { ScrollView } from "react-native";
import {
  JobPostBasicInfo,
  JobPostCompanyInfo,
  JobPostDetailInfo,
  JobPostHeader,
} from "app/components/pages/jobPostDetail";
import { JobType, EmploymentArrangement } from "app/types/JobPost";
import { useQuery } from "@tanstack/react-query";
import { getJobPostById } from "app/api/jobPostList";

const JobPostDetailScreen: React.FC = () => {
  const uuid = "0d899886-6d2a-44e6-8d30-227b0df0ea7e";

  const { data, isSuccess, isError, isFetching, refetch } = useQuery({
    queryKey: ["getJobPostById", uuid],
    queryFn: () =>
      getJobPostById({
        uuid,
      }),
  });

  console.log("data", data);

  const test = {
    id: "1",
    companyId: "1",
    title: "backend developer recruit",
    companyName: "닉스 주식회사",
    endDate: "11월 24일",
    jobType: JobType.FullTime,
    workingHoursStart: "09:00",
    workingHoursEnd: "18:00",
    workingDays: ["mon", "thu", "wed", "thurs", "fri"],
    employmentArrangement: EmploymentArrangement.Office,
    area: "경기도 하남시",
    salary: 0,
  };

  return (
    <ScrollView>
      {/* <JobPostHeader title={test.title} companyName={test.companyName} endDate={test.endDate} /> */}
      <JobPostBasicInfo
        jobType={test.jobType}
        workingDays={test.workingDays}
        workingHoursStart={test.workingHoursStart}
        workingHoursEnd={test.workingHoursEnd}
        employmentArrangement={test.employmentArrangement}
        salary={test.salary}
      />
      <JobPostDetailInfo />
      <JobPostCompanyInfo />
    </ScrollView>
  );
};

export default JobPostDetailScreen;
