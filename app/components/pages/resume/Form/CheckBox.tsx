import React from "react";
import { Pressable, View, Text } from "react-native";

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
    <Pressable onPress={onPress} className={className}>
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
    </Pressable>
  );
};

export default CheckBox;
