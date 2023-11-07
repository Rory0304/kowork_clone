import React from "react";
import NativeCheckIcon from "react-native-heroicons/solid/CheckIcon";
import { View } from "react-native";

interface CheckIconProps {
  checked: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({ checked }) => {
  return (
    <View
      className={`w-6 h-6 border rounded-md ${
        checked ? "border-primary" : "border-neutral-300"
      } `}
    >
      {checked ? <NativeCheckIcon /> : null}
    </View>
  );
};

export default CheckIcon;
