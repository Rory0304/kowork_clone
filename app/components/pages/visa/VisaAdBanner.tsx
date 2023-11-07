import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

const VisaAdBanner: React.FC = () => {
  return (
    <View
      className="flex flex-row px-4 py-5 rounded-md bg-primary"
      style={{
        flexDirection: "row",
      }}
    >
      <View>
        <Text className="text-6xl font-bold text-white ">VISA</Text>
        <Text className="text-base text-white">{`비자 정보 찾느라 더이상 헤매지 마세요.\n간편하게 확인해보세요!`}</Text>
      </View>
      <Image
        alt=""
        source={require("../../../../assets/images/zoom.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: null,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default VisaAdBanner;
