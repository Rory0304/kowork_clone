import React from "react";
import { TextInput as RnTextInput } from "react-native";
import type { TextInputProps as RnTextInputProps } from "react-native";
import { gray } from "tailwindcss/colors";

interface TextInputProps extends RnTextInputProps {
  error?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ error, ...props }) => {
  return (
    <RnTextInput
      {...props}
      className={`p-3 font-medium bg-slate-100 border border-gray-300 rounded-lg ${
        error ? "border-red-500" : "focus:border-primary leading-none"
      }`}
      placeholderTextColor={gray[400]}
      style={{
        fontSize: 16,
      }}
    />
  );
};

export default TextInput;
