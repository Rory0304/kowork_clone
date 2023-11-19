import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

import { Stack } from "app/components/blocks";
import LogoIcon from "assets/images/logo.svg";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View className="relative flex justify-between flex-1 border-red-100 brder">
      <ImageBackground
        source={require("../../../assets/images/home-background.jpg")}
        resizeMode="cover"
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack direction="column" styles="justify-center px-4 h-full">
          <Stack
            direction="column"
            styles="justify-center items-center basis-3/4"
          >
            <View className="mb-8">
              <Text className="mb-2 text-base font-medium text-white">
                외국인 구인구직 전문 플랫폼
              </Text>
              <LogoIcon width={175} height={25} fill="#fff" />
            </View>
            <Text className="text-2xl text-center text-white">
              {"Korean-based Recruitment \n& Visa Consulting"}
            </Text>
          </Stack>
          <Stack direction="column" styles="basis-1/4 ">
            <TouchableOpacity onPress={() => navigator.openEmailSignInScreen()}>
              <View className="px-2 py-4 bg-white rounded-xl">
                <Text className="text-base font-bold text-center">
                  이메일로 계속하기
                </Text>
              </View>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
