import React from "react";
import { ScrollView } from "react-native";
import { D101Test } from "app/constants/VisaTestSheet";
import TestSheet from "app/components/blocks/TestSheet/TestSheet";
import QuestionItem from "app/components/pages/VisaTest/D101/Question/QuestionItem";
import WorkExperienceQuestionItem from "app/components/pages/VisaTest/D101/Question/WorkExperienceQuestionItem";

interface testOptionInfoProps {
  key: string;
  score: number;
  active: boolean;
}

const VisaTestD101Screen: React.FC = () => {
  // const [testOptionInfo, setTestOptionInfo] =
  //   React.useState<testOptionInfoProps[]>();

  const requiredTest = D101Test.required;
  const optionalTest = D101Test.optional;

  return (
    <ScrollView className="px-4 py-8 pb-12">
      <TestSheet {...requiredTest}>
        {requiredTest.items.map((item, index) => (
          <QuestionItem {...item} index={index + 1} />
        ))}
      </TestSheet>
      <TestSheet {...optionalTest}>
        {optionalTest.items.map((item, index) => {
          return item.name === "workExperience" ? (
            <WorkExperienceQuestionItem {...item} index={index + 1} />
          ) : (
            <QuestionItem {...item} index={index + 1} />
          );
        })}
      </TestSheet>
    </ScrollView>
  );
};

export default VisaTestD101Screen;
