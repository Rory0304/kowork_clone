import React from 'react';
import { Pressable, Text, View } from 'react-native';
import EmptyStarIcon from 'react-native-heroicons/outline/StarIcon';
import FilledStarIcon from 'react-native-heroicons/solid/StarIcon';

import { useNavigation } from '@react-navigation/native';

import type { JobPostType } from 'app/types/JobPost';
import navigate from 'app/utils/navigationHelper';

interface JobPostListItemProps
  extends Pick<
    JobPostType,
    | 'uuid'
    | 'title'
    | 'siDo'
    | 'siGunGu'
    | 'companyName'
    | 'endDate'
    | 'jobCategory'
    | 'jobType'
  > {
  isBookMarked: boolean;
}

const SearchJobPostListItem: React.FC<JobPostListItemProps> = ({
  uuid,
  title,
  companyName,
  siDo,
  siGunGu,
  endDate,
  jobType,
  isBookMarked,
}) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <Pressable onPress={() => navigator.openJobPostDetailScreen(uuid)}>
      <View className="p-4 border-t border-gray-200 bg-gray-50">
        <View className="flex flex-row justify-between">
          <View>
            <Text className="mb-2 font-bold text-primary">{jobType}</Text>
            <Text className="mb-1 text-lg font-bold">{title}</Text>
            <Text className="mb-3 font-semibold text-gray-600">
              {companyName}
            </Text>
          </View>
          <View>{isBookMarked ? <FilledStarIcon /> : <EmptyStarIcon />}</View>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="text-neutral-500">
            {siDo} {siGunGu}
          </Text>
          <Text className="text-neutral-500">~{endDate}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchJobPostListItem;
