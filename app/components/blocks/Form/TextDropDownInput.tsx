import React from "react";
import { TextInput } from "react-native";
import { gray } from "tailwindcss/colors";
import { Stack } from "app/components/blocks";
import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";

import type { TextInputProps } from "react-native";

interface TextDropDownInputProps extends TextInputProps {
  error?: boolean;
}

const TextDropDownInput: React.FC<TextDropDownInputProps> = ({
  error,
  ...props
}) => {
  return (
    <Stack styles="items-center justify-between p-3 bg-gray-200 border border-gray-300 rounded-lg">
      <TextInput
        {...props}
        focusable
        editable={false}
        className={`font-medium w-full focus:border-primary ${
          error ? "border-red-500" : " leading-none	"
        }`}
        placeholderTextColor={gray[400]}
        style={{
          fontSize: 16,
        }}
      />
      <ChevronDownIcon color="gray" width={20} height={20} className="flex-1" />
    </Stack>
  );
};

export default TextDropDownInput;
