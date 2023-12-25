import React from 'react';
import { Text } from 'react-native';

import Table from 'app/components/blocks/Table/Table';
import { JobPostType, WorkingDaysType } from 'app/types/JobPost';

import JobPostInfoSection from './JobPostInfoSection';

interface JobPostBasicInfoProps
  extends Pick<
    JobPostType,
    | 'jobType'
    | 'workingHoursStart'
    | 'workingHoursEnd'
    | 'employmentArrangement'
    | 'salary'
  > {
  workingDays?: WorkingDaysType;
}

const JobPostBasicInfoJobPostHeader: React.FC<JobPostBasicInfoProps> = ({
  jobType,
  workingHoursStart,
  workingHoursEnd,
  workingDays,
  employmentArrangement,
  salary,
}) => {
  const workingDaysString = workingDays?.days.join(',');

  const colHeader = ['직종', '근무시간', '근무요일', '근무형태', '급여(원화)'];
  const data = [
    <Text>{jobType}</Text>,
    <Text>
      {workingHoursStart}~{workingHoursEnd}
    </Text>,
    <Text>{workingDaysString}</Text>,
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
