import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from 'app/contexts/AuthProvider';
import { useProfile } from 'app/contexts/ProfileProvider';
import EmailCheckScreen from 'app/screens/Auth/EmailCheckScreen';
import EmailCheckSuccessScreen from 'app/screens/Auth/EmailCheckSuccessScreen';
import EmailSignInScreen from 'app/screens/Auth/EmailSignInScreen';
import EmailSignUpScreen from 'app/screens/Auth/EmailSignUpScreen';
import ProfileEnrollAlertScreen from 'app/screens/Auth/ProfileEnrollAlertScreen';
import HomeScreen from 'app/screens/Home/HomeScreen';

import { NAV_SCREENS } from '../constants/Routes';

export type NativeStackParamList = {
  HomeScreen: undefined;
  EmailSignInScreen: undefined;
  EmailSignUpScreen: undefined;
  EmailCheckScreen: { email: string };
  EmailCheckSuccessScreen: undefined;
  ProfileEnrollAlertScreen: undefined;
};

const NativeStack = createStackNavigator<NativeStackParamList>();

const AuthNavigator: React.FC = () => {
  const { authorized } = useAuth();
  const { profileInfo } = useProfile();

  return (
    <NativeStack.Navigator>
      <NativeStack.Group screenOptions={{ presentation: 'modal' }}>
        <NativeStack.Screen
          name={NAV_SCREENS.HomeScreen}
          component={HomeScreen}
          options={{
            animationEnabled: true,
            presentation: 'modal',
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
      </NativeStack.Group>
      {!authorized ? (
        <NativeStack.Group screenOptions={{ headerBackTitleVisible: true }}>
          <NativeStack.Screen
            name={NAV_SCREENS.EmailSignInScreen}
            component={EmailSignInScreen}
            options={{
              headerBackTitle: '',
              headerTitle: '이메일 로그인',
            }}
          />
          <NativeStack.Screen
            name={NAV_SCREENS.EmailSignUpScreen}
            component={EmailSignUpScreen}
            options={{
              headerTitle: '회원가입',
            }}
          />
        </NativeStack.Group>
      ) : null}
      {!profileInfo ? (
        <NativeStack.Screen
          name={NAV_SCREENS.ProfileEnrollAlertScreen}
          component={ProfileEnrollAlertScreen}
          options={{
            headerTitle: '회원가입',
          }}
        />
      ) : null}
      <NativeStack.Screen
        name={NAV_SCREENS.EmailCheckScreen}
        component={EmailCheckScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
      <NativeStack.Screen
        name={NAV_SCREENS.EmailCheckSuccessScreen}
        component={EmailCheckSuccessScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </NativeStack.Navigator>
  );
};

export default AuthNavigator;
