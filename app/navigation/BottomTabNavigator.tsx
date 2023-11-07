import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import MyPageTabNavigator from "./MyPageTabNavigator";
import SearchJobNavigator from "./SearchJobNavigator";
import VisaNavigator from "./VisaNavigator";
import TabBarIcon from "./TabBarIcon";

import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import IdentificationIcon from "react-native-heroicons/solid/IdentificationIcon";
import UserIcon from "react-native-heroicons/solid/UserIcon";
import MagnifyingGlassIcon from "react-native-heroicons/solid/MagnifyingGlassIcon";
import HomeIcon from "react-native-heroicons/solid/HomeIcon";

const HomeTab: BottomTabNavigationOptions = {
  tabBarLabel: "홈",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={<HomeIcon />} focused={focused} />
  ),
};

const SearchJobTab: BottomTabNavigationOptions = {
  tabBarLabel: "일자리",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={<MagnifyingGlassIcon />} focused={focused} />
  ),
};

const VisaTab: BottomTabNavigationOptions = {
  tabBarLabel: "비자",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={<IdentificationIcon className="text-secondary" />}
      focused={focused}
    />
  ),
};

const MyPageTab: BottomTabNavigationOptions = {
  tabBarLabel: "마이페이지",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={<UserIcon />} focused={focused} />
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
