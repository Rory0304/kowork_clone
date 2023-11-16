import React from "react";
import { ScrollView } from "react-native";
import {
  VisaAdBanner,
  VisaDetailBanner,
  VisaRecommendSection,
  VisaPlanSection,
  VisaTestSection,
} from "../../components/pages/visa";
import VStack from "app/components/blocks/Stack/VStack";
import { contentLayoutStyle } from "app/constants/styles/Global";

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
