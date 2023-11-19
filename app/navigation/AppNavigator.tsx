import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";
import ModalNavigator from "./ModalNavigator";
import ResumeEditNavigator from "./ResumeEditNavigator";
import * as Linking from "expo-linking";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2c5ae9",
    backgroundColor: "#ced3d6",
  },
};

const prefix = Linking.createURL("/");

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: [prefix],
        config: {
          initialRouteName: "HomeScreen",
          screens: {
            HomeScreen: "home",
            EmailCheckScreen: "email-check:email",
          },
        },
        async getInitialURL() {
          let url = await Linking.getInitialURL();
          if (url != null) {
            return url;
          }
          return url;
        },
        subscribe(listener) {
          const onReceiveURL = ({ url }: { url: string }) => listener(url);

          // Listen to incoming links from deep linking
          Linking.addEventListener("url", onReceiveURL);

          return () => {};
        },
      }}
      theme={CustomTheme}
    >
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            maxWidth: 980,
            width: "100%",
            marginHorizontal: "auto",
          },
        }}
      >
        <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
        <AppStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <AppStack.Screen
          name="ResumeEditNavigator"
          component={ResumeEditNavigator}
        />
        <AppStack.Screen name="ModalNavigator" component={ModalNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
