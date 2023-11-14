import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "../screens/MyPage/MyPageScreen";

const Stack = createNativeStackNavigator();

const MyPageNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MyPage">
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
