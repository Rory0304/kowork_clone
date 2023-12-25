import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import { useAuth } from 'app/contexts/AuthProvider';
import { useProfile } from 'app/contexts/ProfileProvider';

import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import ModalNavigator from './ModalNavigator';
import ProfileNavigator from './ProfileNavigator';
import ResumeEditNavigator from './ResumeEditNavigator';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c5ae9',
    backgroundColor: '#ced3d6',
  },
};

const prefix = Linking.createURL('/');

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const { authorized } = useAuth();
  const { profileInfo } = useProfile();

  return (
    <NavigationContainer
      linking={{
        prefixes: [prefix],
        config: {
          screens: {
            HomeScreen: 'home',
            AuthNavigator: {
              path: 'auth',
            },
            EmailCheckScreen: {
              path: 'auth/email-check:email',
            },
          },
        },
      }}
      theme={CustomTheme}
    >
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            position: 'relative',
            maxWidth: 450,
            width: '100%',
            marginHorizontal: 'auto',
          },
        }}
      >
        {!authorized || !profileInfo ? (
          <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
        ) : null}
        {!profileInfo ? (
          <AppStack.Screen
            name="ProfileNavigator"
            component={ProfileNavigator}
          />
        ) : null}
        <AppStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <AppStack.Screen
          name="ResumeEditNavigator"
          component={ResumeEditNavigator}
        />
        <AppStack.Screen name="ModalNavigator" component={ModalNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
