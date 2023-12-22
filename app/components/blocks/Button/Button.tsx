import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedbackProps,
} from "react-native";
import Stack from "app/components/blocks/Stack/Stack";
import clsx from "clsx";

type ButtonVariantType = "default" | "filled" | "dashed" | "outlined";
type ButtonColor = "default" | "primary";
type ButtonSize = "default" | "large" | "small";

interface ButtonProps extends TouchableWithoutFeedbackProps {
  label: string;
  variant?: ButtonVariantType;
  isFullWidth?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  Icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "default",
  color = "default",
  isFullWidth = false,
  size = "default",
  Icon,
  ...props
}) => {
  const ButtonWrapperStyles = clsx(
    // disable
    props.disabled === true ? "opacity-30" : "opactiy-100",
    `justify-center items-center rounded-lg ${isFullWidth ? "w-full" : ""}`,
    // variant
    variant === "dashed" &&
      color === "primary" &&
      "border border-primary border-dashed",
    variant === "filled" && "bg-neutral-100",
    variant === "filled" && color === "primary" && "bg-primary",
    variant === "default" && "bg-neutral-100",
    variant === "outlined" && "border border-neutral-100",
    variant === "outlined" && color === "primary" && "border border-primary",
    // size
    size === "default" && "px-4 py-3",
    size === "large" && "px-4 py-4",
    size === "small" && "px-2 py-2"
  );

  const ButtonLabelStyles = clsx(
    "text-base font-bold text-center",
    color === "default" && "text-neutral-400",
    color === "primary" && "text-primary",
    variant === "filled" && color === "primary" && "text-white"
  );

  return (
    <TouchableOpacity {...props}>
      <Stack styles={ButtonWrapperStyles}>
        {Icon ? <View className="mr-2">{Icon}</View> : null}
        <Text className={ButtonLabelStyles}>{label}</Text>
      </Stack>
    </TouchableOpacity>
  );
};

export default Button;
