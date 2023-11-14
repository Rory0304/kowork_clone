import React from "react";
import { Text, View, ScrollView } from "react-native";
import {
  EducationFormSection,
  CareerFormSection,
  ProgressStep,
} from "app/components/pages/resume";
import { Button, Stack } from "app/components/blocks";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

const ResumeEditEduCareerScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={1} />
      <View className="p-4 py-6 bg-white">
        <Text className="mb-1 text-lg font-bold text-neutral-300">02</Text>
        <Text className="text-2xl font-bold text-neutral-500">학력/경력</Text>
      </View>
      <View>
        <EducationFormSection />
        <CareerFormSection />
      </View>
      <Stack columnGap={2} styles="px-4 pb-24 bg-white justify-end">
        <Button
          label="이전"
          variant="default"
          onPress={() => navigation.goBack()}
        />
        <Button
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
