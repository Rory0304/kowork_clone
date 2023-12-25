import React from 'react';
import { Text, View } from 'react-native';

import TitleAndDescriptionSection from 'app/components/pages/global/Section/TitleAndDescriptionSection';

const VisaRecommendSection: React.FC = () => {
  const userName = 'Eunsoo';
  const reconmmendVisa = {
    type: 'F-2',
    name: '거주',
    discription:
      '거주 비자로 영주자격을 부여받기 위하여 국내 장기체류하려는 자에게 발급되는 비자',
  };

  return (
    <TitleAndDescriptionSection
      title={
        <>
          <Text className="text-primary">{userName}</Text> 님께 추천드리는 비자
        </>
      }
      description="프로필 기반으로 맞춤 비자를 추천해드려요!"
    >
      <View className="p-4 border border-gray-200 rounded-md bg-gray-50">
        <View className="flex flex-row items-center mb-3">
          <Text className="mr-4 text-5xl font-bold text-neutral-600">
            {reconmmendVisa.type}
          </Text>
          <Text className="text-lg font-semibold">{reconmmendVisa.name}</Text>
        </View>
        <Text className="text-sm font-semibold text-neutral-400">
          {reconmmendVisa.discription}
        </Text>
      </View>
    </TitleAndDescriptionSection>
  );
};

export default VisaRecommendSection;
