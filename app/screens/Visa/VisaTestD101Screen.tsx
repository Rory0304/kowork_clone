import React from 'react';
import { ScrollView, View } from 'react-native';

import ProgressBar from 'app/components/blocks/ProgressBar/ProgressBar';
import QuestionItem from 'app/components/pages/VisaTest/TestSheet/QuestionItem';
import TestSheet from 'app/components/pages/VisaTest/TestSheet/TestSheet';
import WorkExperienceQuestionItem from 'app/components/pages/VisaTest/TestSheet/WorkExperienceQuestionItem';
import VisaTestNoticeAccordion from 'app/components/pages/VisaTest/VisaTestNoticeAccordion';
import VisaTestScoreFooter from 'app/components/pages/VisaTest/VisaTestScoreFooter';
import { D101Test } from 'app/constants/VisaTestSheet';

const VisaTestD101Screen: React.FC = () => {
  const [totalScoreInfo, setTotalScoreInfo] = React.useState<{
    [key: string]: number;
  }>({});
  const [scrollViewHeight, setScrollViewHeight] = React.useState(0);
  const [scrollViewContentHeight, setSccrollViewContentHeight] =
    React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const standardScore = D101Test.standardScore;
  const requiredTest = React.useMemo(() => D101Test.required, []);
  const optionalTest = React.useMemo(() => D101Test.optional, []);

  const handleTotoalScoreSet = React.useCallback(
    (name: string, score: number) => {
      setTotalScoreInfo(prev => ({ ...prev, [name]: score }));
    },
    []
  );

  const totalScore = Object.values(totalScoreInfo).reduce(
    (acc, cur) => acc + cur,
    0
  );

  const handleOnScroll = (value: {
    nativeEvent: { contentOffset: { y: number } };
  }) => {
    setProgress(
      Math.abs(
        value.nativeEvent.contentOffset.y /
          (scrollViewContentHeight - scrollViewHeight)
      )
    );
  };

  return (
    <View className="flex-1">
      <ProgressBar progress={progress} />
      <ScrollView
        className="py-8 pb-12 mx-4"
        onScroll={handleOnScroll}
        onContentSizeChange={(_, height) => {
          setSccrollViewContentHeight(height);
        }}
        onLayout={event => setScrollViewHeight(event.nativeEvent.layout.height)}
        scrollEventThrottle={12}
      >
        <VisaTestNoticeAccordion />
        <View className="mb-24">
          <TestSheet {...requiredTest}>
            {requiredTest.items.map((item, index) => (
              <QuestionItem
                key={item.name}
                index={index + 1}
                onOptionClickCallback={handleTotoalScoreSet}
                {...item}
              />
            ))}
          </TestSheet>
          {optionalTest ? (
            <TestSheet {...optionalTest}>
              {optionalTest.items.map((item, index) => {
                return item.name === 'workExperience' ? (
                  <WorkExperienceQuestionItem
                    key={item.name}
                    index={index + 1}
                    {...item}
                  />
                ) : (
                  <QuestionItem
                    key={item.name}
                    index={index + 1}
                    onOptionClickCallback={handleTotoalScoreSet}
                    {...item}
                  />
                );
              })}
            </TestSheet>
          ) : null}
        </View>
      </ScrollView>
      <VisaTestScoreFooter
        totalScore={totalScore}
        standardScore={standardScore}
      />
    </View>
  );
};

export default VisaTestD101Screen;
