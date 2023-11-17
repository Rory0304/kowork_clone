import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";
import clsx from "clsx";

type ButtonVariantType = "default" | "filled" | "dashed" | "outlined";
type ButtonColor = "default" | "primary";
type ButtonSize = "default" | "large";

interface ButtonProps {
  label: string;
  variant: ButtonVariantType;
  color?: ButtonColor;
  disabeld?: boolean;
  size?: ButtonSize;
  Icon?: React.ReactNode;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  color,
  size = "default",
  disabeld = false,
  Icon,
  onPress,
}) => {
  const ButtonWrapperStyles = clsx(
    "justify-center items-center rounded-lg",
    variant === "dashed" &&
      color === "primary" &&
      "border border-primary border-dashed",
    variant === "filled" && color === "primary" && "bg-primary",
    disabeld === true ? "opacity-30" : "opactiy-100",
    size === "default" && "px-4 py-3",
    size === "large" && "px-4 py-4"
  );

  const ButtonLabelStyles = clsx(
    "text-base font-bold",
    variant === "filled" && color === "primary" && "text-white",
    variant === "dashed" && color === "primary" && "text-primary"
  );

  return (
    <TouchableOpacity onPress={onPress} disabled={disabeld}>
      <Stack styles={ButtonWrapperStyles}>
        {Icon ? <View className="mr-2">{Icon}</View> : null}
        <Text className={ButtonLabelStyles}>{label}</Text>
      </Stack>
    </TouchableOpacity>
  );
};

export default Button;
