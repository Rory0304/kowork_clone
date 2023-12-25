import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';

import { TextInput } from 'app/components/blocks';
import type { FormDataType } from 'app/types/Resume';

const PortfoliLinkFormSection: React.FC = () => {
  const { control } = useFormContext<FormDataType>();

  return (
    <View className="bg-white p-4">
      <View className="border-b border-neutral-300">
        <Text className="py-4 text-secondary font-medium text-base">
          포트폴리오 링크
        </Text>
      </View>
      <View className="py-4">
        <Controller
          control={control}
          name={'etc.portfolioLink'}
          render={({ field }) => (
            <TextInput {...field} placeholder="https://" />
          )}
        />
      </View>
    </View>
  );
};

export default PortfoliLinkFormSection;
