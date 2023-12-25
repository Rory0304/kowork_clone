import React from 'react';
import { View } from 'react-native';
import NativeCheckIcon from 'react-native-heroicons/solid/CheckIcon';

import { customColors } from 'app/constants/styles/Colors';

interface CheckIconProps {
  variant?: 'circle' | 'square';
  checked: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  variant = 'square',
  checked,
}) => {
  return (
    <View
      className={`w-6 h-6 border ${
        variant === 'square' ? 'rounded-md' : 'rounded-full'
      } ${checked ? 'border-primary' : 'border-neutral-300'} `}
    >
      {checked ? (
        <NativeCheckIcon
          fill={checked ? customColors.primary : customColors.neutral[300]}
        />
      ) : null}
    </View>
  );
};

export default CheckIcon;
