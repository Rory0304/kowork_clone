import React from "react";
import { View } from "react-native";
import JobPostInfoSection from "./JobPostInfoSection";
import { JobType, EmploymentArrangement } from "app/types/JobPost";

interface JobPostBasicInfoProps {
  jobType: JobType;
  workingHoursStart: string;
  workingHoursEnd: string;
  workingDays: string[];
  employmentArrangement: EmploymentArrangement;
  salary?: number;
}

const JobPostBasicInfoJobPostHeader: React.FC<JobPostBasicInfoProps> = ({
  jobType,
  workingHoursStart,
  workingHoursEnd,
  workingDays,
  employmentArrangement,
  salary,
}) => {
  return (
    <JobPostInfoSection title="근무 정보">
      <View></View>
    </JobPostInfoSection>
  );
};

export default JobPostBasicInfoJobPostHeader;
