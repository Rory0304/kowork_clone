import React from "react";
import { Text, View } from "react-native";
import { Button, Stack } from "app/components/blocks";

const EmailCheckSuccessScreen: React.FC = () => {
  console.log("here");

  return (
    <Stack direction="column" styles=" justify-center flex-1 px-4 pb-12">
      <View className="mb-2">
        <Text className="text-sm font-medium text-center text-neutral-500">
          성공적으로 회원가입되었습니다!
        </Text>
      </View>
      <Button label="다음" variant="filled" color="primary" />
    </Stack>
  );
};

export default EmailCheckSuccessScreen;
