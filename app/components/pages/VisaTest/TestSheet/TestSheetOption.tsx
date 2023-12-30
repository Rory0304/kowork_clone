import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import CheckIcon from 'app/components/blocks/Icon/CheckIcon';
import Stack from 'app/components/blocks/Stack/Stack';
import type { ItemLayout, OptionVariant } from 'app/types/VisaTestSheet';

interface TestSheetOptionProps {
  title: string;
  score: number;
  itemLayout?: ItemLayout;
  variant?: OptionVariant;
  active: boolean;
  onPress: () => void;
}

const TestSheetOption: React.FC<TestSheetOptionProps> = ({
  title,
  score,
  itemLayout = 'vertical',
  variant = 'default',
  onPress,
  active,
}) => {
  const renderTestSheetOptionContent = ({
    title,
    active,
    score,
    itemLayout,
    variant,
  }: Omit<TestSheetOptionProps, 'onPress'>) => {
    switch (variant) {
      case 'checkbox':
        return (
          <Stack
            direction={itemLayout === 'horiztonal' ? 'column' : 'row'}
            styles="w-full flex-wrap items-center justify-between"
          >
            {variant === 'checkbox' ? (
              score !== 0 ? (
                <CheckIcon checked={active} />
              ) : (
                <View className="basis-1/12"></View>
              )
            ) : null}
            <Text
              className={`${
                variant === 'checkbox' && score === 0 ? 'text-center' : ''
              } max-w-[75%] text-base font-bold beak-words ${
                active ? 'text-primary' : 'text-neutral-400'
              }`}
            >
              {title}
            </Text>
            <Text
              className={`font-semibold ${
                active ? 'text-primary' : 'text-neutral-400'
              }`}
            >
              {score}점
            </Text>
          </Stack>
        );
      default:
        return (
          <Stack
            direction={itemLayout === 'horiztonal' ? 'column' : 'row'}
            styles="w-full flex-wrap items-center justify-between "
          >
            <Text
              className={`text-base font-bold beak-words ${
                active ? 'text-primary' : 'text-neutral-400'
              }`}
            >
              {title}
            </Text>
            <Text
              className={`font-semibold ${
                active ? 'text-primary' : 'text-neutral-400'
              }`}
            >
              {score}점
            </Text>
          </Stack>
        );
    }
  };

  const getLayoutStyles = (layout: ItemLayout) => {
    switch (layout) {
      case 'grid':
        return 'max-w-[48%] basis-1/2 shrink';

      case 'horiztonal':
        return 'max-w-[30.6%] basis-1/3';

      case 'vertical':
        return 'flex-1';

      default:
        return '';
    }
  };

  return (
    <TouchableOpacity className={getLayoutStyles(itemLayout)} onPress={onPress}>
      <View
        className={`p-3 flex flex-row flex-wrap rounded-lg  ${
          active ? 'border-primary border-2' : 'border-neutral-300 border'
        }`}
      >
        {renderTestSheetOptionContent({ variant, title, score, active })}
      </View>
    </TouchableOpacity>
  );
};

export default TestSheetOption;
