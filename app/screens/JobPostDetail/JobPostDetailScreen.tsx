import React from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native";
import {
  JobPostBasicInfo,
  JobPostCompanyInfo,
  JobPostDetailInfo,
  JobPostHeader,
} from "app/components/pages/jobPostDetail";
import VStack from "app/components/blocks/Stack/VStack";
import { useQuery } from "@tanstack/react-query";
import { getJobPostById } from "app/api/jobPostList";
import { getCompanyById } from "app/api/company";
import type {
  JobPostDescriptionInfoType,
  preferredVisaListType,
} from "app/types/JobPost";

type JobPostDetailScreenParamList = {
  params: {
    uuid: string;
  };
};

const JobPostDetailScreen: React.FC = () => {
  const {
    params: { uuid },
  } = useRoute<RouteProp<JobPostDetailScreenParamList, "params">>();

  const { data: JobPostData } = useQuery({
    queryKey: ["getJobPostById", uuid],
    queryFn: () =>
      getJobPostById({
        uuid,
      }),
  });

  const companyId = JobPostData?.jobPost?.companyId;

  const { data: companyData } = useQuery({
    queryKey: ["getCompanyById", companyId],
    queryFn: () =>
      getCompanyById({
        uuid: companyId,
      }),
    enabled: !!companyId,
  });

  if (JobPostData?.jobPost && companyData?.companyData) {
    const {
      id,
      title,
      endDate,
      siDo,
      siGunGu,
      jobType,
      employmentArrangement,
      salary,
      workingHoursEnd,
      workingHoursStart,
      workingDays,
      jobDescription,
      preferredVisaList,
      benefits,
      area,
      companyName,
    } = JobPostData?.jobPost;

    return (
      <ScrollView style={{ flex: 1 }}>
        <JobPostHeader
          {...{
            id,
            title,
            endDate,
            siDo,
            siGunGu,
            jobType,
            employmentArrangement,
            salary,
            companyName,
          }}
        />
        <JobPostBasicInfo
          {...{
            jobType,
            workingDays: JSON.parse(workingDays),
            workingHoursEnd,
            workingHoursStart,
            employmentArrangement,
            salary,
          }}
        />
        <VStack space={2} />
        <JobPostDetailInfo
          jobDescription={
            JSON.parse(jobDescription) as JobPostDescriptionInfoType
          }
          preferredVisaList={
            JSON.parse(preferredVisaList) as preferredVisaListType
          }
          area={area}
          benefits={benefits}
        />
        <VStack space={2} />
        <JobPostCompanyInfo {...companyData?.companyData} />
      </ScrollView>
    );
  }

  return <ScrollView></ScrollView>;
};

export default JobPostDetailScreen;
