import React from "react";
import MyPageScreen from "../screens/MyPage/MyPageScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MyPageNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default MyPageNavigator;
