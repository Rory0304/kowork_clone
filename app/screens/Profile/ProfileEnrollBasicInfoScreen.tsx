import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import { insertProfileData } from 'app/api/profile';
import { insertVisaHistory } from 'app/api/visaHistory';
import {
  BottomSheet,
  Button,
  CheckBox,
  FormInputBox,
  OverlaySpinner,
  Stack,
  TextDropDownInput,
  TextInput,
} from 'app/components/blocks';
import VisaSelectBox from 'app/components/pages/global/BottomSheetContent/VisaSelectBox';
import CountrySelectBox from 'app/components/pages/resume/CountrySelectBox';
import { VisaStatus } from 'app/constants/VisaDetail';
import { useAuth } from 'app/contexts/AuthProvider';
import { APIStatus } from 'app/types/ApiStatus';
import { GenderType, ResidenceType } from 'app/types/Profile';
import { BasicProfileInfoFormType, ProfileFormType } from 'app/types/Profile';
import {
  convertToFormatDate,
  convertToFormatDateWithComma,
} from 'app/utils/date';
import navigate from 'app/utils/navigationHelper';

const ProfileEnrollBasicInfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const [apiStatus, setApiStatus] = React.useState<APIStatus>('idle');

  const {
    setValue,
    control,
    watch,
    formState: { isValid, dirtyFields },
  } = useFormContext<ProfileFormType>();

  const { userInfo } = useAuth();

  /* Bottom Sheet - Country */
  const countryBottomSheetRef = React.useRef<BottomSheetModal>(null);
  const handleCountryBottomSheetClose = () =>
    countryBottomSheetRef?.current?.close();

  /* Bottom Sheet - Visa */
  const visaBottomSheetRef = React.useRef<BottomSheetModal>(null);
  const handleVisaBottomSheetClose = () => visaBottomSheetRef?.current?.close();

  const isFirstInputFormDirty =
    dirtyFields.name && dirtyFields.gender && dirtyFields.country;

  const handleProfileBasicInfoSave = async ({
    userId,
    basicInfo,
  }: {
    userId: string;
    basicInfo: BasicProfileInfoFormType;
  }) => {
    const convertedBirthDate = convertToFormatDateWithComma(
      basicInfo.birthDate
    );

    return await insertProfileData({
      ...basicInfo,
      userId,
      birthDate: convertedBirthDate,
    });
  };

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
      const convertedVisaFinalDate =
        convertToFormatDateWithComma(visaFinalEntryDate);

      return await insertVisaHistory({
        userId,
        visaStatus,
        visaIssueDate: convertedVisaIssueDate,
        visaFinalEntryDate: convertedVisaFinalDate,
      });
    }
  };

  const handleProfileSave = async ({
    data,
    userId,
  }: {
    data: ProfileFormType;
    userId?: string;
  }) => {
    if (userId) {
      setApiStatus('pending');

      const {
        visaStatus,
        visaFinalEntryDate,
        visaIssueDate,
        name,
        country,
        residence,
        birthDate,
        gender,
        userType,
      } = data;

      Promise.all([
        handleProfileBasicInfoSave({
          userId,
          basicInfo: { name, country, residence, birthDate, gender, userType },
        }),
        handleVisaHistorySave({
          userId,
          visaStatus,
          visaFinalEntryDate,
          visaIssueDate,
        }),
      ])
        .then(res => {
          navigator.openProfileEnrollVisaInfoScreen();
          setApiStatus('resolved');
        })
        .catch(err => {
          console.error(err);
          setApiStatus('rejected');
        });
    }
  };

  return (
    <ScrollView className="flex-1 p-4 mb-2 bg-white">
      {apiStatus === 'pending' ? <OverlaySpinner /> : null}
      <View>
        <FormInputBox
          required
          title="이름"
          InputComponent={
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextInput
                    {...field}
                    placeholder="이름 입력하기"
                    onChange={e => field.onChange(e.nativeEvent.text)}
                  />
                  {Boolean(error?.message) && (
                    <Text className="text-red-400">{error?.message}</Text>
                  )}
                </>
              )}
            />
          }
        />
        <FormInputBox
          required
          title="성별"
          InputComponent={
            <Controller
              name="gender"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <View>
                  <Stack columnGap={8} styles="justify-between">
                    {Object.values(GenderType).map(gender => {
                      const label =
                        gender === 'Male' ? '남자(Male)' : '여자(Female)';

                      return (
                        <View className="shrink basis-1/2">
                          <CheckBox
                            label={label}
                            onPress={() => onChange(gender)}
                            active={value === gender}
                          />
                        </View>
                      );
                    })}
                  </Stack>

                  {Boolean(error?.message) && (
                    <Text className="text-red-400">{error?.message}</Text>
                  )}
                </View>
              )}
            />
          }
        />
        <FormInputBox
          required
          title="국적"
          InputComponent={
            <Controller
              name="country"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TouchableOpacity
                  onPress={() => countryBottomSheetRef?.current?.present()}
                >
                  <TextDropDownInput
                    {...field}
                    error={Boolean(error?.message)}
                    placeholder="국적 입력하기"
                  />
                  {Boolean(error?.message) && (
                    <Text className="text-red-400">{error?.message}</Text>
                  )}
                </TouchableOpacity>
              )}
            />
          }
        />
        {isFirstInputFormDirty ? (
          <View>
            <Text className="text-2xl font-bold underline text-secondary">
              거의 끝나가요!
            </Text>
            <FormInputBox
              required
              title="생년월일"
              InputComponent={
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextInput
                        focusable
                        value={field.value}
                        error={Boolean(error?.message)}
                        onChangeText={value =>
                          field.onChange(convertToFormatDate(value))
                        }
                        placeholder="YYYY / MM / DD"
                        keyboardType="numeric"
                        maxLength={10}
                      />
                      {Boolean(error?.message) && (
                        <Text className="text-red-400">{error?.message}</Text>
                      )}
                    </>
                  )}
                />
              }
            />
            <FormInputBox
              title="현재 거주하는 곳"
              InputComponent={
                <Controller
                  control={control}
                  name="residence"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <Stack direction="row" columnGap={4}>
                      {Object.values(ResidenceType).map((item, index) => {
                        return (
                          <View
                            className="shrink basis-1/2"
                            key={`residence-${index}`}
                          >
                            <CheckBox
                              label={
                                item === 'Domestic'
                                  ? '국내(Domestic)'
                                  : '해외(Abroad)'
                              }
                              active={item === value}
                              onPress={() => onChange(item)}
                            />

                            {Boolean(error?.message) && (
                              <Text className="text-red-400">
                                {error?.message}
                              </Text>
                            )}
                          </View>
                        );
                      })}
                    </Stack>
                  )}
                />
              }
            />
            <FormInputBox
              required
              title="체류자격(비자)"
              InputComponent={
                <Controller
                  name="visaStatus"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TouchableOpacity
                      onPress={() => visaBottomSheetRef?.current?.present()}
                    >
                      <TextDropDownInput
                        {...field}
                        error={Boolean(error?.message)}
                        value={
                          VisaStatus[field.value as keyof typeof VisaStatus]
                        }
                        placeholder="체류자격 입력하기"
                      />
                      {Boolean(error?.message) && (
                        <Text className="text-red-400">{error?.message}</Text>
                      )}
                    </TouchableOpacity>
                  )}
                />
              }
            />
          </View>
        ) : null}
      </View>
      <Stack
        direction="row"
        columnGap={8}
        styles="pt-8 pb-12 bg-white justify-end"
      >
        <Button label="이전" onPress={() => navigation.goBack()} />
        <Button
          disabled={!isValid || apiStatus === 'pending'}
          label="다음"
          variant="filled"
          color="primary"
          onPress={() =>
            handleProfileSave({
              data: watch(),
              userId: userInfo?.id,
            })
          }
        />
      </Stack>
      {/* Country Select  */}
      <BottomSheet
        closeBtn
        ref={countryBottomSheetRef}
        snapPoints={['80%']}
        headerTitle="국적"
        onClose={handleCountryBottomSheetClose}
      >
        <CountrySelectBox
          onPress={value => {
            setValue('country', value, {
              shouldValidate: true,
              shouldDirty: true,
            });
            handleCountryBottomSheetClose();
          }}
        />
      </BottomSheet>
      {/* Visa Select */}
      <BottomSheet
        closeBtn
        ref={visaBottomSheetRef}
        snapPoints={['80%']}
        headerTitle="체류자격(비자)"
        onClose={handleVisaBottomSheetClose}
      >
        <VisaSelectBox
          onPress={visaCode => {
            setValue('visaStatus', visaCode, {
              shouldValidate: true,
              shouldDirty: true,
            });
            handleVisaBottomSheetClose();
          }}
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default ProfileEnrollBasicInfoScreen;
