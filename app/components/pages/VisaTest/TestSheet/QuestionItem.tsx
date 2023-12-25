import React from 'react';
import { Text, View } from 'react-native';

import _sum from 'lodash/sum';

import Stack from 'app/components/blocks/Stack/Stack';
import TestSheetOption from 'app/components/pages/VisaTest/TestSheet/TestSheetOption';
import type { Item } from 'app/types/VisaTestSheet';

interface QuestionItemProps extends Item {
  index: number;
  onOptionClickCallback?: (name: string, total: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  index,
  name,
  title,
  description,
  options,
  subItems,
  isMulti,
  limit,
  layout = 'vertical',
  optionVariant = 'default',
  onOptionClickCallback,
}) => {
  const [activeOption, setOption] = React.useState(
    Array.from({ length: subItems?.length || 1 }, () => [0])
  );

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (typeof onOptionClickCallback === 'function') {
      onOptionClickCallback(name, total);
    }
  }, [total]);

  const handleOptionClick = (
    itemIndex: number,
    selectedOption: number,
    score: number
  ) => {
    const newActiveOption = activeOption
      .slice()
      .map((item, index) =>
        index === itemIndex ? item.filter(i => i !== 0) : item
      );

    if (isMulti) {
      if (score === 0) {
        newActiveOption[itemIndex] = [0];
        setOption(newActiveOption);
        setTotal(score);
        return;
      }

      if (newActiveOption[itemIndex].includes(selectedOption)) {
        newActiveOption[itemIndex] = newActiveOption[itemIndex].filter(
          item => item !== selectedOption
        );

        if (newActiveOption[itemIndex].length === 0) {
          newActiveOption[itemIndex].push(0);
        }

        setOption(newActiveOption);
        setTotal(current => current - score);
        return;
      }

      newActiveOption[itemIndex].push(selectedOption);
      setOption(newActiveOption);
      setTotal(current =>
        limit ? Math.min(current + score, limit) : current + score
      );
      return;
    }

    newActiveOption[itemIndex] = [selectedOption];

    if (subItems) {
      const total = _sum(
        newActiveOption.map(
          (option, index) => subItems[index].options[option[0]].score
        )
      );
      setOption(newActiveOption);
      setTotal(total);
    } else {
      setOption(newActiveOption);
      setTotal(score);
    }
  };

  return (
    <View className="w-full mb-8">
      <View className="mb-2">
        <Stack styles="justify-between items-center mb-2">
          <Stack styles="items-center">
            <Text className="text-lg font-semibold ">{`${index}. ${title}`}</Text>
            {isMulti ? (
              <View className="px-3 py-1 ml-2 bg-blue-600 rounded-3xl">
                <Text className="text-[10px] text-white">복수선택 가능</Text>
              </View>
            ) : null}
          </Stack>
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
        {options?.map((option, optionIndex) => (
          <TestSheetOption
            {...option}
            active={activeOption[0].includes(optionIndex)}
            itemLayout={layout}
            variant={optionVariant}
            onPress={() => handleOptionClick(0, optionIndex, option.score)}
          />
        ))}
        {subItems?.map((item, subItemIndex) => (
          <View className="w-full mb-4">
            <Stack direction="column">
              <Text className="mb-2 text-base font-bold">{`${index}.${subItemIndex} ${title}`}</Text>
              <Text className="text-xs text-neutral-500">{description}</Text>
            </Stack>
            <Stack
              direction={layout === 'vertical' ? 'column' : 'row'}
              styles="flex-wrap"
              rowGap={10}
              columnGap={10}
            >
              {item.options.map((option, optionIndex) => (
                <TestSheetOption
                  {...option}
                  active={activeOption[subItemIndex].includes(optionIndex)}
                  onPress={() =>
                    handleOptionClick(subItemIndex, optionIndex, option.score)
                  }
                  itemLayout={layout}
                  variant={optionVariant}
                />
              ))}
            </Stack>
          </View>
        ))}
      </Stack>
    </View>
  );
};

export default React.memo(QuestionItem);
