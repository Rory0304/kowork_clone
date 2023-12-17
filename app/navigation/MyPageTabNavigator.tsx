import React from "react";
import { NAV_SCREENS } from "../constants/Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "../screens/MyPage/MyPageScreen";

const NativeStack = createNativeStackNavigator();

const MyPageNavigator: React.FC = () => {
  return (
    <NativeStack.Navigator initialRouteName={NAV_SCREENS.MyPageScreen}>
      <NativeStack.Screen
        name={NAV_SCREENS.MyPageScreen}
        component={MyPageScreen}
      />
    </NativeStack.Navigator>
  );
};

export default MyPageNavigator;
