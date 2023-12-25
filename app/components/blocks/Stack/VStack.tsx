import React from 'react';
import { View } from 'react-native';

interface VStackProps {
  space: number; // padding top and bottom space
  children?: React.ReactNode;
}

const VStack: React.FC<VStackProps> = ({ space, children }) => {
  return <View className={`py-${space}`}>{children}</View>;
};

export default VStack;
