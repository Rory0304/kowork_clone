import React from 'react';
import {
  Control,
  Controller,
  UseFormSetValue,
  UseFormTrigger,
  useFieldArray,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import {
  Alert,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MinusIcon from 'react-native-heroicons/solid/MinusIcon';
import PlusIcon from 'react-native-heroicons/solid/PlusIcon';

import {
  Button,
  CheckBox,
  CheckIcon,
  FormInputBox,
  Stack,
  TextInput,
} from 'app/components/blocks';
import { MODAL_TYPES } from 'app/components/pages/global/Modals/Modals';
import { ResumeFormSectionTitle } from 'app/components/pages/resume';
import { customColors } from 'app/constants/styles/Colors';
import { DegreeType } from 'app/graphql/generated';
import useModals from 'app/hooks/useModals';
import type { EducationInfoType, FormDataType } from 'app/types/Resume';
import { checkIsValidDate, convertToFormatDate } from 'app/utils/date';

const DEFAULT_EDUCATION_INPUT_DATA: EducationInfoType = {
  degree: DegreeType.ProBachelor,
  isGraduate: false,
  univName: '',
  major: '',
  enterDate: '',
  graduateDate: '',
};

interface EducationFormInputProps {
  index: number;
  control: Control<FormDataType, any>;
  setValue: UseFormSetValue<FormDataType>;
  trigger: UseFormTrigger<FormDataType>;
}

const EducationFormInput: React.FC<EducationFormInputProps> = ({
  index,
  control,
  setValue,
  trigger,
}) => {
  const isGraduate = useWatch({ name: `education.${index}.isGraduate` });

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
                {['ProBachelor', 'Bachelor', 'Master', 'Doctorate'].map(
                  item => {
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
                  onChangeText={value => {
                    field.onChange(convertToFormatDate(value));
                    trigger(`education.${index}.graduateDate`);
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
                  editable={!isGraduate}
                  value={field.value || ''}
                  onChangeText={value => {
                    field.onChange(convertToFormatDate(value));
                    trigger(`education.${index}.enterDate`);
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
      {/* 재학중 */}
      <Controller
        control={control}
        name={`education.${index}.isGraduate`}
        render={({ field: { value, onChange } }) => (
          <TouchableOpacity
            onPress={() => {
              onChange(!value);
              setValue(`education.${index}.graduateDate`, null);
            }}
          >
            <Stack direction="row" styles="items-center justify-end py-4">
              <CheckIcon checked={Boolean(value)} variant="circle" />
              <Text className="ml-2">재학중</Text>
            </Stack>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const EducationFormSection: React.FC = () => {
  const { control, setValue, trigger } = useFormContext<FormDataType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'education',
  });
  const { openModal, closeModal } = useModals();

  const handleRemoveEduFormInput = (index: number) => {
    remove(index);
  };

  const handleAddEduFormInput = () => append(DEFAULT_EDUCATION_INPUT_DATA);

  const createRemoveEduFormInputAlert = (index: number) => {
    if (Platform.OS === 'web') {
      return openModal(MODAL_TYPES.confirm, {
        title: '선택한 학력 삭제',
        description: `작성된 내용은 저장되지 않아요.\n선택한 학력정보를 삭제하시겠어요?`,
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
                handleRemoveEduFormInput(index);
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
      '선택한 학력 삭제',
      '작성된 내용은 저장되지 않아요.\n선택한 학력정보를 삭제하시겠어요?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        { text: '삭제', onPress: () => handleRemoveEduFormInput(index) },
      ]
    );
  };

  return (
    <ScrollView>
      <ResumeFormSectionTitle title="학력 정보" />
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
          <EducationFormInput {...{ control, index, setValue, trigger }} />
        </View>
      ))}

      <View className="bg-white">
        <Stack styles="justify-between border-b  border-gray-300 p-4">
          <Text className="text-base font-bold text-primary">학력</Text>
        </Stack>
        <View className="px-4 py-6">
          <TouchableOpacity onPress={handleAddEduFormInput}>
            <Stack styles="justify-center items-center px-4 py-3 border rounded-xl border-primary border-dashed">
              <PlusIcon fill={customColors.primary} />
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
