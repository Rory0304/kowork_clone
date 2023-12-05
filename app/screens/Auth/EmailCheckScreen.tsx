import React from "react";
import { Text, View } from "react-native";
import { Button, Stack } from "app/components/blocks";
import { NativeStackParamList } from "app/navigation/AuthNavigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAuth } from "app/contexts/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

const EmailCheckScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { authorized } = useAuth();
  const [emailCheckSuccess, setEmailCheckSuccess] = React.useState(authorized);

  const { params } =
    useRoute<RouteProp<NativeStackParamList, "EmailCheckScreen">>();

  const email = params?.email;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      setEmailCheckSuccess(authorized);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [authorized]);

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
        disabeld={!emailCheckSuccess}
        onPress={() => navigator.openEmailCheckSuccessScreen()}
      />
    </Stack>
  );
};

export default EmailCheckScreen;
