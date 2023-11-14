import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface CheckBoxProps {
  label: string;
  active: boolean;
  className?: string;
  onPress: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  active,
  className,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={className}>
      <View
        className={`border rounded-lg py-2 px-1 ${
          active ? "border-primary" : "border-neutral-400"
        }`}
      >
        <Text
          className={`text-md font-bold text-center ${
            active ? "text-primary" : "text-neutral-400"
          }`}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;
