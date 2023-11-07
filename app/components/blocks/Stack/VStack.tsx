import React from "react";
import { View } from "react-native";

interface VStackProps {
  space: number; // margin top and bottom space
  children?: React.ReactNode;
}

const VStack: React.FC<VStackProps> = ({ space, children }) => {
  return <View className={`my-${space}`}>{children}</View>;
};

export default VStack;
