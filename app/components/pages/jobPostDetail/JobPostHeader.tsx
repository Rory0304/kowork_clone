import React from 'react';
import { Text, View } from 'react-native';
import BuildingOfficeIcon from 'react-native-heroicons/solid/BuildingOfficeIcon';
import ClockIcon from 'react-native-heroicons/solid/ClockIcon';
import CreditCardIcon from 'react-native-heroicons/solid/CreditCardIcon';
import MapPinIcon from 'react-native-heroicons/solid/MapPinIcon';

import Stack from 'app/components/blocks/Stack/Stack';
import { customColors } from 'app/constants/styles/Colors';
import type { JobPostType } from 'app/types/JobPost';

interface JobPostHeaderInfoProps
  extends Pick<
    JobPostType,
    | 'id'
    | 'title'
    | 'endDate'
    | 'siDo'
    | 'siGunGu'
    | 'salary'
    | 'jobType'
    | 'employmentArrangement'
    | 'companyName'
  > {}

const JobPostHeaderInfo: React.FC<JobPostHeaderInfoProps> = ({
  title,
  companyName,
  endDate,
  siDo,
  siGunGu,
  jobType,
  employmentArrangement,
  salary,
}) => {
  const basicInfoItems = [
    {
      key: 'jobType',
      label: jobType,
      icon: <ClockIcon width={20} height={20} color={customColors.secondary} />,
    },
    {
      key: 'employmentArrangement',
      label: employmentArrangement,
      icon: (
        <BuildingOfficeIcon
          width={20}
          height={20}
          color={customColors.secondary}
        />
      ),
    },
    {
      key: 'area',
      label: `${siDo} ${siGunGu}`,
      icon: (
        <MapPinIcon width={20} height={20} color={customColors.secondary} />
      ),
    },
    {
      key: 'salary',
      label: salary ?? '0만원',
      icon: (
        <CreditCardIcon width={20} height={20} color={customColors.secondary} />
      ),
    },
  ] as const;

  const jobPostEndDate = new Date(endDate);

  return (
    <View className="px-4 py-6 mb-4 bg-white">
      <Text className="mb-2 text-2xl font-bold">{title}</Text>
      <Stack styles="justify-between mb-2">
        <Text className="text-xs text-neutral-500">{companyName}</Text>
        <Text className="text-xs text-neutral-500">
          ~{jobPostEndDate.getMonth()}월 {jobPostEndDate.getDate()}일
        </Text>
      </Stack>
      <Stack styles="rounded-md bg-gray-50 px-4 py-2 justify-between">
        {basicInfoItems.map(item => (
          <Stack
            key={item.key}
            direction="column"
            styles="items-center px-2 w-14 whitespace-pre-line"
          >
            {item.icon}
            <Text className="pt-2 text-xs text-center break-words">
              {item.label}
            </Text>
          </Stack>
        ))}
      </Stack>
    </View>
  );
};

export default JobPostHeaderInfo;
