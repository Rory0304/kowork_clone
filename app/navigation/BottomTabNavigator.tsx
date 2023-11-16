import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import MyPageTabNavigator from "./MyPageTabNavigator";
import SearchJobNavigator from "./SearchJobNavigator";
import VisaNavigator from "./VisaNavigator";
import TabBarIcon from "./TabBarIcon";

import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

const HomeTab: BottomTabNavigationOptions = {
  tabBarLabel: "홈",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="HomeIcon" focused={focused} />
  ),
};

const SearchJobTab: BottomTabNavigationOptions = {
  tabBarLabel: "일자리",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="MagnifyingGlassIcon" focused={focused} />
  ),
};

const VisaTab: BottomTabNavigationOptions = {
  tabBarLabel: "비자",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="IdentificationIcon" focused={focused} />
  ),
};

const MyPageTab: BottomTabNavigationOptions = {
  tabBarLabel: "마이페이지",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="UserIcon" focused={focused} />
  ),
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Group>
        <BottomTab.Screen
          name="HomeNavigator"
          options={HomeTab}
          component={HomeNavigator}
        />
        <BottomTab.Screen
          name="SearchJobNavigator"
          options={SearchJobTab}
          component={SearchJobNavigator}
        />
        <BottomTab.Screen
          name="VisaNavigator"
          options={VisaTab}
          component={VisaNavigator}
        />
        <BottomTab.Screen
          name="MyPageNavigator"
          options={MyPageTab}
          component={MyPageTabNavigator}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
