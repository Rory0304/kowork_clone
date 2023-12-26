import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderBackIcon from 'app/components/blocks/Icon/HeaderBackIcon';
import MyApplyListScreen from 'app/screens/MyPage/MyApplyListScreen';
import MyNotificationScreen from 'app/screens/MyPage/MyNotificationScreen';
import MyVisaEnrollScreen from 'app/screens/MyPage/MyVisaEnrollScreen';
import MyVisaHistory from 'app/screens/MyPage/MyVisaHistory';
import NoticeItemScreen from 'app/screens/NoticeItem/NoticeItemScreen';
import VisaInfoScreen from 'app/screens/Visa/VisaInfoScreen';
import VisaTestD101Screen from 'app/screens/Visa/VisaTestD101Screen';
import VisaTestF27Screen from 'app/screens/Visa/VisaTestF27Screen';

import { NAV_SCREENS } from '../constants/Routes';

const Stack = createNativeStackNavigator();

const ModalNavigator: React.FC = () => {
  const navigation = useNavigation();

  const onPressBackHandle = () => navigation.goBack();

  return (
    <Stack.Navigator screenOptions={{ presentation: 'fullScreenModal' }}>
      <Stack.Screen
        name={NAV_SCREENS.NoticeItemScreen}
        component={NoticeItemScreen}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyNotificationScreen}
        component={MyNotificationScreen}
      />
      <Stack.Screen
        name={NAV_SCREENS.VisaTestD101}
        component={VisaTestD101Screen}
        options={{
          headerTitle: 'D-10-1 Test',
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.VisaTestF27}
        component={VisaTestF27Screen}
        options={{
          headerTitle: 'F-2-7 Test',
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyVisaEnrollScreen}
        component={MyVisaEnrollScreen}
        options={{
          headerTitle: '비자 정보 입력',
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderBackIcon onPress={onPressBackHandle} />,
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyApplyListScreen}
        component={MyApplyListScreen}
        options={{
          headerTitle: '지원내역',
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyVisaHistoryScreen}
        component={MyVisaHistory}
        options={{
          headerTitle: '비자 히스토리',
          headerLeft: () => <HeaderBackIcon onPress={onPressBackHandle} />,
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.VisaInfoScreen}
        component={VisaInfoScreen}
        options={{
          headerTitle: '모든 비자 정보',
          headerLeft: () => <HeaderBackIcon onPress={onPressBackHandle} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigator;
