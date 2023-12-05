import React from "react";
import { View, Text } from "react-native";
import Button from "app/components/blocks/Button/Button";

import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

const ProfileEnrollAlertScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View className="items-center justify-center flex-1 w-full px-4">
      <View className="pb-16">
        <Text className="mb-6 text-2xl font-bold text-center text-green-500">
          잠깐
        </Text>
        <Text className="text-base leading-5 text-center text-secondary">{`프로필 설정이 필요해요.\n 프로필 설정을 완료해주세요.`}</Text>
      </View>
      <View className="w-full">
        <Button
          isFullWidth
          size="large"
          label="프로필 설정하기"
          variant="filled"
          color="primary"
          onPress={() => navigator.openProfileEnrollUserTypeScreen()}
        />
      </View>
    </View>
  );
};

export default ProfileEnrollAlertScreen;
