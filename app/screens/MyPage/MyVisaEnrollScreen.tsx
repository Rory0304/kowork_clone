import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useMutation } from '@apollo/client';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { gray } from 'tailwindcss/colors';

import { BottomSheet } from 'app/components/blocks';
import { VisaCode, VisaStatus } from 'app/constants/VisaDetail';
import { visaEnrollSchemaResolver } from 'app/constants/validation/VisaEnroll';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  InsertVisaEnrolLHistoryDocument,
  InsertVisaEnrolLHistoryMutation,
} from 'app/graphql/generated';
import type { VisaHistoryType } from 'app/types/VisaHistory';
import {
  convertToFormatDate,
  convertToFormatDateWithComma,
} from 'app/utils/date';
import navigate from 'app/utils/navigationHelper';

interface MyVisaEnrollState {
  visaStatus: VisaCode;
  visaIssueDate: string;
  visaFinalEntryDate: string;
}

type VisaHistoryParamList = {
  params: {
    visaHistory: VisaHistoryType;
  };
};

const MyVisaEnrollScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { userInfo } = useAuth();

  const {
    params: { visaHistory },
  } = useRoute<RouteProp<VisaHistoryParamList, 'params'>>();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const handleBottomSheetClose = () => bottomSheetRef?.current?.close();

  // React Hook Form
  const {
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<MyVisaEnrollState>({
    mode: 'onChange',
    defaultValues: {
      ...(visaHistory && {
        visaStatus: visaHistory.visaStatus as VisaCode,
        visaIssueDate: visaHistory.visaIssueDate,
        visaFinalEntryDate: visaHistory.visaFinalEntryDate,
      }),
    },
    resolver: visaEnrollSchemaResolver,
  });

  // 비자 등록
  const [insertVisaHistory, { loading, error }] =
    useMutation<InsertVisaEnrolLHistoryMutation>(
      InsertVisaEnrolLHistoryDocument
    );

  const watchedVisaStatus = watch('visaStatus');

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          disabled={!isValid}
          onPress={() =>
            handleVisaHistorySave({
              userId: userInfo?.id,
              visaStatus: watchedVisaStatus,
              visaIssueDate: watch('visaFinalEntryDate'),
              visaFinalEntryDate: watch('visaIssueDate'),
            })
          }
        >
          <Text
            className={`m-4 font-bold text-base ${
              isValid ? 'text-primary' : 'text-secondary'
            }`}
          >
            저장
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isValid]);

  const handleVisaHistorySave = async ({
    visaFinalEntryDate,
    visaIssueDate,
    visaStatus,
    userId,
  }: {
    visaFinalEntryDate?: string;
    visaIssueDate?: string;
    visaStatus?: string;
    userId?: string;
  }) => {
    if (userId && visaFinalEntryDate && visaIssueDate && visaStatus) {
      const convertedVisaIssueDate =
        convertToFormatDateWithComma(visaIssueDate);
      const convertedVisaFinalEntryDate =
        convertToFormatDateWithComma(visaFinalEntryDate);

      await insertVisaHistory({
        variables: {
          userId,
          visaStatus,
          visaFinalEntryDate: convertedVisaFinalEntryDate,
          visaIssueDate: convertedVisaIssueDate,
        },
      }).then(res => {
        if (res.data && !res.errors) {
          return navigator.openMyPageScreen();
        }
      });
    }
  };

  return (
    <ScrollView className="px-4 bg-white">
      <View className="py-6">
        <Text className="mb-2 text-base font-bold text-neutral-700">
          체류자격 / Status
        </Text>
        <TouchableOpacity onPress={() => bottomSheetRef?.current?.present()}>
          <View className="p-4 bg-gray-200 border border-gray-300 rounded-xl">
            <Text
              className={`text-base font-medium ${
                watchedVisaStatus ? '' : 'text-gray-400'
              }`}
            >
              {watchedVisaStatus
                ? VisaStatus[watchedVisaStatus]
                : '체류자격 입력하기'}
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
                {...field}
                className={`p-4 font-medium bg-gray-200 border border-gray-300 rounded-xl ${
                  error ? 'border-red-500' : 'focus:border-primary'
                }`}
                placeholderTextColor={gray[400]}
                onChangeText={value =>
                  field.onChange(convertToFormatDate(value))
                }
                placeholder="YYYY / MM / DD"
                keyboardType="numeric"
                maxLength={10}
                style={{
                  fontSize: 16,
                }}
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
          render={({ field, fieldState: { error } }) => (
            <View>
              <TextInput
                {...field}
                className={`p-4 font-medium bg-gray-200 border border-gray-300 rounded-xl ${
                  error ? 'border-red-500' : 'focus:border-primary'
                }`}
                placeholderTextColor={gray[400]}
                onChangeText={value =>
                  field.onChange(convertToFormatDate(value))
                }
                placeholder="YYYY / MM / DD"
                keyboardType="numeric"
                maxLength={10}
                style={{
                  fontSize: 16,
                }}
              />
              {error && <Text className="text-red-400">{error.message}</Text>}
            </View>
          )}
        />
      </View>
      <BottomSheet
        closeBtn
        ref={bottomSheetRef}
        snapPoints={['80%']}
        headerTitle=""
        onClose={handleBottomSheetClose}
      >
        <FlatList
          className="p-4 py-6"
          data={
            Object.keys(VisaStatus).filter(
              item => item !== VisaCode.NA
            ) as unknown as Array<keyof typeof VisaStatus>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              className="my-3"
              onPress={() => {
                setValue('visaStatus', item, { shouldDirty: true });
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
  );
};

export default MyVisaEnrollScreen;
