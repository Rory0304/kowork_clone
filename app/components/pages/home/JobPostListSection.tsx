import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import { useQuery } from "@tanstack/react-query";
import { getHighlightedJobPost } from "app/api/jobPostList";
import type { JobPostType } from "app/types/JobPost";

interface JobPostListItemProps
  extends Pick<JobPostType, "id" | "title" | "companyId" | "endDate"> {}

const JobPostListItem: React.FC<JobPostListItemProps> = ({
  title,
  companyId,
  id,
  endDate,
}) => {
  return (
    <View className="px-3 py-4 mb-3 bg-white rounded-lg shadow-lg">
      <TouchableOpacity>
        <Text className="mb-1 text-base font-bold">{title}</Text>
        <View className="flex flex-row items-center justify-between ">
          <Text className="font-semibold text-neutral-500">{companyId}</Text>
          <Text className="text-neutral-500">~{endDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const JobPostListSection: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { data, isError, error } = useQuery({
    queryKey: ["getHighlightedJobPost"],
    queryFn: async () =>
      await getHighlightedJobPost({
        first: 8,
      }),
  });

  const jobPostList = data?.jobPostList;

  const handleShowMore = () => navigator.openJobSearchScreen();

  return (
    <View className="mb-8">
      <FlatList
        scrollEnabled={false}
        className="p-4"
        data={jobPostList}
        renderItem={({ item }) => (
          <JobPostListItem
            title={item.node.title}
            id={item.node.id}
            companyId={item.node.companyId}
            endDate={item.node.endDate}
          />
        )}
        keyExtractor={(item) => `${item.node.id}`}
      />
      <View className="px-4">
        <TouchableOpacity
          className="p-3 rounded-lg bg-primary"
          onPress={handleShowMore}
        >
          <Text className="text-lg font-bold text-center text-white">
            더 많은 공고 확인하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobPostListSection;
