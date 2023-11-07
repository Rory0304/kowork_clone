import React from "react";
import { View, Text, Image } from "react-native";
import { contentLayoutStyle } from "app/constants/Global";

const JobPostListSection: React.FC = () => {
  return (
    <View
      className={`${contentLayoutStyle} flex flex-row items-center bg-white`}
    >
      <View className="p-2 mr-2 border border-gray-200 rounded bg-gray-50">
        <Image
          alt=""
          source={require("../../../../assets/images/home_speaker.png")}
          resizeMode="contain"
          style={{
            width: 32,
            height: 32,
          }}
        />
      </View>
      <View className="flex">
        <Text className="mb-2 text-xl font-bold">주목할 만한 공고</Text>
        <Text className="font-semibold text-neutral-400">
          지금 살펴보면 좋을 공고들을 추천드려요!
        </Text>
      </View>
    </View>
  );
};

export default JobPostListSection;
