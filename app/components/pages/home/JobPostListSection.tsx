import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigate";

interface JobPostListProps {
  id: number;
  title: string;
  company: string;
  endDate: string;
}

const JOB_POST_LIST: JobPostListProps[] = [
  {
    id: 1,
    title: "backend developer recruit",
    company: "닉스 주식회사",

    endDate: "11월 25일",
  },
  {
    id: 2,
    title: "backend developer recruit",
    company: "닉스 주식회사",
    endDate: "11월 25일",
  },
  {
    id: 3,
    title: "backend developer recruit",
    company: "닉스 주식회사",
    endDate: "11월 25일",
  },
  {
    id: 4,
    title: "backend developer recruit",
    company: "닉스 주식회사",
    endDate: "11월 25일",
  },
];

const JobPostListSection: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const Item = ({ title, id, company, endDate }: JobPostListProps) => (
    <View className="px-3 py-4 mb-3 bg-white rounded-lg shadow-lg">
      <TouchableOpacity>
        <Text className="mb-1 text-base font-bold">{title}</Text>
        <View className="flex flex-row items-center justify-between ">
          <Text className="font-semibold text-neutral-500">{company}</Text>
          <Text className="text-neutral-500">~{endDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const handleShowMore = () => navigator.openJobSearchScreen();

  return (
    <View className="mb-8">
      <FlatList
        scrollEnabled={false}
        className="p-4"
        data={JOB_POST_LIST}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => `${item.id}`}
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
