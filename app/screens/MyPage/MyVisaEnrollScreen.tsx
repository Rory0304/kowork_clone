import React from "react";
import {
  TextInput,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { VisaStatus, VisaCode } from "app/constants/VisaDetail";
import { Controller, useForm } from "react-hook-form";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheet } from "app/components/blocks";
import { gray } from "tailwindcss/colors";
import { checkIsValidDate, convertToFormatDate } from "app/utils/date";
import { updateVisaHistory } from "app/api/visaHistory";
import { useAuth } from "app/contexts/AuthProvider";
import { useNavigation } from "@react-navigation/native";

interface MyVisaEnrollState {
  visaStatus?: VisaCode;
  visaIssueDate?: string;
  visaFinalEntryDate?: string;
}

interface ActionType {
  type: "SET_VISA_FINAL_ENTRY_DATE" | "SET_VISA_ISSUE_DATE" | "SET_VISA_STATUS";
  payload: MyVisaEnrollState;
}

function myVisaEnrollReducer(
  state: MyVisaEnrollState,
  action: ActionType
): MyVisaEnrollState {
  switch (action.type) {
    case "SET_VISA_FINAL_ENTRY_DATE":
      return {
        ...state,
        visaFinalEntryDate: action.payload.visaFinalEntryDate,
      };

    case "SET_VISA_ISSUE_DATE":
      return { ...state, visaIssueDate: action.payload.visaIssueDate };

    case "SET_VISA_STATUS":
      return {
        ...state,
        visaStatus: action.payload.visaStatus,
      };

    default:
      return state;
  }
}

const MyVisaEnrollScreen: React.FC = () => {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const handleBottomSheetClose = () => bottomSheetRef?.current?.close();

  // Hook form
  const {
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<MyVisaEnrollState>({
    mode: "onChange",
    defaultValues: {
      visaStatus: undefined,
      visaIssueDate: undefined,
      visaFinalEntryDate: undefined,
    },
  });

  const watchedVisaStatus = watch("visaStatus");
  const watchedVisaFinalEntryDate = watch("visaFinalEntryDate");
  const watchedVisaIssueDate = watch("visaIssueDate");

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          disabled={!isValid}
          onPress={() =>
            handleVisaHistorySave(
              watchedVisaFinalEntryDate,
              watchedVisaIssueDate,
              watchedVisaStatus,
              userInfo?.id
            )
          }
        >
          <Text
            className={`font-bold text-base ${
              isValid ? "text-primary" : "text-secondary"
            }`}
          >
            저장
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isValid]);

  const handleVisaHistorySave = async (
    visaFinalEntryDate?: string,
    visaIssueDate?: string,
    visaStatus?: string,
    userId?: string
  ) => {
    if (userId && visaFinalEntryDate && visaIssueDate && visaStatus) {
      console.log("update");
      await updateVisaHistory({
        userId,
        visaStatus,
        visaIssueDate: new Date(visaIssueDate),
        visaFinalEntryDate: new Date(visaFinalEntryDate),
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView className="px-4">
        <View className="py-6">
          <Text className="mb-2 text-base font-bold text-neutral-700">
            체류자격 / Status
          </Text>
          <TouchableOpacity onPress={() => bottomSheetRef?.current?.present()}>
            <View className="p-4 bg-gray-200 border border-gray-300 rounded-xl">
              <Text
                className={`text-base font-medium ${
                  watchedVisaStatus ? "" : "text-gray-400"
                }`}
              >
                {watchedVisaStatus
                  ? VisaStatus[watchedVisaStatus]
                  : "체류자격 입력하기"}
              </Text>
            </View>
          </TouchableOpacity>
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
                  focusable
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
            rules={{
              validate: (value) => {
                const formattedDate = value?.replace(/\D/g, "");

                const year = Number(formattedDate?.substring(0, 4));
                const month = Number(formattedDate?.substring(4, 6));
                const day = Number(formattedDate?.substring(6, 8));

                if (!checkIsValidDate(year, month, day)) {
                  return "Invalid date";
                }

                return true;
              },
            }}
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
                  <Text className="text-red-400">
                    {fieldState.error.message}
                  </Text>
                )}
              </>
            )}
            rules={{
              validate: (value) => {
                const formattedDate = value?.replace(/\D/g, "");

                const year = Number(formattedDate?.substring(0, 4));
                const month = Number(formattedDate?.substring(4, 6));
                const day = Number(formattedDate?.substring(6, 8));

                if (!checkIsValidDate(year, month, day)) {
                  return "Invalid date";
                }

                return true;
              },
            }}
          />
        </View>
        <BottomSheet
          closeBtn
          ref={bottomSheetRef}
          snapPoints={["80%"]}
          headerTitle=""
          onClose={handleBottomSheetClose}
        >
          <FlatList
            scrollEnabled={false}
            className="p-4 py-6"
            data={
              Object.keys(VisaStatus) as unknown as Array<
                keyof typeof VisaStatus
              >
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                className="my-3"
                onPress={() => {
                  setValue("visaStatus", item, { shouldDirty: true });
                  bottomSheetRef.current?.close();
                }}
              >
                <Text className="text-base font-semibold text-neutral-600">
                  {VisaStatus[item]}
                </Text>
              </TouchableOpacity>
            )}
          />
        </BottomSheet>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default MyVisaEnrollScreen;
