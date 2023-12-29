import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MagnifyingGlassIcon from 'react-native-heroicons/outline/MagnifyingGlassIcon';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NAV_SCREENS } from 'app/constants/Routes';
import navigate from 'app/utils/navigationHelper';

import JobPostScreen from '../screens/JobPost/JobPostScreen';

const NativeStack = createStackNavigator();

const SearchJobNavigator: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name={NAV_SCREENS.SearchJobScreen}
        component={JobPostScreen}
        options={{
          headerTitleStyle: { display: 'none' },
          headerLeft: () => (
            <Text className="text-xl font-bold">일자리 찾기</Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigator.openSearchJobPostScreen()}
            >
              <MagnifyingGlassIcon color="text-neutral-400" />
            </TouchableOpacity>
          ),
        }}
      />
    </NativeStack.Navigator>
  );
};

export default SearchJobNavigator;
