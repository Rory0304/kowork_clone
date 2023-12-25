import React from 'react';
import {
  Control,
  Controller,
  useFieldArray,
  useFormContext,
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

import { Button, CheckBox, Stack, TextInput } from 'app/components/blocks';
import { MODAL_TYPES } from 'app/components/pages/global/Modals/Modals';
import { ResumeFormSectionTitle } from 'app/components/pages/resume';
import { customColors } from 'app/constants/styles/Colors';
import useModals from 'app/hooks/useModals';
import { FormDataType, LanguageLevel, LanguageType } from 'app/types/Resume';

const DEFAULT_LANGUAGE_INPUT_DATA: LanguageType = {
  name: '',
  level: LanguageLevel.Basic,
};

interface EtcLanguageFormInputProps {
  index: number;
  control: Control<FormDataType, any>;
}

interface DefaultLanguageFormInputProps {
  title: string;
  name: 'ko' | 'en';
  control: Control<FormDataType, any>;
}

const DefaultLanguageFormInput: React.FC<DefaultLanguageFormInputProps> = ({
  title,
  name,
  control,
}) => {
  return (
    <View>
      <View className="border-b border-gray-300">
        <Text className="p-4 font-bold text-primary">{title}</Text>
      </View>
      <Controller
        control={control}
        name={`language.${name}.level`}
        render={({ field }) => (
          <Stack columnGap={16} styles="pt-4 px-4">
            {Object.values(LanguageLevel).map(level => (
              <View
                key={`language.${name}.${level}`}
                className="shrink basis-1/4"
              >
                <CheckBox
                  label={level}
                  active={level === field.value}
                  onPress={() => field.onChange(level)}
                />
              </View>
            ))}
          </Stack>
        )}
      />
    </View>
  );
};

const EtcLanguageFormInput: React.FC<EtcLanguageFormInputProps> = ({
  index,
  control,
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={`language.etc.${index}.name`}
        render={({ field, fieldState: { error } }) => (
          <View className="mb-4">
            <TextInput focusable placeholder="e.g.프랑스어" {...field} />
            {error && <Text className="text-red-400">{error.message}</Text>}
          </View>
        )}
      />
      <Controller
        control={control}
        name={`language.etc.${index}.level`}
        render={({ field, fieldState: { error } }) => (
          <Stack columnGap={4}>
            {Object.values(LanguageLevel).map(level => (
              <View className="shrink basis-1/4">
                <CheckBox
                  label={level}
                  active={level === field.value}
                  onPress={() => field.onChange(level)}
                />
              </View>
            ))}
          </Stack>
        )}
      />
    </View>
  );
};

const LanguageFormSection: React.FC = () => {
  const { control } = useFormContext<FormDataType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'language.etc',
  });
  const { openModal, closeModal } = useModals();

  const handleRemoveEtcLanguageFormInput = (index: number) => remove(index);

  const handleAddEtcLanguageFormInput = () =>
    append(DEFAULT_LANGUAGE_INPUT_DATA);

  const createRemoveLanguageFormInputAlert = (index: number) => {
    if (Platform.OS === 'web') {
      return openModal(MODAL_TYPES.confirm, {
        title: '선택한 언어 삭제',
        description: `작성된 내용은 저장되지 않아요.\n선택한 언어정보를 삭제하시겠어요?`,
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
                handleRemoveEtcLanguageFormInput(index);
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
      '선택한 언어 삭제',
      '작성된 내용은 저장되지 않아요.\n선택한 언어정보를 삭제하시겠어요?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => handleRemoveEtcLanguageFormInput(index),
        },
      ]
    );
  };

  return (
    <ScrollView className="flex-1">
      <View className="mb-4 bg-white">
        <ResumeFormSectionTitle title="언어 능력" />
        <DefaultLanguageFormInput title="한국어" name="ko" control={control} />
        <DefaultLanguageFormInput title="영어" name="en" control={control} />
        {fields.map((field, index) => (
          <View key={field.id} className="p-4">
            <Stack styles="justify-between mb-4">
              <Text className="text-base font-bold ">기타 언어</Text>
              <TouchableOpacity
                onPress={() => createRemoveLanguageFormInputAlert(index)}
              >
                <MinusIcon />
              </TouchableOpacity>
            </Stack>
            <EtcLanguageFormInput {...{ control, index }} />
          </View>
        ))}
      </View>

      <View className="bg-white">
        <View className="px-4 py-6">
          <Button
            variant="dashed"
            color="primary"
            onPress={handleAddEtcLanguageFormInput}
            Icon={<PlusIcon fill={customColors.primary} />}
            label="기타 가능 언어"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LanguageFormSection;
