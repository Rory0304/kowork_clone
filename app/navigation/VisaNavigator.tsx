import React from "react";
import VisaScreen from "../screens/Visa/VisaScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NAV_SCREENS } from "app/constants/Routes";

const Stack = createStackNavigator();

const VisaNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={NAV_SCREENS.VisaScreen}
      screenOptions={{
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen name={NAV_SCREENS.VisaScreen} component={VisaScreen} />
    </Stack.Navigator>
  );
};

export default VisaNavigator;
