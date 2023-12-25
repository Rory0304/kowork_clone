import React from 'react';
import { Text, View } from 'react-native';

import clsx from 'clsx';

import Stack from 'app/components/blocks/Stack/Stack';

type TableVariant = 'horizontal' | 'vertical';
interface TableProps {
  colHeader: string[];
  data: React.ReactNode[];
  variant: TableVariant;
}

const Table: React.FC<TableProps> = ({ colHeader, data, variant }) => {
  const TableColumnStyles = clsx(
    'border-b border-gray-300 w-full',
    variant === 'horizontal' && 'items-center',
    variant === 'vertical' && 'items-start'
  );

  const TableColumnHeaderStyles = clsx(
    'bg-gray-50',
    variant === 'vertical' && 'w-full px-4 py-4',
    variant === 'horizontal' && 'px-2 py-4 w-[25%] max-w-[25%]'
  );

  const TableColumnBodyStyles = clsx(
    variant === 'vertical' && 'px-4 py-4',
    variant === 'horizontal' && 'px-2 py-4 w-[75%]'
  );

  return (
    <View className="border border-gray-300">
      {colHeader.map((column, index) => (
        <Stack
          styles={TableColumnStyles}
          direction={variant === 'horizontal' ? 'row' : 'column'}
        >
          <View className={TableColumnHeaderStyles}>
            <Text className="font-medium text-neutral-500">{column}</Text>
          </View>
          <View className={TableColumnBodyStyles}>{data[index]}</View>
        </Stack>
      ))}
    </View>
  );
};

export default Table;
