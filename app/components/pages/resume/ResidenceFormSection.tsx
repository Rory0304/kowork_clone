import React from "react";
import { View } from "react-native";
import { Controller, Control } from "react-hook-form";
import { Stack, VStack } from "app/components/blocks";
import { FormDataType, ResidenceType } from "app/types/Resume";
import { FormInputBox, CheckBox, TextInput } from "../../blocks/Form";

interface ResidenceFormSectionProps {
  control: Control<FormDataType, any>;
}

const ResidenceFormSection: React.FC<ResidenceFormSectionProps> = ({
  control,
}) => {
  return (
    <View className="p-4 mb-2 bg-white">
      <FormInputBox
        title="현재 거주하는 곳"
        InputComponent={
          <Controller
            control={control}
            name="residence"
            render={({ field: { value, onChange } }) => (
              <Stack direction="row" columnGap={4}>
                {Object.values(ResidenceType).map((item, index) => {
                  return (
                    <View
                      className="shrink basis-1/2"
                      key={`residence-${index}`}
                    >
                      <CheckBox
                        label={
                          item === "Domestic"
                            ? "국내(Domestic)"
                            : "해외(Abroad)"
                        }
                        active={item === value}
                        onPress={() => onChange(item)}
                      />
                    </View>
                  );
                })}
              </Stack>
            )}
          />
        }
      />
      <FormInputBox
        title="주소"
        InputComponent={
          <>
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextInput {...field} placeholder="주소 입력하기" />
              )}
            />
            <View className="my-[4px]" />
            <Controller
              control={control}
              name="detailAddress"
              render={({ field }) => (
                <TextInput {...field} placeholder="상세주소 입력하기" />
              )}
            />
          </>
        }
      />
    </View>
  );
};

export default ResidenceFormSection;
