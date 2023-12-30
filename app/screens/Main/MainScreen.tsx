import React from 'react';
import { ScrollView, View } from 'react-native';

import VStack from 'app/components/blocks/Stack/VStack';

import {
  ImportantNoticeSection,
  JobPostListSection,
  MainNoticeBanner,
  SearchJobMainBanner,
  VisaRecommendSection,
  VisaTestSection,
} from '../../components/pages';

const MainScreen: React.FC = () => {
  return (
    <ScrollView>
      <MainNoticeBanner />
      <ImportantNoticeSection />
      <SearchJobMainBanner />
      <JobPostListSection />
      <VStack space={8}>
        <VisaRecommendSection />
      </VStack>
      <VStack space={8}>
        <VisaTestSection description="쉽고 빠르게 비자 취득 요건을 확인해보세요!" />
      </VStack>
    </ScrollView>
  );
};

export default MainScreen;
