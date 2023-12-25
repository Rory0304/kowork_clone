import React from 'react';
import { Text, View } from 'react-native';

interface ResumeFormSectionTitleProps {
  title: string;
  label?: string;
}

const ResumeFormSectionTitle: React.FC<ResumeFormSectionTitleProps> = ({
  title,
  label,
}) => {
  return (
    <View className="p-4 bg-white">
      <View className="flex flex-row border-l-4	border-primary pl-2 items-center">
        <Text className="font-bold text-xl">{title}</Text>
        {label ? (
          <Text className="ml-2 text-xs text-secondary">{label}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ResumeFormSectionTitle;
