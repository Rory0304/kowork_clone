import React from "react";
import { View, Text } from "react-native";
import JobPostInfoSection from "./JobPostInfoSection";
import { JobPostType } from "app/types/JobPost";
import Table from "app/components/blocks/Table/Table";

interface JobPostBasicInfoProps
  extends Pick<
    JobPostType,
    | "jobType"
    | "workingHoursStart"
    | "workingHoursEnd"
    | "workingDays"
    | "employmentArrangement"
    | "salary"
  > {}

const JobPostBasicInfoJobPostHeader: React.FC<JobPostBasicInfoProps> = ({
  jobType,
  workingHoursStart,
  workingHoursEnd,
  workingDays,
  employmentArrangement,
  salary,
}) => {
  const colHeader = ["직종", "근무시간", "근무요일", "근무형태", "급여(원화)"];
  const data = [
    <Text>{jobType}</Text>,
    <Text>
      {workingHoursStart}~{workingHoursEnd}
    </Text>,
    <View>{workingDays?.days?.map((day: string) => <Text>{day}</Text>)}</View>,
    <Text>{employmentArrangement}</Text>,
    <Text>연봉 {salary}만원</Text>,
  ];

  return (
    <JobPostInfoSection title="근무 정보">
      <Table variant="horizontal" colHeader={colHeader} data={data} />
    </JobPostInfoSection>
  );
};

export default JobPostBasicInfoJobPostHeader;
