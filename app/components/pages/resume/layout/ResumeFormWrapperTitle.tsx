import React from 'react';
import { Text, View } from 'react-native';

interface ResumeFormWrapperTitleProps {
  title: string;
  step: number;
}

const ResumeFormWrapperTitle: React.FC<ResumeFormWrapperTitleProps> = ({
  title,
  step,
}) => {
  return (
    <View className="p-4 py-6 bg-white">
      <Text className="mb-1 text-lg font-bold text-neutral-300">
        {step < 10 ? `0${step}` : step}
      </Text>
      <Text className="text-2xl font-bold text-neutral-500">{title}</Text>
    </View>
  );
};

export default ResumeFormWrapperTitle;
