import React from 'react';
import { Text, View } from 'react-native';

interface TitleAndDescriptionSectionProps {
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
  sidePadding?: boolean;
}

const TitleAndDescriptionSection: React.FC<TitleAndDescriptionSectionProps> = ({
  title,
  description,
  children,
  sidePadding = false,
}) => {
  return (
    <View>
      <View className={`mb-5 ${sidePadding ? 'px-4' : ''}`}>
        <Text className="mb-2 text-xl font-bold">{title}</Text>
        <Text className="text-base font-semibold text-neutral-400">
          {description}
        </Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default TitleAndDescriptionSection;
