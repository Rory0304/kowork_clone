import React from 'react';
import { Text, View } from 'react-native';
import CheckCircleIcon from 'react-native-heroicons/solid/CheckCircleIcon';

import { useNavigation } from '@react-navigation/native';

import { Button, Stack } from 'app/components/blocks';
import { customColors } from 'app/constants/styles/Colors';
import navigate from 'app/utils/navigationHelper';

const EmailCheckSuccessScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <Stack direction="column" styles=" justify-center flex-1 px-4 pb-12">
      <View className="mb-4">
        <Stack direction="row" styles="items-center justify-center mb-6">
          <Text className="mr-2 text-2xl font-bold text-center text-primary">
            회원가입 완료
          </Text>
          <CheckCircleIcon
            color={customColors.primary}
            width={32}
            height={32}
          />
          <Stack />
        </Stack>
        <Text className="text-base font-medium text-center text-neutral-500">
          {`이메일 인증이 완료되었어요!\n이제 프로필 설정을 마무리해주세요.`}
        </Text>
      </View>
      <Button
        isFullWidth
        label="다음"
        variant="filled"
        color="primary"
        onPress={() => navigator.openProfileEnrollUserTypeScreen()}
      />
    </Stack>
  );
};

export default EmailCheckSuccessScreen;
