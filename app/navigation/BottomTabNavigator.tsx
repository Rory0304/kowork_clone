import React from 'react';
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import MainNavigator from './MainNavigator';
import MyPageTabNavigator from './MyPageTabNavigator';
import SearchJobNavigator from './SearchJobNavigator';
import TabBarIcon from './TabBarIcon';
import VisaNavigator from './VisaNavigator';

const MainTab: BottomTabNavigationOptions = {
  tabBarLabel: '홈',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="HomeIcon" focused={focused} />
  ),
};

const SearchJobTab: BottomTabNavigationOptions = {
  tabBarLabel: '일자리',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="MagnifyingGlassIcon" focused={focused} />
  ),
};

const VisaTab: BottomTabNavigationOptions = {
  tabBarLabel: '비자',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="IdentificationIcon" focused={focused} />
  ),
};

const MyPageTab: BottomTabNavigationOptions = {
  tabBarLabel: '마이페이지',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon iconName="UserIcon" focused={focused} />
  ),
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Group>
        <BottomTab.Screen
          name="MainNavigator"
          options={MainTab}
          component={MainNavigator}
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
