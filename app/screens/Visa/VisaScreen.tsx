import React from 'react';
import { ScrollView, View } from 'react-native';

import VStack from 'app/components/blocks/Stack/VStack';

import {
  VisaAdBanner,
  VisaDetailBanner,
  VisaPlanSection,
  VisaRecommendSection,
  VisaTestSection,
} from '../../components/pages/visa';

const VisaScreen: React.FC = () => {
  return (
    <ScrollView className="pt-4 bg-white">
      <View className="px-4">
        <VisaAdBanner />
        <VStack space={2} />
        <VisaDetailBanner />
      </View>
      <VStack space={8} />
      <VisaRecommendSection />
      <VStack space={8} />
      <VisaPlanSection />
      <VStack space={8} />
      <VisaTestSection description="3분 컷! 테스트를 통해 내 비자 점수를 알아보세요." />
    </ScrollView>
  );
};

export default VisaScreen;
