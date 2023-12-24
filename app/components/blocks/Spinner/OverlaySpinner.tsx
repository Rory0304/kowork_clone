import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { customColors } from "app/constants/styles/Colors";

const OverlaySpinner: React.FC = () => {
  return (
    <View className="bg-gray-300 opacity-80 absolute top-0 left-0 justify-center items-center flex flex-1 w-full h-full z-10">
      <ActivityIndicator size="large" color={customColors.primary} />
    </View>
  );
};

export default OverlaySpinner;
