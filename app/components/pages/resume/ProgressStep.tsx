import React from 'react';
import { Text, View } from 'react-native';
import CheckCircleIcon from 'react-native-heroicons/solid/CheckCircleIcon';

import { resumeProgress } from 'app/constants/Resume';
import { customColors } from 'app/constants/styles/Colors';

interface ProgressSteProps {
  currentStepIdx: number;
}

const CurrentAdorment = (
  <View className="w-[12px] h-[12px] p-2 border-2 rounded-full bg-white border-primary flex flex-row items-center justify-center">
    <View className="w-[6px] h-[6px] rounded-full bg-primary" />
  </View>
);

const FinishedAdorment = (
  <View className="z-10">
    <CheckCircleIcon fill={customColors.primary} />
  </View>
);

const InPorgressAdorment = (
  <View className="p-2 bg-white border-2 rounded-full border-neutral-400"></View>
);

const ProgressStep: React.FC<ProgressSteProps> = ({ currentStepIdx }) => {
  return (
    <View className="py-4 bg-white shadow-sm">
      <View className="flex flex-col justify-center">
        <View className="flex flex-row items-center justify-between">
          {resumeProgress.map((step, idx) => (
            <View
              key={`progress-${idx}`}
              className={`relative basis-1/4 flex flex-col items-center`}
            >
              <Text
                className={`mb-2 text-xs font-bold ${
                  currentStepIdx === idx ? 'text-primary' : 'text-neutral-300'
                }`}
              >
                {step.name}
              </Text>
              {idx < resumeProgress.length - 1 ? (
                <View className="absolute w-full top-[78%] left-[50%] border-b border-neutral-300" />
              ) : null}
              {currentStepIdx === idx
                ? CurrentAdorment
                : currentStepIdx > idx
                ? FinishedAdorment
                : InPorgressAdorment}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProgressStep;
