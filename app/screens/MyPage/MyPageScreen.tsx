import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";
import ChevronRightIcon from "react-native-heroicons/solid/ChevronRightIcon";
import PencilIcon from "react-native-heroicons/solid/PencilIcon";
import { supabaseClient } from "app/utils/supabase";

import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

import Stack from "app/components/blocks/Stack/Stack";

const MyPageScreen: React.FC = () => {
  const name = "Eunsoo";
  const visaType = "C-4(단기취업)";
  const visaList = [] as any[];
  const currentVisa = visaList?.[0] || "비자 없음";

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const handleSignOut = async () => {
    try {
      await supabaseClient.auth.signOut().then((res) => {
        if (res.error) {
          throw new Error("fail to sign out");
        }
        navigator.openHomeScreen();
      });
    } catch (err) {
      console.error(err);
    }
  };

  const ResumeSection = (
    <View className="px-4 py-2 border rounded-md bg-gray-50 border-primary">
      <TouchableOpacity
        onPress={() => navigator.openResumeEditBasicInfoScreen()}
      >
        <Stack styles="justify-between items-center">
          <View>
            <Stack styles="items-center">
              <PencilIcon width={20} height={20} />
              <Text className="mb-1 ml-2 text-lg font-bold">이력서 작성</Text>
            </Stack>
            <Text className="text-xs text-neutral-700">
              수고하셨어요! 이력서가 완성되었어요.
            </Text>
          </View>
          <ChevronRightIcon />
        </Stack>
      </TouchableOpacity>
      <Stack styles="items-center my-4 flex-row w-full">
        <View className="h-3 mr-1 bg-blue-300 border-l border-blue-300 rounded-l-lg shrink basis-1/4" />
        <View className="h-3 mr-1 bg-blue-500 shrink basis-1/4" />
        <View className="h-3 mr-1 bg-blue-700 shrink basis-1/4" />
        <View className="h-3 bg-blue-800 border-l border-blue-800 rounded-r-lg shrink rounded-lborder-r basis-1/4" />
      </Stack>
      <Text className="text-xs text-neutral-400">
        완성! 바뀐 정보는 지속적으로 업데이트 해주세요.
      </Text>
    </View>
  );

  const ApplySection = (
    <TouchableOpacity onPress={() => navigator.openMyApplyListScreen()}>
      <Stack styles="justify-between rounded-md px-4 py-2 bg-gray-50 ">
        <Text className="text-lg font-bold">지원내역</Text>
        <Stack styles="items-center">
          <Text className="text-base font-semibold text-neutral-500">
            전체보기
          </Text>
          <ChevronRightIcon />
        </Stack>
      </Stack>
    </TouchableOpacity>
  );

  const VisaSection = (
    <View className="px-4 py-3 rounded-md bg-gray-50">
      <Text className="mb-2 font-semibold text-md text-neutral-400">
        {name}님의 현재 비자
      </Text>
      <Text className="text-lg font-bold">{currentVisa}</Text>
      <TouchableOpacity onPress={() => navigator.openMyVisaEnrollScreen()}>
        <Text className="py-4 text-lg font-semibold text-center underline text-neutral-400">
          비자 등록하기
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigator.openMyVisaHistoryScreen()}>
        <View className="px-4 py-2 border rounded-md">
          <Text className="font-bold text-center text-neutral-500">
            비자 히스토리
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex flex-row justify-center w-full p-3">
          <ChevronDownIcon width={24} height={24} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView className="px-4 pt-4 pb-12">
      <Stack direction="column" rowGap={12}>
        <View>
          <Text className="text-lg font-bold text-neutral-600">{name}</Text>
          <Text className="text-base font-bold text-right underline text-neutral-500">
            미리보기
          </Text>
        </View>
        {ResumeSection}
        {ApplySection}
        {VisaSection}
        <TouchableOpacity onPress={handleSignOut}>
          <Text>로그아웃</Text>
        </TouchableOpacity>
      </Stack>
    </ScrollView>
  );
};

export default MyPageScreen;
