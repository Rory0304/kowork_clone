import React from "react";
import { ScrollView, View } from "react-native";
import {
  VisaRecommendSection,
  VisaTestSection,
  JobPostListSection,
  ImportantNoticeSection,
  HomeNoticeBanner,
  SearchJobMainBanner,
} from "../../components/pages";
import VStack from "app/components/blocks/Stack/VStack";
import { contentLayoutStyle } from "app/constants/Global";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <HomeNoticeBanner />
      <ImportantNoticeSection />
      <SearchJobMainBanner />
      <JobPostListSection />
      <View className={`${contentLayoutStyle}`}>
        <VStack space={8}>
          <VisaRecommendSection />
        </VStack>
        <VStack space={8}>
          <VisaTestSection description="쉽고 빠르게 비자 취득 요건을 확인해보세요!" />
        </VStack>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
