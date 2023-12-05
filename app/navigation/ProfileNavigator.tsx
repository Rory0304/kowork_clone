import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAV_SCREENS } from "../constants/Routes";
import ProfileEnrollUserTypeScreen from "app/screens/Profile/ProfileEnrollUserTypeScreen";
import ProfileEnrollBasicInfoScreen from "app/screens/Profile/ProfileEnrollBasicInfoScreen";
import ProfileEnrollVisaInfoScreen from "app/screens/Profile/ProfileEnrollVisaInfoScreen";
import { ProfileFormType } from "app/types/Profile";
import { profileSchemaResolver } from "app/constants/validation/Profile";

export type NativeStackParamList = {
  ProfileEnrollUserTypeScreen: undefined;
  ProfileEnrollBasicInfoScreen: undefined;
  ProfileEnrollVisaInfoScreen: undefined;
};

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

const ProfileNavigator: React.FC = () => {
  const method = useForm<ProfileFormType>({
    defaultValues: {},
    resolver: profileSchemaResolver,
  });

  return (
    <FormProvider {...method}>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name={NAV_SCREENS.ProfileEnrollUserTypeScreen}
          component={ProfileEnrollUserTypeScreen}
          options={{
            presentation: "fullScreenModal",
            headerBackVisible: true,
            headerTitle: "회원 구분",
          }}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.ProfileEnrollBasicInfoScreen}
          component={ProfileEnrollBasicInfoScreen}
          options={{
            headerBackVisible: true,
            headerTitle: "프로필 설정",
          }}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.ProfileEnrollVisaInfoScreen}
          component={ProfileEnrollVisaInfoScreen}
          options={{
            headerBackVisible: true,
            headerTitle: "비자 정보입력",
          }}
        />
      </NativeStack.Navigator>
    </FormProvider>
  );
};

export default ProfileNavigator;
