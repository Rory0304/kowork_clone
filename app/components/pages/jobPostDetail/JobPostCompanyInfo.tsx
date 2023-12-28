import React from 'react';
import { Text, View } from 'react-native';

import Table from 'app/components/blocks/Table/Table';
import { Company as CompanyType } from 'app/graphql/generated';

import JobPostInfoSection from './JobPostInfoSection';

interface JobPostCompanyInfo
  extends Pick<
    CompanyType,
    'email' | 'name' | 'location' | 'industry' | 'website'
  > {}

const JobPostCompanyInfo: React.FC<Partial<JobPostCompanyInfo>> = ({
  email,
  name,
  website,
  location,
  industry,
}) => {
  const colHeader = ['기업명', '이메일', '웹사이트', '업종', '회사위치'];
  const data = [
    <Text>{name}</Text>,
    <Text>{email}</Text>,
    <Text>{website}</Text>,
    <Text>{industry}</Text>,
    <Text>{location}</Text>,
  ];

  return (
    <JobPostInfoSection title="기업 정보">
      <View className="pb-20">
        <Table variant="horizontal" colHeader={colHeader} data={data} />
      </View>
    </JobPostInfoSection>
  );
};

export default JobPostCompanyInfo;
