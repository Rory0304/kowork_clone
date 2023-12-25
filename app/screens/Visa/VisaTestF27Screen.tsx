import React from 'react';
import { ScrollView, View } from 'react-native';

import ProgressBar from 'app/components/blocks/ProgressBar/ProgressBar';
import QuestionItem from 'app/components/pages/VisaTest/TestSheet/QuestionItem';
import TestSheet from 'app/components/pages/VisaTest/TestSheet/TestSheet';
import VisaTestNoticeAccordion from 'app/components/pages/VisaTest/VisaTestNoticeAccordion';
import VisaTestScoreFooter from 'app/components/pages/VisaTest/VisaTestScoreFooter';
import { F27Test } from 'app/constants/VisaTestSheet';

const VisaTestF27: React.FC = () => {
  const [totalScoreInfo, setTotalScoreInfo] = React.useState<{
    [key: string]: number;
  }>({});
  const [scrollViewHeight, setScrollViewHeight] = React.useState(0);
  const [scrollViewContentHeight, setSccrollViewContentHeight] =
    React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const requiredTest = F27Test.required;
  const standardScore = F27Test.standardScore;

  const totalScore = Object.values(totalScoreInfo).reduce(
    (acc, cur) => acc + cur,
    0
  );

  const handleTotoalScoreSet = React.useCallback(
    (name: string, score: number) => {
      setTotalScoreInfo(prev => ({ ...prev, [name]: score }));
    },
    []
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
        className="px-4 py-8 pb-12"
        onScroll={handleOnScroll}
        onContentSizeChange={(_, height) => {
          setSccrollViewContentHeight(height);
        }}
        onLayout={event => setScrollViewHeight(event.nativeEvent.layout.height)}
        scrollEventThrottle={12}
      >
        <VisaTestNoticeAccordion />
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
      </ScrollView>
      <VisaTestScoreFooter
        totalScore={totalScore}
        standardScore={standardScore}
      />
    </View>
  );
};

export default VisaTestF27;
