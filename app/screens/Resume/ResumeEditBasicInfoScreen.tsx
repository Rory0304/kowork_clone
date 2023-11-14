import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useFormContext } from "react-hook-form";
import { FormDataType } from "app/types/Resume";
import { Button, Stack } from "app/components/blocks";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

import {
  BasicInfoFormSection,
  ResidenceFormSection,
  EmailFormSection,
  ProgressStep,
} from "app/components/pages/resume";

const ResumeEditBasicInfoScreen: React.FC = () => {
  const { control } = useFormContext<FormDataType>();

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={0} />
      <View className="p-4 py-6 bg-white">
        <Text className="mb-1 text-lg font-bold text-neutral-300">01</Text>
        <Text className="text-2xl font-bold text-neutral-500">기본정보</Text>
      </View>
      <BasicInfoFormSection control={control} />
      <ResidenceFormSection control={control} />
      <EmailFormSection control={control} />
      <Stack columnGap={2} styles="px-4 pb-24 bg-white justify-end">
        <Button
          label="저장 후 다음"
          variant="filled"
          color="primary"
          onPress={() => navigator.openResumeEditEduCareerScreen()}
        />
      </Stack>
    </ScrollView>
  );
};

export default ResumeEditBasicInfoScreen;
