import React from "react";
import NativeCheckIcon from "react-native-heroicons/solid/CheckIcon";
import { View } from "react-native";

interface CheckIconProps {
  variant?: "circle" | "square";
  checked: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  variant = "square",
  checked,
}) => {
  return (
    <View
      className={`w-6 h-6 border ${
        variant === "square" ? "rounded-md" : "rounded-full"
      } ${checked ? "border-primary" : "border-neutral-300"} `}
    >
      {checked ? <NativeCheckIcon /> : null}
    </View>
  );
};

export default CheckIcon;
