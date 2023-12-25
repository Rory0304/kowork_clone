import React from 'react';
import { ScrollView } from 'react-native';

import VStack from 'app/components/blocks/Stack/VStack';
import { contentLayoutStyle } from 'app/constants/styles/Global';

import {
  VisaAdBanner,
  VisaDetailBanner,
  VisaPlanSection,
  VisaRecommendSection,
  VisaTestSection,
} from '../../components/pages/visa';

const VisaScreen: React.FC = () => {
  return (
    <ScrollView className={contentLayoutStyle}>
      <VisaAdBanner />
      <VisaDetailBanner />
      <VStack space={8}>
        <VisaRecommendSection />
      </VStack>
      <VStack space={8}>
        <VisaPlanSection />
      </VStack>
      <VStack space={8}>
        <VisaTestSection description="3분 컷! 테스트를 통해 내 비자 점수를 알아보세요." />
      </VStack>
    </ScrollView>
  );
};

export default VisaScreen;
