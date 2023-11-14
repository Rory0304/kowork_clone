import React from "react";
import { View, Text, ScrollView } from "react-native";
import ProgressStep from "app/components/pages/resume/ProgressStep";
import { resumeProgress } from "app/constants/Resume";

const ResumeEditEtcInfoScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <ProgressStep currentStepIdx={3} />
      <View>
        <Text>04</Text>
        <Text>기타정보</Text>
      </View>
      <View></View>
    </ScrollView>
  );
};

export default ResumeEditEtcInfoScreen;
