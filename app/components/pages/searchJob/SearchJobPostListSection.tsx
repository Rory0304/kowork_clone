import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigate";
import SearchJobPostListItem from "./SearchJobPostListItem";
import Swiper from "react-native-swiper";
import _chunk from "lodash/chunk";
import { gray } from "tailwindcss/colors";

const COUNT_PER_SLIDE = 4;

interface JobPostListItemProps {
  id: number;
  title: string;
  company: string;
  jobType: string;
  area: string;
  endDate: string;
  isBookMarked: boolean;
}

const JOB_POST_LIST: JobPostListItemProps[] = [
  {
    id: 1,
    title: "backend developer recruit",
    company: "닉스 주식회사",
    jobType: "정규직",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 2,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 3,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 4,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 5,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 6,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 7,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
  {
    id: 8,
    title: "backend developer recruit",
    jobType: "정규직",
    company: "닉스 주식회사",
    area: "서초구",
    endDate: "11월 25일",
    isBookMarked: false,
  },
];

const JobPostListSection: React.FC = () => {
  const chunkedJobPostList = _chunk(JOB_POST_LIST, COUNT_PER_SLIDE);
  const [height, setHeight] = React.useState(500);

  const handleSetHeight = (value: number) => {
    setHeight(value);
  };

  return (
    <View className="bg-white fit-height">
      <Swiper
        loop={false}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        style={{
          height,
        }}
        paginationStyle={{
          position: "relative",
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: gray[200],
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        {chunkedJobPostList.map((list) => (
          <View
            onLayout={(event) => {
              console.log("event", event.nativeEvent.layout.height);
              handleSetHeight(event.nativeEvent.layout.height);
            }}
          >
            <FlatList
              scrollEnabled={false}
              data={list}
              renderItem={({ item }) => <SearchJobPostListItem {...item} />}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default JobPostListSection;
