import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Stack, Button } from "app/components/blocks";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import UserIcon from "react-native-heroicons/solid/UserIcon";
import { customColors } from "app/constants/styles/Colors";
import { useFormContext } from "react-hook-form";
import { ProfileFormType } from "app/types/Profile";

type UserType = "employee" | "employer";

const ProfileEnrollUserTypeScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { watch, setValue } = useFormContext<ProfileFormType>();
  const watchedUserType = watch("userType");

  return (
    <View className="items-center justify-center flex-1 w-full px-4">
      <Stack direction="column" styles="items-center justify-center w-full">
        <Text className="mb-1 text-base font-medium text-secondary">
          유형에 따른 정보를 제공해드려요!
        </Text>
        <Text className="text-xl font-bold">회원님의 유형을 선택해주세요</Text>
        <TouchableOpacity
          onPress={() =>
            setValue("userType", "employee", {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
        >
          <Stack
            direction="column"
            styles={`my-12 items-center justify-center py-8 ${
              watchedUserType === "employee"
                ? "border border-primary bg-blue-100"
                : "bg-gray-200"
            } px-4 rounded-xl`}
          >
            <UserIcon
              width={32}
              height={32}
              color={
                watchedUserType === "employee"
                  ? customColors.primary
                  : customColors.neutral[600]
              }
            />
            <Text
              className={`my-3 text-lg font-extrabold text-center ${
                watchedUserType === "employee"
                  ? "text-primary"
                  : "text-neutral-600"
              }`}
            >
              구직자 입니다.
            </Text>
            <Text
              className={`text-center ${
                watchedUserType === "employee"
                  ? "text-primary"
                  : "text-neutral-600"
              }`}
            >{`한국에서\n취업하길 원해요`}</Text>
          </Stack>
        </TouchableOpacity>
        <View className="w-full">
          <Button
            isFullWidth
            color="primary"
            label="다음"
            variant="filled"
            size="large"
            disabeld={watchedUserType !== "employee"}
            onPress={() => navigator.openProfileEnrollBasicInfoScreen()}
          />
        </View>
      </Stack>
    </View>
  );
};

export default ProfileEnrollUserTypeScreen;
