import React from "react";
import { Text, Alert, ScrollView, View, TouchableOpacity } from "react-native";
import {
  useFormContext,
  Controller,
  useFieldArray,
  Control,
} from "react-hook-form";

import { TextInput, CheckBox, FormInputBox } from "app/components/blocks/Form";
import Stack from "app/components/blocks/Stack/Stack";
import type { FormDataType, EducationInfoType } from "app/types/Resume";
import CheckIcon from "app/components/blocks/Icon/CheckIcon";
import { checkIsValidDate, convertToFormatDate } from "app/utils/date";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import PlusIcon from "react-native-heroicons/solid/PlusIcon";

const DEFAULT_EDUCATION_INPUT_DATA: EducationInfoType = {
  degree: "",
  isGraduate: false,
  univName: "",
  major: "",
  enterDate: "",
  graduateDate: "",
};

interface EducationFormInputProps {
  index: number;
  control: Control<FormDataType, any>;
}

const EducationFormInput: React.FC<EducationFormInputProps> = ({
  index,
  control,
}) => {
  return (
    <View className="px-4">
      {/* 학위 정보 */}
      <FormInputBox
        title="학위 정보"
        InputComponent={
          <Controller
            control={control}
            name={`education.${index}.degree`}
            render={({ field: { value, onChange } }) => (
              <Stack direction="row" columnGap={4}>
                {["ProBachelor", "Bachelor", "Master", "Doctorate"].map(
                  (item) => {
                    return (
                      <View
                        className="shrink basis-1/4"
                        key={`education.${index}.degree.${item}`}
                      >
                        <CheckBox
                          label={item}
                          active={item === value}
                          onPress={() => onChange(item)}
                        />
                      </View>
                    );
                  }
                )}
              </Stack>
            )}
          />
        }
      />
      {/* 재학중 */}
      <Controller
        control={control}
        name={`education.${index}.isGraduate`}
        render={({ field: { value, onChange } }) => (
          <TouchableOpacity onPress={() => onChange(!value)}>
            <CheckIcon checked={Boolean(value)} variant="circle" />
            <Text>재학중</Text>
          </TouchableOpacity>
        )}
      />
      {/* 학교명 */}
      <FormInputBox
        title="학교명"
        InputComponent={
          <Controller
            control={control}
            name={`education.${index}.univName`}
            render={({ field }) => (
              <TextInput {...field} placeholder="학교명" />
            )}
          />
        }
      />
      {/* 전공 */}
      <FormInputBox
        title="전공"
        InputComponent={
          <Controller
            control={control}
            name={`education.${index}.major`}
            render={({ field }) => (
              <TextInput {...field} placeholder="학교명" />
            )}
          />
        }
      />
      {/* 입학년월 */}
      <FormInputBox
        title="입학년월"
        InputComponent={
          <Controller
            control={control}
            name={`education.${index}.enterDate`}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextInput
                  focusable
                  value={field.value}
                  onChangeText={(value) =>
                    field.onChange(convertToFormatDate(value))
                  }
                  placeholder="YYYY / MM"
                  keyboardType="numeric"
                  maxLength={7}
                />
                {error && <Text className="text-red-400">{error.message}</Text>}
              </>
            )}
            rules={{
              validate: (value) => {
                const formattedDate = value?.replace(/\D/g, "");

                const year = Number(formattedDate?.substring(0, 4));
                const month = Number(formattedDate?.substring(4, 6));

                if (!checkIsValidDate(year, month)) {
                  return "Invalid date";
                }

                return true;
              },
            }}
          />
        }
      />
      {/* 졸업년월 */}
      <FormInputBox
        title="졸업년월"
        InputComponent={
          <Controller
            control={control}
            name={`education.${index}.graduateDate`}
            render={({ field, fieldState: { error } }) => (
              <>
                <TextInput
                  focusable
                  value={field.value}
                  onChangeText={(value) =>
                    field.onChange(convertToFormatDate(value))
                  }
                  placeholder="YYYY / MM"
                  keyboardType="numeric"
                  maxLength={7}
                />
                {error && <Text className="text-red-400">{error.message}</Text>}
              </>
            )}
            rules={{
              validate: (value) => {
                const formattedDate = value?.replace(/\D/g, "");

                const year = Number(formattedDate?.substring(0, 4));
                const month = Number(formattedDate?.substring(4, 6));

                if (!checkIsValidDate(year, month)) {
                  return "Invalid date";
                }

                return true;
              },
            }}
          />
        }
      />
    </View>
  );
};

const EducationFormSection: React.FC = () => {
  const { control } = useFormContext<FormDataType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const handleRemoveEduFormInput = (index: number) => remove(index);

  const handleAddEduFormInput = () => append(DEFAULT_EDUCATION_INPUT_DATA);

  const createRemoveEduFormInputAlert = (index: number) =>
    Alert.alert(
      "선택한 학력 삭제",
      "작성된 내용은 저장되지 않아요.\n선택한 학력정보를 삭제하시겠어요?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        { text: "삭제", onPress: () => handleRemoveEduFormInput(index) },
      ]
    );

  return (
    <ScrollView>
      {fields.map((field, index) => (
        <View key={field.id}>
          <Stack styles="justify-between border-b border-gray-300 p-4 bg-white">
            <Text className="text-base font-bold text-primary">학력</Text>
            <TouchableOpacity
              onPress={() => createRemoveEduFormInputAlert(index)}
            >
              <MinusIcon />
            </TouchableOpacity>
          </Stack>
          <EducationFormInput {...{ control, index }} />
        </View>
      ))}

      <View className="bg-white">
        <Stack styles="justify-between border-b  border-gray-300 p-4">
          <Text className="text-base font-bold text-primary">학력</Text>
        </Stack>
        <View className="px-4 py-6">
          <TouchableOpacity onPress={handleAddEduFormInput}>
            <Stack styles="justify-center items-center px-4 py-3 border rounded-xl border-primary border-dashed">
              <PlusIcon />
              <Text className="ml-2 text-base font-bold text-primary">
                학력 정보 추가하기
              </Text>
            </Stack>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EducationFormSection;
