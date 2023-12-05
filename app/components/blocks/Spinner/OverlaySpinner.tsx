import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const OverlaySpinner: React.FC = () => {
  return (
    <View className="absolute top-0 left-0 flex flex-1 w-full h-full">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default OverlaySpinner;
