import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import _sum from 'lodash/sum';

import Stack from 'app/components/blocks/Stack/Stack';

interface TestSheetProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const TestSheet: React.FC<TestSheetProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <ScrollView className="border bg-neutral-100 border-neutral-500">
      {title && description ? (
        <Stack direction="column" styles="px-4 py-4 bg-neutral-700">
          <Text className="mb-2 text-xl font-bold text-white">{title}</Text>
          <Text className="font-semibold text-neutral-400 text-md">
            {description}
          </Text>
        </Stack>
      ) : null}
      <View className="w-full p-4">{children}</View>
    </ScrollView>
  );
};

export default TestSheet;
