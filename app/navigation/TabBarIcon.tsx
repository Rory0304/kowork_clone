import React from "react";
import { View } from "react-native";

interface TabBarIconProps {
  focused: boolean;
  Icon: React.ReactNode;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, Icon }) => {
  return (
    <View className={`${focused ? "text-primary" : "text-secondary"}`}>
      {Icon}
    </View>
  );
};

export default TabBarIcon;
