import React from "react";
import {
  TextInput,
  View,
  ScrollView,
  Text,
  FlatList,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { VisaStatus, VisaCode } from "app/constants/VisaDetail";
import { Controller, useForm } from "react-hook-form";
import {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { gray } from "tailwindcss/colors";
import { checkIsValidDate, convertToFormatDate } from "app/utils/date";

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
  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["80%"], []);

  // Hook form
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MyVisaEnrollState>({
    mode: "onChange",
    defaultValues: {
      visaStatus: undefined,
      visaIssueDate: undefined,
      visaFinalEntryDate: undefined,
    },
  });

  const watchedVisaStatus = watch("visaStatus");

  const renderBackdrop = React.useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
    ) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        pressBehavior={"close"}
      />
    ),
    []
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView className="p-6">
        <View className="py-6">
          <Text className="mb-2 text-base font-bold text-neutral-700">
            체류자격 / Status
          </Text>
          <Pressable onPress={() => bottomSheetRef?.current?.present()}>
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
          </Pressable>
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
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetScrollView>
            <FlatList
              className="p-4 py-6"
              data={
                Object.keys(VisaStatus) as unknown as Array<
                  keyof typeof VisaStatus
                >
              }
              renderItem={({ item }) => (
                <Pressable
                  className="my-3"
                  onPress={() => {
                    setValue("visaStatus", item, { shouldDirty: true });
                    bottomSheetRef.current?.close();
                  }}
                >
                  <Text className="text-base font-semibold text-neutral-600">
                    {VisaStatus[item]}
                  </Text>
                </Pressable>
              )}
            />
          </BottomSheetScrollView>
        </BottomSheetModal>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default MyVisaEnrollScreen;
