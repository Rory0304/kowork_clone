import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAV_SCREENS } from "../constants/Routes";
import EmailCheckSuccessScreen from "app/screens/Auth/EmailCheckSuccessScreen";

export type NativeStackParamList = {
  EmailCheckSuccessScreen: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

const ProfileNavigator: React.FC = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name={NAV_SCREENS.EmailCheckSuccessScreen}
        component={EmailCheckSuccessScreen}
        options={{
          headerBackVisible: true,
          headerTitle: "회원가입",
        }}
      />
    </NativeStack.Navigator>
  );
};

export default ProfileNavigator;
