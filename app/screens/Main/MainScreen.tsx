import React from "react";
import { ScrollView, View } from "react-native";
import {
  VisaRecommendSection,
  VisaTestSection,
  JobPostListSection,
  ImportantNoticeSection,
  MainNoticeBanner,
  SearchJobMainBanner,
} from "../../components/pages";
import VStack from "app/components/blocks/Stack/VStack";

const MainScreen: React.FC = () => {
  return (
    <ScrollView>
      <MainNoticeBanner />
      <ImportantNoticeSection />
      <SearchJobMainBanner />
      <JobPostListSection />
      <View className="px-4">
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

export default MainScreen;
