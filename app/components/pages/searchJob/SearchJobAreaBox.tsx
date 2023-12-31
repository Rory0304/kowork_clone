import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ArrowPathIcon from 'react-native-heroicons/solid/ArrowPathIcon';
import XMarkIcon from 'react-native-heroicons/solid/XMarkIcon';

import Chip from 'app/components/blocks/Chip/Chip';
import Stack from 'app/components/blocks/Stack/Stack';
import { AREA_LIST } from 'app/constants/JobCategory';

interface SearchJobAreaBoxProps {
  defaultArea: string[];
  onSaveBtnClick: (areaList: string[]) => void;
  onClose: () => void;
}

const SearchJobAreaBox: React.FC<SearchJobAreaBoxProps> = ({
  defaultArea,
  onSaveBtnClick,
  onClose,
}) => {
  const [selectedArea, setSelectedArea] = React.useState(defaultArea);

  return (
    <View>
      <Stack
        styles={
          'justify-between items-center w-full px-4 border-b border-neutral-100 pb-2 sticky top-0 left-0'
        }
      >
        <TouchableOpacity onPress={onClose}>
          <XMarkIcon />
        </TouchableOpacity>
        <Text className="text-lg font-bold">지역 필터</Text>
        <TouchableOpacity onPress={() => setSelectedArea([])}>
          <ArrowPathIcon />
        </TouchableOpacity>
      </Stack>
      <Stack
        styles={'flex-wrap justify-center px-8 py-4'}
        rowGap={8}
        columnGap={8}
      >
        <Chip
          label={'전체'}
          variant="filled"
          active={selectedArea.length === 0}
          onPress={() => setSelectedArea([])}
        />
        {AREA_LIST.map(area => {
          const isActive = selectedArea.includes(area);
          return (
            <Chip
              label={area}
              variant="outlined"
              active={isActive}
              onPress={() => {
                if (!isActive) setSelectedArea(current => [...current, area]);
                else
                  setSelectedArea(current =>
                    current.filter(curArea => curArea !== area)
                  );
              }}
            />
          );
        })}
      </Stack>
      <TouchableOpacity
        onPress={() => onSaveBtnClick(selectedArea)}
        className="p-3 m-4 rounded-lg bg-primary"
      >
        <Text className="text-lg font-bold text-center text-white">
          필터 적용
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchJobAreaBox;
