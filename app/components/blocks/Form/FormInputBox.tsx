import React from "react";
import { View, Text } from "react-native";

interface FormInputBoxProps {
  title: string;
  InputComponent: React.ReactElement;
}

const FormInputBox: React.FC<FormInputBoxProps> = ({
  title,
  InputComponent,
}) => {
  return (
    <View className="py-4">
      <Text className="mb-4 text-base font-bold">{title}</Text>
      <View>{InputComponent}</View>
    </View>
  );
};

export default FormInputBox;
