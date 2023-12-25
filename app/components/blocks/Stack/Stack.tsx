import React from 'react';
import { View } from 'react-native';

interface StackProps {
  direction?: 'row' | 'column';
  columnGap?: number;
  rowGap?: number;
  children?: React.ReactNode;
  styles?: string;
}

const Stack: React.FC<StackProps> = ({
  direction = 'row',
  columnGap,
  rowGap,
  children,
  styles,
}) => {
  return (
    <View
      className={`flex ${
        direction === 'row' ? 'flex-row' : 'flex-col'
      } ${styles}`}
      style={{ columnGap, rowGap }} // Ref:https://www.nativewind.dev/tailwind/flexbox/gap
    >
      {children}
    </View>
  );
};

export default Stack;
