import React from "react";
import { Text, Alert, ScrollView, View, TouchableOpacity } from "react-native";
import {
  useFormContext,
  Controller,
  useFieldArray,
  Control,
} from "react-hook-form";

import { TextInput, FormInputBox } from "app/components/blocks/Form";
import Stack from "app/components/blocks/Stack/Stack";
import type { FormDataType, CareerInfoType } from "app/types/Resume";
import CheckIcon from "app/components/blocks/Icon/CheckIcon";
import { checkIsValidDate, convertToFormatDate } from "app/utils/date";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import PlusIcon from "react-native-heroicons/solid/PlusIcon";

const DEFAULT_CAREER_INPUT_DATA: CareerInfoType = {
  company: "",
  task: "",
  joinDate: "",
  resignDate: "",
  isResigned: false,
};

interface CareerFormInputProps {
  index: number;
  control: Control<FormDataType, any>;
}

const CareerFormInput: React.FC<CareerFormInputProps> = ({
  index,
  control,
}) => {
  return (
    <View className="px-4">
      {/* 회사명 */}
      <FormInputBox
        title="회사명"
        InputComponent={
          <Controller
            control={control}
            name={`career.${index}.company`}
            render={({ field }) => (
              <TextInput {...field} placeholder="회사명" />
            )}
          />
        }
      />
      {/* 전공 */}
      <FormInputBox
        title="담당업무"
        InputComponent={
          <Controller
            control={control}
            name={`career.${index}.task`}
            render={({ field }) => (
              <TextInput {...field} placeholder="학교명" />
            )}
          />
        }
      />

      {/* 입사일 */}
      <FormInputBox
        title="입사일"
        InputComponent={
          <Controller
            control={control}
            name={`career.${index}.joinDate`}
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
      {/* 퇴사일 */}
      <FormInputBox
        title="퇴사일"
        InputComponent={
          <Controller
            control={control}
            name={`career.${index}.resignDate`}
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
      {/* 재직중 */}
      <Controller
        control={control}
        name={`career.${index}.isResigned`}
        render={({ field: { value, onChange } }) => (
          <TouchableOpacity onPress={() => onChange(!value)}>
            <CheckIcon checked={Boolean(value)} variant="circle" />
            <Text>재직중</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CareerFormSection: React.FC = () => {
  const { control } = useFormContext<FormDataType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "career",
  });

  const handleRemoveEduFormInput = (index: number) => remove(index);

  const handleAddCareerFormInput = () => append(DEFAULT_CAREER_INPUT_DATA);

  const createRemoveCareerFormInputAlert = (index: number) =>
    Alert.alert(
      "선택한 경력 삭제",
      "작성된 내용은 저장되지 않아요.\n선택한 경력정보를 삭제하시겠어요?",
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
          <Stack styles="justify-between border-b  border-gray-300 p-4 bg-white">
            <Text className="text-base font-bold text-primary">경력</Text>
            <TouchableOpacity
              onPress={() => createRemoveCareerFormInputAlert(index)}
            >
              <MinusIcon />
            </TouchableOpacity>
          </Stack>
          <CareerFormInput {...{ control, index }} />
        </View>
      ))}

      <View className="bg-white">
        <Stack styles="justify-between border-b  border-gray-300 p-4">
          <Text className="text-base font-bold text-primary">경력</Text>
        </Stack>
        <View className="px-4 py-6">
          <TouchableOpacity onPress={handleAddCareerFormInput}>
            <Stack styles="justify-center items-center px-4 py-3 border rounded-xl border-primary border-dashed">
              <PlusIcon />
              <Text className="ml-2 text-base font-bold text-primary">
                경력 정보 추가하기
              </Text>
            </Stack>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CareerFormSection;
