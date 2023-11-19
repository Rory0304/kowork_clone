import React from "react";
import { View } from "react-native";
import { Controller, Control } from "react-hook-form";
import { FormDataType } from "app/types/Resume";
import { FormInputBox, TextInput } from "../../blocks/Form";

interface EmailFormSectionProps {
  control: Control<FormDataType, any>;
}

const EmailFormSection: React.FC<EmailFormSectionProps> = ({ control }) => {
  return (
    <View className="p-4 bg-white">
      <FormInputBox
        title="이메일"
        InputComponent={
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput {...field} placeholder="이메일 입력하기" />
            )}
          />
        }
      />
      <FormInputBox
        title="연락처"
        InputComponent={
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <TextInput {...field} placeholder="연락처 입력하기" />
            )}
          />
        }
      />
    </View>
  );
};

export default EmailFormSection;
