import React from "react";
import { View } from "react-native";
import IdentificationIcon from "react-native-heroicons/solid/IdentificationIcon";
import UserIcon from "react-native-heroicons/solid/UserIcon";
import MagnifyingGlassIcon from "react-native-heroicons/solid/MagnifyingGlassIcon";
import HomeIcon from "react-native-heroicons/solid/HomeIcon";

import { customColors } from "app/constants/styles/Colors";

type IconNameType =
  | "HomeIcon"
  | "UserIcon"
  | "IdentificationIcon"
  | "MagnifyingGlassIcon";

interface TabBarIconProps {
  focused: boolean;
  iconName: IconNameType;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, iconName }) => {
  const focusedStyle = focused ? customColors.primary : customColors.secondary;

  const renderIcon = (iconName: IconNameType) => {
    switch (iconName) {
      case "HomeIcon":
        return <HomeIcon color={focusedStyle} />;
      case "UserIcon":
        return <UserIcon color={focusedStyle} />;
      case "IdentificationIcon":
        return <IdentificationIcon color={focusedStyle} />;
      case "MagnifyingGlassIcon":
        return <MagnifyingGlassIcon color={focusedStyle} />;
      default:
        return null;
    }
  };

  return <View>{renderIcon(iconName)}</View>;
};

export default TabBarIcon;
