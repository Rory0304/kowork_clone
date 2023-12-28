import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StarIcon from 'react-native-heroicons/outline/StarIcon';

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyPageScreen from 'app/screens/MyPage/MyPageScreen';
import navigate from 'app/utils/navigationHelper';

import { NAV_SCREENS } from '../constants/Routes';

const NativeStack = createNativeStackNavigator();

const MyPageNavigator: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <NativeStack.Navigator initialRouteName={NAV_SCREENS.MyPageScreen}>
      <NativeStack.Screen
        name={NAV_SCREENS.MyPageScreen}
        component={MyPageScreen}
        options={{
          headerTitle: '내 정보',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigator.openMyBookmarkScreen()}>
              <StarIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </NativeStack.Navigator>
  );
};

export default MyPageNavigator;
