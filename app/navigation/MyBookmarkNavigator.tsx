import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyBookMarkScreen from 'app/screens/MyPage/MyBookMarkScreen';

import { NAV_SCREENS } from '../constants/Routes';

const NativeStack = createNativeStackNavigator();

const MyBookmarkNavigator: React.FC = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name={NAV_SCREENS.MyBookMarkScreen}
        component={MyBookMarkScreen}
        options={{
          headerTitle: '관심목록',
        }}
      />
    </NativeStack.Navigator>
  );
};

export default MyBookmarkNavigator;
