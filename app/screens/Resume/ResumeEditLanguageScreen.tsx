import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Stack } from 'app/components/blocks';
import {
  LanguageFormSection,
  ProgressStep,
  ResumeFormWrapperTitle,
} from 'app/components/pages/resume';
import { FormDataType } from 'app/types/Resume';
import navigate from 'app/utils/navigationHelper';

const ResumeEditLanguageScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const {
    formState: { isValid },
  } = useFormContext<FormDataType>();

  return (
    <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={2} />
      <ResumeFormWrapperTitle title="언어" step={3} />
      <View>
        <LanguageFormSection />
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
          onPress={() => navigator.openResumeEditEtcInfoScreen()}
        />
      </Stack>
    </ScrollView>
  );
};

export default ResumeEditLanguageScreen;
