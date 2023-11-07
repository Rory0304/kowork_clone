import React from "react";
import { Text } from "react-native";

import SearchJobScreen from "../screens/SearchJob/SearchJobScreen";
import JobPostDetailScreen from "../screens/JobPostDetail/JobPostDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NAV_SCREENS } from "app/constants/Routes";
import MagnifyingGlassIcon from "react-native-heroicons/outline/MagnifyingGlassIcon";

const Stack = createStackNavigator();

const SearchJobNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAV_SCREENS.SearchJobScreen}
        component={SearchJobScreen}
        options={{
          headerTitleStyle: { display: "none" },
          headerLeft: () => (
            <Text className="text-xl font-bold">일자리 찾기</Text>
          ),
          headerRight: () => <MagnifyingGlassIcon color="text-neutral-400" />,
        }}
      />
      <Stack.Screen
        name={NAV_SCREENS.JobPostDetailScreen}
        component={JobPostDetailScreen}
        options={{
          headerTitleStyle: { display: "none" },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchJobNavigator;
