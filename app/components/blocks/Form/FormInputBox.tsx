import React from 'react';
import { Text, View } from 'react-native';

interface FormInputBoxProps {
  title: string;
  InputComponent: React.ReactElement;
  required?: boolean;
}

const FormInputBox: React.FC<FormInputBoxProps> = ({
  title,
  InputComponent,
  required = false,
}) => {
  return (
    <View className="py-4">
      <View className="flex flex-row items-center mb-4">
        <Text className="text-base font-bold">{title}</Text>
        {required ? (
          <Text className="text-base font-bold text-primary">*</Text>
        ) : null}
      </View>
      <View>{InputComponent}</View>
    </View>
  );
};

export default FormInputBox;
