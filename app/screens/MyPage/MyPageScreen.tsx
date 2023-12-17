import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import ChevronRightIcon from "react-native-heroicons/solid/ChevronRightIcon";
import PencilIcon from "react-native-heroicons/solid/PencilIcon";

import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";

import Stack from "app/components/blocks/Stack/Stack";
import { useAuth } from "app/contexts/AuthProvider";
import { useProfile } from "app/contexts/ProfileProvider";

import MyVisaHistorySection from "app/components/pages/mypage/MyVisaHistorySection";

const MyPageScreen: React.FC = () => {
  const { profileInfo } = useProfile();

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut().then(() => {
        return navigator.openHomeScreen();
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

  return (
    <ScrollView className="px-4 pt-4">
      <Stack direction="column" rowGap={12}>
        <View>
          <Text className="text-lg font-bold text-neutral-600">
            {profileInfo?.name}
          </Text>
          <Text className="text-base font-bold text-right underline text-neutral-500">
            미리보기
          </Text>
        </View>
        {ResumeSection}
        {ApplySection}
        <MyVisaHistorySection name={profileInfo?.name || ""} />
        <View className="pt-8 pb-12">
          <TouchableOpacity onPress={handleSignOut}>
            <Text className="text-base font-semibold text-secondary">
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>
      </Stack>
    </ScrollView>
  );
};

export default MyPageScreen;
