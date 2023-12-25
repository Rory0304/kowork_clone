import React from "react";
import { ScrollView } from "react-native";
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
  ResumeFormWrapperTitle,
} from "app/components/pages/resume";

const ResumeEditBasicInfoScreen: React.FC = () => {
  const {
    control,
    formState: { isValid },
  } = useFormContext<FormDataType>();

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={0} />
      <ResumeFormWrapperTitle title="기본정보" step={1} />
      <BasicInfoFormSection control={control} />
      <ResidenceFormSection control={control} />
      <EmailFormSection control={control} />
      <Stack styles="px-4 pb-24 bg-white justify-end">
        <Button
          disabled={!isValid}
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
