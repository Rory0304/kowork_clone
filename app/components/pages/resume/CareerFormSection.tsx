import React from "react";
import {
  Text,
  Alert,
  ScrollView,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  useFormContext,
  Controller,
  useFieldArray,
  Control,
  useWatch,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import {
  TextInput,
  FormInputBox,
  Stack,
  Button,
  CheckIcon,
} from "app/components/blocks";
import { ResumeFormSectionTitle } from "app/components/pages/resume";
import { convertToFormatDate } from "app/utils/date";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import PlusIcon from "react-native-heroicons/solid/PlusIcon";
import { customColors } from "app/constants/styles/Colors";
import useModals from "app/hooks/useModals";
import { MODAL_TYPES } from "app/components/pages/global/Modals/Modals";

import type { FormDataType, CareerInfoType } from "app/types/Resume";

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
  setValue: UseFormSetValue<FormDataType>;
  trigger: UseFormTrigger<FormDataType>;
}

const CareerFormInput: React.FC<CareerFormInputProps> = ({
  index,
  control,
  setValue,
  trigger,
}) => {
  const watchedIsResigned = useWatch({ name: `career.${index}.isResigned` });

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
              <TextInput {...field} placeholder="담당업무" />
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
                  onChangeText={(value) => {
                    field.onChange(convertToFormatDate(value));
                    trigger(`career.${index}.resignDate`);
                  }}
                  placeholder="YYYY / MM"
                  keyboardType="numeric"
                  maxLength={7}
                />
                {error && <Text className="text-red-400">{error.message}</Text>}
              </>
            )}
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
            render={({ field, fieldState: { error } }) => {
              return (
                <>
                  <TextInput
                    focusable
                    editable={!watchedIsResigned}
                    value={field.value || ""}
                    onChangeText={(value) => {
                      field.onChange(convertToFormatDate(value));
                      trigger(`career.${index}.joinDate`);
                    }}
                    placeholder="YYYY / MM"
                    keyboardType="numeric"
                    maxLength={7}
                  />
                  {error && (
                    <Text className="text-red-400">{error.message}</Text>
                  )}
                </>
              );
            }}
          />
        }
      />
      {/* 재직중 */}
      <Controller
        control={control}
        name={`career.${index}.isResigned`}
        render={({ field: { value, onChange } }) => (
          <TouchableOpacity
            onPress={() => {
              onChange(!value);
              if (!value) {
                setValue(`career.${index}.resignDate`, null, {
                  shouldDirty: true,
                });
              }
            }}
          >
            <Stack direction="row" styles="items-center justify-end py-4">
              <CheckIcon checked={Boolean(value)} variant="circle" />
              <Text className="ml-2">재직중</Text>
            </Stack>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CareerFormSection: React.FC = () => {
  const {
    control,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext<FormDataType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "career",
  });

  const { openModal, closeModal } = useModals();

  const handleRemoveCareerFormInput = (index: number) => remove(index);

  const handleAddCareerFormInput = () => append(DEFAULT_CAREER_INPUT_DATA);

  const createRemoveCareerFormInputAlert = (index: number) => {
    if (Platform.OS === "web") {
      return openModal(MODAL_TYPES.confirm, {
        title: "선택한 경력 삭제",
        description: `작성된 내용은 저장되지 않아요.\n선택한 경력정보를 삭제하시겠어요?`,
        ActionComponent: () => (
          <Stack styles="justify-center" columnGap={8}>
            <Button
              label="취소"
              color="default"
              variant="filled"
              onPress={() => closeModal(MODAL_TYPES.confirm)}
            />
            <Button
              label="삭제"
              color="primary"
              variant="outlined"
              onPress={() => {
                handleRemoveCareerFormInput(index);
                closeModal(MODAL_TYPES.confirm);
              }}
            />
          </Stack>
        ),
        open: true,
        closeModal: () => closeModal(MODAL_TYPES.confirm),
      });
    }
    return Alert.alert(
      "선택한 경력 삭제",
      "작성된 내용은 저장되지 않아요.\n선택한 경력정보를 삭제하시겠어요?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        { text: "삭제", onPress: () => handleRemoveCareerFormInput(index) },
      ]
    );
  };

  return (
    <ScrollView>
      <ResumeFormSectionTitle title="경력정보" />
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
          <CareerFormInput {...{ control, setValue, trigger, index }} />
        </View>
      ))}

      <View className="bg-white">
        <Stack styles="justify-between border-b  border-gray-300 p-4">
          <Text className="text-base font-bold text-primary">경력</Text>
        </Stack>
        <View className="px-4 py-6">
          <TouchableOpacity onPress={handleAddCareerFormInput}>
            <Stack styles="justify-center items-center px-4 py-3 border rounded-xl border-primary border-dashed">
              <PlusIcon fill={customColors.primary} />
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
