import React from "react";
import { TextInput as RnTextInput } from "react-native";
import type { TextInputProps as RnTextInputProps } from "react-native";
import { gray } from "tailwindcss/colors";

interface TextInputProps extends RnTextInputProps {
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ error,  ...props }) => {
  return (
    <RnTextInput
      {...props}
      focusable
      className={`p-3 text-base font-medium bg-slate-100 border border-gray-300 rounded-lg ${
        error ? "border-red-500" : "focus:border-primary"
      }`}
      placeholderTextColor={gray[400]}
    />
  );
};

export default TextInput;
