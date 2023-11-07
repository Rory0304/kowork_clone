import React from "react";
import { View, Text } from "react-native";
import type { JobPostType } from "app/types/JobPost";
import Stack from "app/components/blocks/Stack/Stack";
import ClockIcon from "react-native-heroicons/solid/ClockIcon";
import BuildingOfficeIcon from "react-native-heroicons/solid/BuildingOfficeIcon";
import CreditCardIcon from "react-native-heroicons/solid/CreditCardIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";

interface JobPostHeaderInfoProps
  extends Pick<JobPostType, "id" | "title" | "endDate" | "basicInfo"> {
  companyName: string;
}

const JobPostHeaderInfo: React.FC<JobPostHeaderInfoProps> = ({
  title,
  companyName,
  endDate,
  basicInfo,
}) => {
  const basicInfoItems = [
    {
      key: "jobType",
      label: basicInfo.jobType,
      icon: <ClockIcon width={20} height={20} />,
    },
    {
      key: "employmentArrangement",
      label: basicInfo.employmentArrangement,
      icon: <BuildingOfficeIcon width={20} height={20} />,
    },
    {
      key: "area",
      label: basicInfo.area,
      icon: <MapPinIcon width={20} height={20} />,
    },
    {
      key: "salary",
      label: basicInfo.salary ?? "0만원",
      icon: <CreditCardIcon width={20} height={20} />,
    },
  ] as const;

  return (
    <View className="px-4 py-6 mb-4 bg-white">
      <Text className="mb-2 text-2xl font-bold">{title}</Text>
      <Stack styles="justify-between mb-2">
        <Text className="text-xs text-neutral-500">{companyName}</Text>
        <Text className="text-xs text-neutral-500">~{endDate}</Text>
      </Stack>
      <Stack styles="rounded-md bg-gray-50 px-6 py-2 justify-center">
        {basicInfoItems.map((item) => (
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
