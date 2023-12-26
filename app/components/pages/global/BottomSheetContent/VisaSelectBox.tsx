import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

import { VisaCode, VisaStatus } from 'app/constants/VisaDetail';

interface VisaSelectBoxProps {
  onPress: (visaCode: VisaCode) => void;
}

const VisaSelectBox: React.FC<VisaSelectBoxProps> = ({ onPress }) => {
  return (
    <FlatList
      className="p-4 py-6"
      data={Object.keys(VisaStatus) as Array<keyof typeof VisaStatus>}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="my-3"
          onPress={e => {
            e.preventDefault();
            onPress(item);
          }}
        >
          <Text className="text-base font-semibold text-neutral-600">
            {VisaStatus[item]}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default VisaSelectBox;
