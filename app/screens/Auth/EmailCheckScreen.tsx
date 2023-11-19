import React from "react";
import { Text, ScrollView, View } from "react-native";
import { Button, Stack } from "app/components/blocks";
import { NativeStackParamList } from "app/navigation/AuthNavigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthContext } from "app/contexts/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

const EmailCheckScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { authorized } = React.useContext(AuthContext);

  const { params } =
    useRoute<RouteProp<NativeStackParamList, "EmailCheckScreen">>();

  const email = params?.email;

  console.log(authorized);

  return (
    <Stack direction="column" styles=" justify-center flex-1 px-4 pb-12">
      <View className="mb-2">
        <Text className="text-sm font-medium text-center text-neutral-500">
          <Text className="text-xl font-bold text-black">{email}</Text>
          {` 로\n인증요청을 위한 이메일이 전송되었습니다.\n메일함에 접속하여 링크를 눌러주세요.`}
        </Text>
      </View>
      <Button
        label="다음"
        variant="filled"
        color="primary"
        disabeld={!authorized}
        onPress={() => navigator.openEmailCheckSuccessScreen()}
      />
    </Stack>
  );
};

export default EmailCheckScreen;
