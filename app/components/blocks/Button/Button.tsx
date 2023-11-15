import React from "react";
import { Pressable, Text, View } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";
import clsx from "clsx";

type ButtonVariantType = "default" | "filled" | "dashed" | "outlined";
type ButtonColor = "default" | "primary";

interface ButtonProps {
  label: string;
  variant: ButtonVariantType;
  color?: ButtonColor;
  disabeld?: boolean;
  Icon?: React.ReactNode;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  color,
  disabeld = false,
  Icon,
  onPress,
}) => {
  const ButtonWrapperStyles = clsx(
    "justify-center items-center px-4 py-3 rounded-lg",
    variant === "dashed" &&
      color === "primary" &&
      "border border-primary border-dashed",
    variant === "filled" && color === "primary" && "bg-primary"
  );

  const ButtonLabelStyles = clsx(
    "text-base font-bold",
    variant === "filled" && color === "primary" && "text-white",
    variant === "dashed" && color === "primary" && "text-primary"
  );

  return (
    <Pressable onPress={onPress} disabled={disabeld}>
      <Stack styles={ButtonWrapperStyles}>
        {Icon ? <View className="mr-2">{Icon}</View> : null}
        <Text className={ButtonLabelStyles}>{label}</Text>
      </Stack>
    </Pressable>
  );
};

export default Button;
