import React from "react";
import { Text, View, Pressable } from "react-native";
import { Control, Controller, useFormContext } from "react-hook-form";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  TextInput,
  FormInputBox,
  CheckBox,
} from "app/components/pages/resume/Form";
import { checkIsValidDate, convertToFormatDate } from "app/utils/date";
import { BottomSheet, Stack } from "app/components/blocks";
import CountrySelectBox from "app/components/pages/resume/Form/CountrySelectBox";
import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";
import { FormDataType, GenderType } from "app/types/Resume";

interface BasicInfoFormSectionProps {
  control: Control<FormDataType, any>;
}

const BasicInfoFormSection: React.FC<BasicInfoFormSectionProps> = ({
  control,
}) => {
  const { setValue } = useFormContext();

  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const handleBottomSheetClose = () => bottomSheetRef?.current?.close();

  return (
    <View className="p-4 mb-2 bg-white">
      <View>
        <FormInputBox
          title="이름"
          InputComponent={
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInput {...field} placeholder="이름 입력하기" />
              )}
            />
          }
        />
        <FormInputBox
          title="성별"
          InputComponent={
            <Controller
              name="gender"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Stack columnGap={8} styles="justify-between">
                  {Object.values(GenderType).map((gender) => {
                    const label =
                      gender === "Male" ? "남자(Male)" : "여자(Female)";

                    return (
                      <View className="shrink basis-1/2">
                        <CheckBox
                          label={label}
                          onPress={() => onChange(gender)}
                          active={value === gender}
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
          title="국적"
          InputComponent={
            <Controller
              name="country"
              control={control}
              render={({ field: { value } }) => (
                <Pressable onPress={() => bottomSheetRef?.current?.present()}>
                  <Stack styles="items-center justify-between p-3 bg-gray-200 border border-gray-300 rounded-lg">
                    <Text className="text-sm font-medium shrink">{value}</Text>
                    <ChevronDownIcon
                      color="gray"
                      width={20}
                      height={20}
                      className="flex-1"
                    />
                  </Stack>
                </Pressable>
              )}
            />
          }
        />
        <FormInputBox
          title="생년월일"
          InputComponent={
            <Controller
              name="birthDate"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextInput
                    focusable
                    value={field.value}
                    className={`p-4 text-base font-medium bg-gray-200 border border-gray-300 rounded-xl ${
                      error ? "border-red-500" : "focus:border-primary"
                    }`}
                    onChangeText={(value) =>
                      field.onChange(convertToFormatDate(value))
                    }
                    placeholder="YYYY / MM / DD"
                    keyboardType="numeric"
                    maxLength={10}
                  />
                  {error && (
                    <Text className="text-red-400">{error.message}</Text>
                  )}
                </>
              )}
              rules={{
                validate: (value) => {
                  const formattedDate = value?.replace(/\D/g, "");

                  const year = Number(formattedDate?.substring(0, 4));
                  const month = Number(formattedDate?.substring(4, 6));
                  const day = Number(formattedDate?.substring(6, 8));

                  if (!checkIsValidDate(year, month, day)) {
                    return "Invalid date";
                  }

                  return true;
                },
              }}
            />
          }
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["80%"]}
        headerTitle="국적"
        closeBtn
        onClose={handleBottomSheetClose}
      >
        <CountrySelectBox
          onPress={(value) => {
            setValue("country", value);
            handleBottomSheetClose();
          }}
        />
      </BottomSheet>
    </View>
  );
};

export default BasicInfoFormSection;
