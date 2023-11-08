import React from "react";
import { Pressable, Text, View } from "react-native";
import clsx from "clsx";

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
  const chipWrapperStyles = clsx(
    "rounded-3xl px-5 py-1",
    variant === "filled" && !active && "bg-neutral-100 border-primary",
    variant === "filled" && active && "bg-blue-600/90",
    variant === "outlined" && active && "border bg-blue-600/10 border-primary",
    variant === "outlined" &&
      !active &&
      "bt-white opacity-20 border border-neutral-700"
  );

  const chipTextStyles = clsx(
    "text-base font-semibold",
    variant === "filled" && !active && "text-neutral-300",
    variant === "filled" && active && "text-white",
    variant === "outlined" && active && "text-primary",
    variant === "outlined" && !active && "text-neutral-700"
  );

  return (
    <Pressable onPress={onPress}>
      <View className={chipWrapperStyles}>
        <Text className={chipTextStyles}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Chip;
