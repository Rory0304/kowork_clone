import React from "react";
import { View, Text, Pressable } from "react-native";
import FilledStarIcon from "react-native-heroicons/solid/StarIcon";
import EmptyStarIcon from "react-native-heroicons/outline/StarIcon";
import navigate from "app/utils/navigate";
import { useNavigation } from "@react-navigation/native";

interface JobPostListItemProps {
  id: number;
  title: string;
  company: string;
  jobType: string;
  area: string;
  endDate: string;
  isBookMarked: boolean;
}

const SearchJobPostListItem: React.FC<JobPostListItemProps> = ({
  id,
  title,
  company,
  area,
  endDate,
  jobType,
  isBookMarked,
}) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <Pressable onPress={() => navigator.openJobPostDetailScreen()}>
      <View className="p-4 border-t border-gray-200 bg-gray-50">
        <View className="flex flex-row justify-between">
          <View>
            <Text className="mb-2 font-bold text-primary">{jobType}</Text>
            <Text className="mb-1 text-lg font-bold">{title}</Text>
            <Text className="mb-3 font-semibold text-gray-600">{company}</Text>
          </View>
          <View>{isBookMarked ? <FilledStarIcon /> : <EmptyStarIcon />}</View>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="text-neutral-500">{area}</Text>
          <Text className="text-neutral-500">~{endDate}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SearchJobPostListItem;
