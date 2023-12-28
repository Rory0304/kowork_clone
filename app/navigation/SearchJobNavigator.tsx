import React from 'react';
import { Text } from 'react-native';
import MagnifyingGlassIcon from 'react-native-heroicons/outline/MagnifyingGlassIcon';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderBackIcon from 'app/components/blocks/Icon/HeaderBackIcon';
import { NAV_SCREENS } from 'app/constants/Routes';

import SearchJobScreen from '../screens/SearchJob/SearchJobScreen';

const NativeStack = createStackNavigator();

const SearchJobNavigator: React.FC = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name={NAV_SCREENS.SearchJobScreen}
        component={SearchJobScreen}
        options={{
          headerTitleStyle: { display: 'none' },
          headerLeft: () => (
            <Text className="text-xl font-bold">일자리 찾기</Text>
          ),
          headerRight: () => <MagnifyingGlassIcon color="text-neutral-400" />,
        }}
      />
    </NativeStack.Navigator>
  );
};

export default SearchJobNavigator;
