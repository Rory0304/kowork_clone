import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NAV_SCREENS } from 'app/constants/Routes';

import MainScreen from '../screens/Main/MainScreen';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Stack.Screen name={NAV_SCREENS.MainScreen} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
