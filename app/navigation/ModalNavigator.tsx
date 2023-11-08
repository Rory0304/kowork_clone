import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoticeItemScreen from "app/screens/NoticeItem/NoticeItemScreen";
import MyNotificationScreen from "app/screens/MyPage/MyNotificationScreen";
import VisaTestD101Screen from "app/screens/Visa/VisaTestD101Screen";
import VisaTestF27Screen from "app/screens/Visa/VisaTestF27Screen";

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
      <Stack.Screen
        name={NAV_SCREENS.VisaTestF27}
        component={VisaTestF27Screen}
        options={{
          headerTitle: "F-2-7 Test",
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigator;
