import React from "react";
import { Text, Alert, ScrollView, View, Pressable } from "react-native";
import {
  useFormContext,
  Controller,
  useFieldArray,
  Control,
} from "react-hook-form";

import { TextInput, CheckBox } from "app/components/pages/resume/Form";
import { Stack, Button } from "app/components/blocks";
import { FormDataType, LanguageType, LanguageLevel } from "app/types/Resume";
import MinusIcon from "react-native-heroicons/solid/MinusIcon";
import PlusIcon from "react-native-heroicons/solid/PlusIcon";

const DEFAULT_LANGUAGE_INPUT_DATA: LanguageType = {
  name: "",
  level: "",
};

interface EtcLanguageFormInputProps {
  index: number;
  control: Control<FormDataType, any>;
}

interface DefaultLanguageFormInputProps {
  title: string;
  name: "ko" | "en";
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
            {Object.values(LanguageLevel).map((level) => (
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
            {Object.values(LanguageLevel).map((level) => (
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
    name: "language.etc",
  });

  const handleRemoveEtcLanguageFormInput = (index: number) => remove(index);

  const handleAddEtcLanguageFormInput = () =>
    append(DEFAULT_LANGUAGE_INPUT_DATA);

  const createRemoveEduFormInputAlert = (index: number) =>
    Alert.alert(
      "선택한 언어 삭제",
      "작성된 내용은 저장되지 않아요.\n선택한 언어정보를 삭제하시겠어요?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: () => handleRemoveEtcLanguageFormInput(index),
        },
      ]
    );

  return (
    <ScrollView className="flex-1">
      <View className="mb-4 bg-white">
        <Text className="font-bold">언어 능력</Text>
        <DefaultLanguageFormInput title="한국어" name="ko" control={control} />
        <DefaultLanguageFormInput title="영어" name="en" control={control} />
        {fields.map((field, index) => (
          <View key={field.id} className="p-4">
            <Stack styles="justify-between mb-4">
              <Text className="text-base font-bold ">기타 언어</Text>
              <Pressable onPress={() => createRemoveEduFormInputAlert(index)}>
                <MinusIcon />
              </Pressable>
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
            Icon={<PlusIcon />}
            label="기타 가능 언어"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LanguageFormSection;
