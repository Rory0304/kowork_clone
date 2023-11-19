import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAV_SCREENS } from "../constants/Routes";
import EmailSignInScreen from "app/screens/Auth/EmailSignInScreen";
import EmailSignUpScreen from "app/screens/Auth/EmailSignUpScreen";
import EmailCheckScreen from "app/screens/Auth/EmailCheckScreen";
import HomeScreen from "app/screens/Home/HomeScreen";
import EmailCheckSuccessScreen from "app/screens/Auth/EmailCheckSuccessScreen";
import { AuthContext } from "app/contexts/AuthProvider";

export type NativeStackParamList = {
  HomeScreen: undefined;
  EmailSignInScreen: undefined;
  EmailSignUpScreen: undefined;
  EmailCheckScreen: { email: string };
  EmailCheckSuccessScreen: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

const AuthNavigator: React.FC = () => {
  const { authorized, userInfo } = React.useContext(AuthContext);

  return (
    <NativeStack.Navigator>
      <React.Fragment>
        <NativeStack.Screen
          name={NAV_SCREENS.HomeScreen}
          component={HomeScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.EmailSignInScreen}
          component={EmailSignInScreen}
          options={{
            headerBackVisible: true,
            headerTitle: "이메일 로그인",
          }}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.EmailSignUpScreen}
          component={EmailSignUpScreen}
          options={{
            headerBackVisible: true,
            headerTitle: "회원가입",
          }}
        />
      </React.Fragment>
      <NativeStack.Screen
        name={NAV_SCREENS.EmailCheckScreen}
        component={EmailCheckScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "회원가입",
        }}
      />
      {userInfo?.identities?.[0]?.identity_data?.email_verified ? (
        <NativeStack.Screen
          name={NAV_SCREENS.EmailCheckSuccessScreen}
          component={EmailCheckSuccessScreen}
          options={{
            headerBackVisible: true,
            headerTitle: "회원가입",
          }}
        />
      ) : null}
    </NativeStack.Navigator>
  );
};

export default AuthNavigator;
