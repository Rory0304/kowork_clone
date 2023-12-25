import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TrashIcon from 'react-native-heroicons/solid/TrashIcon';

import { useNavigation } from '@react-navigation/native';

import Stack from 'app/components/blocks/Stack/Stack';
import navigate from 'app/utils/navigationHelper';

const MyApplyListScreen: React.FC = () => {
  const myApplyList = [];
  const [isEditShown, setIsEditShown] = React.useState(false);

  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView className="bg-white pb-12 flex-1">
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
        <TouchableOpacity onPress={() => setIsEditShown(!isEditShown)}>
          <Text className="text-sm font-medium text-neutral-400">
            {isEditShown ? '취소' : '편집'}
          </Text>
        </TouchableOpacity>
      </Stack>
      <Stack
        direction="row"
        styles={`${
          isEditShown ? 'block' : 'hidden'
        } px-4 py-3 items-center justify-between`}
      >
        <TouchableOpacity>
          <Text className="text-sm font-medium text-neutral-400">전체선택</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <TrashIcon />
        </TouchableOpacity>
      </Stack>

      <View>
        <Stack direction="column" styles="h-full justify-center items-center">
          <Text className="mb-4 text-base font-semibold text-neutral-400">
            지원내역이 아직 없어요.
          </Text>
          <TouchableOpacity onPress={() => navigator.openJobSearchScreen()}>
            <View className="flex px-8 py-3 bg-gray-100 rounded-md opacity-80">
              <Text className="text-lg font-bold text-blue-600">
                지금 지원하러 가기
              </Text>
            </View>
          </TouchableOpacity>
        </Stack>
      </View>
    </ScrollView>
  );
};

export default MyApplyListScreen;
