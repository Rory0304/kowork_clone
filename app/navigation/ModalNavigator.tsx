import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoticeItemScreen from "app/screens/NoticeItem/NoticeItemScreen";
import MyNotificationScreen from "app/screens/MyPage/MyNotificationScreen";
import VisaTestD101Screen from "app/screens/Visa/VisaTestD101Screen";
import VisaTestF27Screen from "app/screens/Visa/VisaTestF27Screen";
import MyVisaEnrollScreen from "app/screens/MyPage/MyVisaEnrollScreen";
import MyApplyListScreen from "app/screens/MyPage/MyApplyListScreen";
import MyVisaHistory from "app/screens/MyPage/MyVisaHistory";
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
      <Stack.Screen
        name={NAV_SCREENS.MyVisaEnrollScreen}
        component={MyVisaEnrollScreen}
        options={{
          headerTitle: "비자 정보입력",
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyApplyListScreen}
        component={MyApplyListScreen}
        options={{
          headerTitle: "지원내역",
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.MyVisaHistoryScreen}
        component={MyVisaHistory}
        options={{
          headerTitle: "비자 히스토리",
        }}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigator;
