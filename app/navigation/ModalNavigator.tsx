import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoticeItemScreen from "../screens/NoticeItem/NoticeItemScreen";
import MyNotificationScreen from "../screens/MyPage/MyNotificationScreen";
import VisaTestD101Screen from "../screens/Visa/VisaTestD101Screen";

import { NAV_SCREENS } from "../constants/Routes";

const Stack = createNativeStackNavigator();

const ModalNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAV_SCREENS.NoticeItemScreen}
        component={NoticeItemScreen}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyNotificationScreen}
        component={MyNotificationScreen}
      />
      <Stack.Screen
        name={NAV_SCREENS.VisaTestD101}
        component={VisaTestD101Screen}
        options={{
          headerTitle: "D-10-1 Test",
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigator;
