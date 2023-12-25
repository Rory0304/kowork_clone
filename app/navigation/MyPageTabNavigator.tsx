import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAV_SCREENS } from '../constants/Routes';
import MyPageScreen from '../screens/MyPage/MyPageScreen';

const NativeStack = createNativeStackNavigator();

const MyPageNavigator: React.FC = () => {
  return (
    <NativeStack.Navigator initialRouteName={NAV_SCREENS.MyPageScreen}>
      <NativeStack.Screen
        name={NAV_SCREENS.MyPageScreen}
        component={MyPageScreen}
        options={{
          headerTitle: '내 정보',
        }}
      />
    </NativeStack.Navigator>
  );
};

export default MyPageNavigator;
