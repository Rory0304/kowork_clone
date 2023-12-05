import React from "react";
import {
  TextInput,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { gray } from "tailwindcss/colors";
import { Stack, Button } from "app/components/blocks";
import { updateVisaHistory } from "app/api/visaHistory";
import { useAuth } from "app/contexts/AuthProvider";
import navigate from "app/utils/navigationHelper";
import { useNavigation } from "@react-navigation/native";
import { ProfileFormType } from "app/types/Profile";

import {
  convertToFormatDateWithComma,
  convertToFormatDate,
} from "app/utils/date";

const ProfileEnrollVisaInfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { userInfo } = useAuth();

  const {
    control,
    watch,
    formState: { isValid },
  } = useFormContext<ProfileFormType>();

  const handleUpdateVisaHistory = async ({
    userId,
    data,
  }: {
    userId?: string;
    data: ProfileFormType;
  }) => {
    const { visaStatus, visaFinalEntryDate, visaIssueDate } = data;

    if (userId && visaFinalEntryDate && visaIssueDate) {
      const convertedVisaFinalEntryDate =
        convertToFormatDateWithComma(visaFinalEntryDate);
      const convertedVisaIssueDate =
        convertToFormatDateWithComma(visaFinalEntryDate);
      visaIssueDate;

      await updateVisaHistory({
        userId: userId,
        visaStatus: visaStatus,
        visaFinalEntryDate: convertedVisaFinalEntryDate,
        visaIssueDate: convertedVisaIssueDate,
      });
    }
  };
  return (
    <ScrollView className="px-4 bg-white">
      <Text className="py-4 text-secondary">
        추가된 비자 데이터를 바탕으로 비자 만료일 알람을 보내드려요!
      </Text>
      <View className="px-4">
        <Stack direction="column" styles="w-fit py-4 m-auto">
          <Text className="mb-2 font-medium text-secondary">
            입국만료일 / Final Entry Date
          </Text>
          <Stack styles="w-full items-center">
            <Text className="mr-3 font-bold">2024/03/03</Text>
            <Text className="p-1 text-white rounded bg-danger">D-60</Text>
          </Stack>
        </Stack>
        <Stack styles="p-4 items-center rounded-lg shadow-lg">
          <View className="w-4 h-4 p-2 mr-3 text-sm font-bold bg-danger rouned-md"></View>
          <View>
            <Text className="text-md">Your visa is expired in 60 dayrs</Text>
            <Text className="text-sm text-secondary">Today</Text>
          </View>
        </Stack>
      </View>
      <View className="py-6">
        <Text className="mb-2 text-base font-bold text-neutral-700">
          발급일 / Issue Date
        </Text>
        <Controller
          name="visaIssueDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextInput
                value={field.value}
                className={`p-4 text-base font-medium bg-gray-200 border border-gray-300 rounded-xl ${
                  error ? "border-red-500" : "focus:border-primary"
                }`}
                placeholderTextColor={gray[400]}
                onChangeText={(value) =>
                  field.onChange(convertToFormatDate(value))
                }
                placeholder="YYYY / MM / DD"
                keyboardType="numeric"
                maxLength={10}
              />
              {error && <Text className="text-red-400">{error.message}</Text>}
            </>
          )}
        />
      </View>
      <View className="py-6">
        <Text className="mb-2 text-base font-bold text-neutral-700">
          입국 만료일 / Final Entry Date
        </Text>
        <Controller
          name="visaFinalEntryDate"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <TextInput
                className="p-4 bg-gray-200 border border-gray-300 tfont-medium ext-base rounded-xl"
                placeholderTextColor={gray[400]}
                onChangeText={(value) =>
                  field.onChange(convertToFormatDate(value))
                }
                value={field.value}
                placeholder="YYYY / MM / DD"
                keyboardType="numeric"
                maxLength={10}
              />
              {fieldState.error && (
                <Text className="text-red-400">{fieldState.error.message}</Text>
              )}
            </>
          )}
        />
      </View>
      <View>
        <Button
          isFullWidth
          label="다음"
          variant="filled"
          color="primary"
          disabeld={!isValid}
          onPress={() =>
            handleUpdateVisaHistory({
              userId: userInfo?.id,
              data: watch(),
            })
          }
        />
        <TouchableOpacity onPress={() => navigator.openMainScreen()}>
          <Text className="mt-2 text-center">다음에 입력할게요</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileEnrollVisaInfoScreen;
