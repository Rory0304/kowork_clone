import React from 'react';
import { Text, View } from 'react-native';

import _sum from 'lodash/sum';

import Stack from 'app/components/blocks/Stack/Stack';
import TestSheetOption from 'app/components/pages/VisaTest/TestSheet/TestSheetOption';
import type { Item } from 'app/types/VisaTestSheet';

interface WorkExperienceQuestionitemProps extends Item {
  index: number;
  onOptionClickCallback?: (name: string, total: number) => void;
}

const WorkExperienceQuestionitem: React.FC<WorkExperienceQuestionitemProps> = ({
  index,
  name,
  title,
  description,
  options,
  layout = 'vertical',
  optionVariant = 'default',
  onOptionClickCallback,
}) => {
  const domesticOptionIdx = [1, 2, 3];
  const abroadOptionIdx = [4, 5, 6];

  const [activeOption, setOption] = React.useState<number[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (typeof onOptionClickCallback === 'function') {
      onOptionClickCallback(name, total);
    }
  }, [total]);

  // [TODO] make to reducer
  const handleOptionClick = (selectedOptionIdx: number, score: number) => {
    // set to 'none'
    if (score === 0) {
      setTotal(0);
      setOption([0]);
      return;
    }

    // deselect
    if (activeOption.includes(selectedOptionIdx)) {
      const newOption = activeOption.filter(
        idx => idx !== selectedOptionIdx
      ) || [0];
      setOption(newOption);
      setTotal(current => current - score);
      return;
    }

    // select domestic option
    if (domesticOptionIdx.includes(selectedOptionIdx)) {
      const prevDomesticOption = activeOption.filter(option =>
        domesticOptionIdx.includes(option)
      )[0];

      if (prevDomesticOption) {
        const newOption = activeOption.filter(
          option => option !== prevDomesticOption
        );

        setOption([...newOption, selectedOptionIdx]);
        setTotal(
          current =>
            (current -= options?.[prevDomesticOption].score || 0) + score
        );
      } else {
        setOption(current => [...current, selectedOptionIdx]);
        setTotal(current => current + score);
      }

      return;
    }

    // select abroad option
    if (abroadOptionIdx.includes(selectedOptionIdx)) {
      const prevAbroadOption = activeOption.filter(option =>
        abroadOptionIdx.includes(option)
      )[0];

      if (prevAbroadOption) {
        const newOption = activeOption.filter(
          option => option !== prevAbroadOption
        );

        setOption([...newOption, selectedOptionIdx]);
        setTotal(
          current => (current -= options?.[prevAbroadOption].score || 0) + score
        );
      } else {
        setOption(current => [...current, selectedOptionIdx]);
        setTotal(current => current + score);
      }

      return;
    }
  };

  return (
    <View className="w-full mb-8">
      <View className="mb-2">
        <Stack direction="row" styles="justify-between items-center">
          <View>
            <Text className="mb-2 text-xl font-semibold">{`${index}. ${title}`}</Text>
            <Text className="mb-2 text-xs font-semibold">복수선택 가능</Text>
          </View>
          <Text className="text-xl font-semibold text-primary">{total}</Text>
        </Stack>
        {!!description ? (
          <Text className="font-semibold text-neutral-400">{description}</Text>
        ) : null}
      </View>
      <Stack
        direction={layout === 'vertical' ? 'column' : 'row'}
        styles={layout === 'vertical' ? '' : 'flex-wrap'}
        rowGap={8}
        columnGap={10}
      >
        {options?.map((option, optionIdx) => (
          <TestSheetOption
            {...option}
            active={activeOption.includes(optionIdx)}
            itemLayout={layout}
            variant={optionVariant}
            onPress={() => handleOptionClick(optionIdx, option.score)}
          />
        ))}
      </Stack>
    </View>
  );
};

export default WorkExperienceQuestionitem;
