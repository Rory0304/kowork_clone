import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowRightCircleIcon from 'react-native-heroicons/solid/ArrowRightCircleIcon';

import { useNavigation } from '@react-navigation/native';

import { grayBoxStyle } from 'app/constants/styles/Global';
import navigate from 'app/utils/navigationHelper';

const VisaDetailBanner: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <TouchableOpacity onPress={() => navigator.openVisaInfoScreen()}>
      <View
        className={`items-center flex flex-row p-4 justify-between ${grayBoxStyle}`}
      >
        <View className="mr-2 shrink">
          <Text className="text-lg font-bold text-neutral-600">
            모든 비자 정보
          </Text>
          <Text className="text-lg text-neutral-600 font-light">
            비자에 대한 모든 것, 지금 확인해보세요!
          </Text>
        </View>
        <ArrowRightCircleIcon color="black" width={24} height={24} />
      </View>
    </TouchableOpacity>
  );
};

export default VisaDetailBanner;
