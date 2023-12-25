import React from 'react';
import { Text, View } from 'react-native';
import ArrowRightCircleIcon from 'react-native-heroicons/solid/ArrowRightCircleIcon';

import { grayBoxStyle } from 'app/constants/styles/Global';

const VisaDetailBanner: React.FC = () => {
  return (
    <View
      className={` items-center flex flex-row first-line:px-4 py-2 ${grayBoxStyle}`}
    >
      <View>
        <Text className="text-lg font-bold text-secondary">모든 비자 정보</Text>
        <Text className="text-base font-light text-secondary">
          비자에 대한 모든 것, 지금 확인해보세요!
        </Text>
      </View>
      <ArrowRightCircleIcon color="black" />
    </View>
  );
};

export default VisaDetailBanner;
