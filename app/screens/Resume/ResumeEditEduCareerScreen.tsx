import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Stack } from 'app/components/blocks';
import {
  CareerFormSection,
  EducationFormSection,
  ProgressStep,
  ResumeFormWrapperTitle,
} from 'app/components/pages/resume';
import { FormDataType } from 'app/types/Resume';
import navigate from 'app/utils/navigationHelper';

const ResumeEditEduCareerScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const {
    formState: { isValid },
  } = useFormContext<FormDataType>();

  return (
    <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={1} />
      <ResumeFormWrapperTitle title="학력/경력" step={2} />
      <View>
        <EducationFormSection />
        <CareerFormSection />
      </View>
      <Stack columnGap={8} styles="px-4 pb-24 bg-white justify-end">
        <Button
          label="이전"
          variant="default"
          onPress={() => navigation.goBack()}
        />
        <Button
          disabled={!isValid}
          label="저장 후 다음"
          variant="filled"
          color="primary"
          onPress={() => navigator.openResumeEditLanguageScreen()}
        />
      </Stack>
    </ScrollView>
  );
};

export default ResumeEditEduCareerScreen;
