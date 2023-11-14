import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ModalNavigator from "./ModalNavigator";
import ResumeEditNavigator from "./ResumeEditNavigator";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2c5ae9",
    backgroundColor: "#ced3d6",
  },
};

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={CustomTheme}>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <AppStack.Screen name="ModalNavigator" component={ModalNavigator} />
        <AppStack.Screen
          name="ResumeEditNavigator"
          component={ResumeEditNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
