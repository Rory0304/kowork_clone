import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowRightCircleIcon from 'react-native-heroicons/solid/ArrowRightCircleIcon';

import { useNavigation } from '@react-navigation/native';

import Stack from 'app/components/blocks/Stack/Stack';
import TitleAndDescriptionSection from 'app/components/pages/global/Section/TitleAndDescriptionSection';
import navigate from 'app/utils/navigationHelper';

type VisaType = 'D-10-1' | 'F-2-7';

interface VisaTestProps {
  type: VisaType;
  name: string;
  imgSrc: ImageSourcePropType;
  height: number;
  bottom: number;
}

const VISA_TEST: VisaTestProps[] = [
  {
    type: 'D-10-1',
    name: '구직비자',
    imgSrc: require('../../../../assets/images/dart.png'),
    height: 80,
    bottom: -5,
  },
  {
    type: 'F-2-7',
    name: '거주비자',
    imgSrc: require('../../../../assets/images/trophy.png'),
    height: 100,
    bottom: -25,
  },
];

const Item = ({ name, type, imgSrc, height, bottom }: VisaTestProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const handleVisaTestPageOpen = (type: VisaType) => {
    if (type === 'D-10-1') {
      return navigator.openVisaTestD101Screen();
    }

    if (type === 'F-2-7') {
      return navigator.openVisaTestF27Screen();
    }
  };

  return (
    <TouchableOpacity
      className="flex-1 border border-gray-200 rounded-md cp-2 bg-gray-50"
      onPress={() => handleVisaTestPageOpen(type)}
    >
      <View className="w-full p-2 ">
        <Text className="text-xl font-bold">{type}</Text>
        <Text className="text-neutral-400">{name}</Text>
        <View className="relative w-full pt-[60%]">
          <ImageBackground
            source={imgSrc}
            resizeMode="contain"
            style={{
              position: 'absolute',
              bottom: bottom,
              width: '100%',
              height: height,
              margin: 'auto',
            }}
          />
          <ArrowRightCircleIcon
            color="black"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface VisaTestSectionProps {
  description: string;
}

const VisaTestSection: React.FC<VisaTestSectionProps> = ({ description }) => {
  return (
    <TitleAndDescriptionSection
      sidePadding
      title="점수제 비자테스트"
      description={description}
    >
      <Stack columnGap={16} styles="overflow-hidden px-4">
        {VISA_TEST.map(item => (
          <Item key={item.type} {...item} />
        ))}
      </Stack>
    </TitleAndDescriptionSection>
  );
};

export default VisaTestSection;
