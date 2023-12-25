import React from 'react';
import { Text, View } from 'react-native';

interface JobPostInfoSectionProps {
  title: string;
  children: React.ReactNode;
}
const JobPostInfoSection: React.FC<JobPostInfoSectionProps> = ({
  title,
  children,
}) => {
  return (
    <View className="px-4 pt-8 pb-4 bg-white">
      <Text className="mb-6 text-lg font-bold text-gray-600">{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default JobPostInfoSection;
