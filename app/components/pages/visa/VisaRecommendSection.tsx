import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { BottomSheet } from 'app/components/blocks';
import Swiper from 'app/components/blocks/Swiper/Swiper';
import {
  VisaInfoBoxContent,
  VisaInfoBoxHeader,
} from 'app/components/pages/global/BottomSheetContent/VisaInfoBox';
import TitleAndDescriptionSection from 'app/components/pages/global/Section/TitleAndDescriptionSection';
import { VisaCode, VisaInfo } from 'app/constants/VisaDetail';
import { useProfile } from 'app/contexts/ProfileProvider';
import useVisaBookmark from 'app/hooks/useVisaBookmark';

const RECOMMEND_VISA = [
  {
    type: VisaCode.E7,
    name: '특정활동',
    discription:
      '취업 비자로 법무부에서 정한 87개의 직종에 해당되는 일을 하는 외국인 전문 인력에게만 발급되는 비자',
  },
  {
    type: VisaCode.D2,
    name: '유학',
    discription:
      '전문대학 이상의 교육,학술연구 기관에서의 정규과정(학사, 석사, 박사)의 교육을 받거나 특정의 연구를 하고자 하는 자를 위한 비자',
  },
];

const VisaRecommendSection: React.FC = () => {
  const { profileInfo } = useProfile();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const [selectedVisa, setSelectedVisa] = React.useState(RECOMMEND_VISA[0]);

  const { toggleBookmark, isBookmarked } = useVisaBookmark({
    visaCode: selectedVisa.type,
  });

  return (
    <TitleAndDescriptionSection
      sidePadding
      title={
        <>
          <Text className="text-primary">{profileInfo?.name}</Text> 님께
          추천드리는 비자
        </>
      }
      description="프로필 기반으로 맞춤 비자를 추천해드려요!"
    >
      <Swiper>
        {RECOMMEND_VISA.map((visa, index, arr) => (
          <TouchableOpacity
            key={visa.type}
            onPress={() => {
              setSelectedVisa(visa);
              bottomSheetRef?.current?.present();
            }}
          >
            <View className="h-full p-4 border border-gray-200 rounded-md bg-gray-50">
              <View className="flex flex-row items-center mb-3">
                <Text className="mr-4 text-5xl font-bold text-neutral-600">
                  {visa.type.toUpperCase()}
                </Text>
                <Text className="text-lg font-semibold">{visa.name}</Text>
              </View>
              <Text className="text-sm font-semibold text-neutral-400">
                {visa.discription}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['85%']}
        onClose={() => {
          console.log('close');
          bottomSheetRef?.current?.close();
        }}
        HeaderComponent={
          <VisaInfoBoxHeader
            title={`${selectedVisa.type.toUpperCase()}(${selectedVisa.name})`}
            onClose={() => bottomSheetRef?.current?.close()}
            isBookmarked={isBookmarked}
            toggleBookmark={() => toggleBookmark(selectedVisa.type)}
          />
        }
      >
        <VisaInfoBoxContent
          description={VisaInfo[selectedVisa.type]?.description || ''}
          subject={VisaInfo[selectedVisa.type]?.subject || ''}
          document={VisaInfo[selectedVisa.type]?.document || ''}
        />
      </BottomSheet>
    </TitleAndDescriptionSection>
  );
};

export default VisaRecommendSection;
