import React from 'react';
import { Image, Text, View } from 'react-native';

const VisaAdBanner: React.FC = () => {
  return (
    <View className="relative flex flex-row flex-1 px-4 py-5 rounded-lg bg-primary">
      <View>
        <Text className="text-5xl font-bold text-white">VISA</Text>
        <Text className="text-sm text-white">{`비자 정보 찾느라 더이상 헤매지 마세요.\n간편하게 확인해보세요!`}</Text>
      </View>
      <View className="absolute top-4 w-[40%] h-full right-1">
        <Image
          alt=""
          source={require('../../../../assets/images/zoom.png')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default VisaAdBanner;
