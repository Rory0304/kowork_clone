import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Stack from 'app/components/blocks/Stack/Stack';
import TitleAndDescriptionSection from 'app/components/pages/global/Section/TitleAndDescriptionSection';
import { customColors } from 'app/constants/styles/Colors';

interface VisaPlanProps {
  visaType: string;
  visaName: string;
}

const VISA_PLAN: VisaPlanProps[] = [
  {
    visaType: 'D-2',
    visaName: '학생비자',
  },
  {
    visaType: 'D-10',
    visaName: '구직비자',
  },
  {
    visaType: 'E-7',
    visaName: '전문직비자',
  },
  {
    visaType: 'F-2',
    visaName: '거주비자',
  },
];

const VisaPlanSection: React.FC = () => {
  const Item = ({ visaName, visaType }: VisaPlanProps) => (
    <Stack direction="column">
      <Text className="mb-2 font-bold text-center">{visaType}</Text>
      <Text className="text-xs font-semibold text-center text-secondary">
        {visaName}
      </Text>
    </Stack>
  );

  const BlueDotLine: React.FC = () => {
    return (
      <View className={`mb-4 flex flex-row w-full px-4`}>
        <Stack direction="row" styles="relative justify-between w-full">
          <View className="w-2 h-2 bg-blue-300 rounded-full z-10" />
          <View className="w-2 h-2 bg-blue-400  rounded-full z-10" />
          <View className="w-2 h-2 bg-blue-600  rounded-full z-10" />
          <View className="w-2 h-2 bg-blue-800  rounded-full z-10" />
          <View className="absolute w-full left-0 top-[3px]">
            <LinearGradient
              colors={[customColors.blue[400], customColors.blue[900]]}
              end={[1, 0]}
            >
              <View className={`w-32 h-[2px]`} />
            </LinearGradient>
          </View>
        </Stack>
      </View>
    );
  };

  return (
    <TitleAndDescriptionSection
      sidePadding
      title="평균 비자 플랜"
      description="많은 외국인들이 계획하는 비자 로드맵은 다음과 같아요!"
    >
      <View className="px-4">
        <Stack styles=" justify-between items-center overflow-hidden">
          <Stack
            direction="column"
            styles="items-center py-4 flex-1 border border-gray-200 rounded-l-lg bg-gray-50 w-full h-full"
          >
            <BlueDotLine />
            <FlatList
              horizontal
              data={VISA_PLAN}
              scrollEnabled={false}
              renderItem={({ item }) => <Item {...item} />}
              keyExtractor={item => item.visaType}
              style={{
                width: '100%',
              }}
              contentContainerStyle={{
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 8,
              }}
            />
          </Stack>
          <Stack
            direction="column"
            styles="px-3 pt-2 pb-6 bg-primary justify-center"
          >
            <Image
              alt=""
              source={require('../../../../assets/images/flag.png')}
              resizeMode="contain"
              style={{
                objectFit: 'contain',
                width: 50,
                height: 50,
              }}
            />
            <Text className="mb-2 font-bold text-center text-white">F-5</Text>
            <Text className="text-xs font-semibold text-center text-white">
              영주권
            </Text>
          </Stack>
        </Stack>
      </View>
    </TitleAndDescriptionSection>
  );
};

export default VisaPlanSection;
