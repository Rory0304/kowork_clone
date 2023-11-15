import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import Stack from "app/components/blocks/Stack/Stack";
import TrashIcon from "react-native-heroicons/solid/TrashIcon";

const MyApplyListScreen: React.FC = () => {
  const myApplyList = [];
  const [isEditShown, setIsEditShown] = React.useState(false);

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <View className={`bg-white pb-12`}>
      <Text className="px-4 py-4 font-semibold text-neutral-600">
        더 나은 서비스를 위해 합격 여부를 알려주세요
      </Text>
      <Stack
        direction="row"
        styles="justify-between p-4 border-b border-neutral-300"
      >
        <Text className="text-sm font-medium text-neutral-400">
          총 {myApplyList.length}건
        </Text>
        <Pressable onPress={() => setIsEditShown(!isEditShown)}>
          <Text className="text-sm font-medium text-neutral-400">
            {isEditShown ? "취소" : "편집"}
          </Text>
        </Pressable>
      </Stack>
      <Stack
        direction="row"
        styles={`${
          isEditShown ? "block" : "hidden"
        } px-4 py-3 items-center justify-between`}
      >
        <Pressable>
          <Text className="text-sm font-medium text-neutral-400">전체선택</Text>
        </Pressable>
        <Pressable>
          <TrashIcon />
        </Pressable>
      </Stack>

      <View>
        <Stack
          direction="column"
          styles="h-full justify-center  items-center pb-32"
        >
          <Text className="mb-4 text-base font-semibold text-neutral-400">
            지원내역이 아직 없어요.
          </Text>
          <Pressable onPress={() => navigator.openJobSearchScreen()}>
            <View className="flex px-8 py-3 bg-gray-100 rounded-md opacity-80">
              <Text className="text-lg font-bold text-blue-600">
                지금 지원하러 가기
              </Text>
            </View>
          </Pressable>
        </Stack>
      </View>
    </View>
  );
};

export default MyApplyListScreen;
