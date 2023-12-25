import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ChevronRightIcon from 'react-native-heroicons/solid/ChevronRightIcon';

import { useNavigation } from '@react-navigation/native';

import Stack from 'app/components/blocks/Stack/Stack';
import MyResumeSection from 'app/components/pages/mypage/MyResumeSection';
import MyVisaHistorySection from 'app/components/pages/mypage/MyVisaHistorySection';
import { useAuth } from 'app/contexts/AuthProvider';
import { useProfile } from 'app/contexts/ProfileProvider';
import navigate from 'app/utils/navigationHelper';

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
        </View>
        <MyResumeSection />
        {ApplySection}
        <MyVisaHistorySection name={profileInfo?.name || ''} />
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
