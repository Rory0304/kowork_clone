import React from "react";
import { Pressable, Text, View } from "react-native";

type ChipVariant = "filled" | "outlined";
type ChipSize = "default" | "small";

interface ChipProps {
  label: string;
  size?: ChipSize;
  variant?: ChipVariant;
  active?: boolean;
  onPress?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  label,
  size = "default",
  variant = "filled",
  active = false,
  onPress,
}) => {
  const getChipStyles = (variant: ChipVariant, active: boolean) => {
    switch (variant) {
      case "filled":
        return active
          ? "bg-neutral-100 opacity-20 border-neutral-100"
          : "bg-primary opacity-20 border-primary";

      case "outlined":
        return active
          ? "bg-primary opacity-20 border-primary"
          : "bg-white opacity-20 border border-neutral-100";

      default:
        return "";
    }
  };

  return (
    <Pressable onPress={onPress}>
      <View
        className={`rounded-xl px-2 py-1 ${getChipStyles(variant, active)}`}
      >
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Chip;
