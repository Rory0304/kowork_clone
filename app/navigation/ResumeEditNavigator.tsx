import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormProvider, useForm } from "react-hook-form";

import ResumeEditBasicInfoScreen from "app/screens/Resume/ResumeEditBasicInfoScreen";
import ResumeEditEduCareerScreen from "app/screens/Resume/ResumeEditEduCareerScreen";
import ResumeEditLanguageScreen from "app/screens/Resume/ResumeEditLanguageScreen";

import { NAV_SCREENS } from "../constants/Routes";
import type { FormDataType } from "app/types/Resume";
import { yupResolver } from "@hookform/resolvers/yup";
import { RESUME_FORM_SCHEMA } from "app/constants/Resume";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";

const Stack = createNativeStackNavigator();

const ResumeEditNavigator: React.FC = () => {
  const method = useForm<FormDataType>({
    defaultValues: {},
  });

  return (
    <FormProvider {...method}>
      <Stack.Navigator
        initialRouteName={NAV_SCREENS.ResumeEditBasicInfoScreen}
        screenOptions={{
          headerTitle: "이력서 작성",
          presentation: "card",
          headerLeft: () => <XMarkIcon />,
        }}
      >
        <Stack.Screen
          name={NAV_SCREENS.ResumeEditBasicInfoScreen}
          component={ResumeEditBasicInfoScreen}
        />
        <Stack.Screen
          name={NAV_SCREENS.ResumeEditEduCareerScreen}
          component={ResumeEditEduCareerScreen}
        />
        <Stack.Screen
          name={NAV_SCREENS.ResumeEditLanguageScreen}
          component={ResumeEditLanguageScreen}
        />
      </Stack.Navigator>
    </FormProvider>
  );
};

export default ResumeEditNavigator;
