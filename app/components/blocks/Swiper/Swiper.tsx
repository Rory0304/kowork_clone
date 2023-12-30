import React from 'react';
import { Animated, Dimensions, Platform, View } from 'react-native';
import RnSwiper from 'react-native-swiper';

import { MAX_WIDTH } from 'app/constants/styles/Global';

interface SwiperProps {
  children: React.ReactNode[];
}

const Swiper: React.FC<SwiperProps> = ({ children }) => {
  const screenWidth = Dimensions.get('screen').width;
  const [height, setHeight] = React.useState(160);

  const handleSetHeight = (value: number) => {
    if (value > height) {
      setHeight(value);
    }
  };

  return (
    <RnSwiper
      scrollEnabled
      showsButtons={false}
      showsPagination={false}
      loop={false}
      height={height}
    >
      {children.map(child => (
        <View
          className="mx-auto"
          onLayout={event => handleSetHeight(event.nativeEvent.layout.height)}
          style={{ width: Math.min(MAX_WIDTH, screenWidth) - 32 }}
        >
          {child}
        </View>
      ))}
    </RnSwiper>
  );
};

export default Swiper;
