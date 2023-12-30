import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Alert, Platform } from 'react-native';

import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Button,
  DefferedLoading,
  HeaderBackIcon,
  OverlaySpinner,
  Stack,
} from 'app/components/blocks';
import { MODAL_TYPES } from 'app/components/pages/global/Modals/Modals';
import { DEFAULT_RESUME_FORM_DATA } from 'app/constants/Resume';
import { resumeSchemaResolver } from 'app/constants/validation/Resume';
import { useAuth } from 'app/contexts/AuthProvider';
import { useSupabaseClient } from 'app/contexts/SupabaseClientProvider';
import {
  GetResumeByIdDocument,
  GetResumeByIdQuery,
} from 'app/graphql/generated';
import useModals from 'app/hooks/useModals';
import ResumeEditBasicInfoScreen from 'app/screens/Resume/ResumeEditBasicInfoScreen';
import ResumeEditEduCareerScreen from 'app/screens/Resume/ResumeEditEduCareerScreen';
import ResumeEditEtcInfoScreen from 'app/screens/Resume/ResumeEditEtcInfoScreen';
import ResumeEditLanguageScreen from 'app/screens/Resume/ResumeEditLanguageScreen';
import type {
  EtcFormDataType,
  FormDataType,
  LanguageFormDataType,
} from 'app/types/Resume';
import { SupabaseStorage } from 'app/types/Supabase';
import {
  GetStoragePrivateUrlProps,
  getStoragePrivateUrl,
} from 'app/utils/image';
import { supabaseClient } from 'app/utils/supabase';

import { NAV_SCREENS } from '../constants/Routes';

const NativeStack = createNativeStackNavigator();

const ResumeEditNavigator: React.FC = () => {
  const navigation = useNavigation();

  const { userInfo } = useAuth();
  const { supabaseClient } = useSupabaseClient();

  const method = useForm<FormDataType>({
    defaultValues: DEFAULT_RESUME_FORM_DATA,
    mode: 'onChange',
    resolver: resumeSchemaResolver,
  });

  const { openModal, closeModal } = useModals();

  const { data: myResumeData } = useQuery<GetResumeByIdQuery>(
    GetResumeByIdDocument,
    {
      variables: {
        userId: userInfo?.id,
      },
    }
  );

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const resetResumeData = async ({
      resumeData,
    }: {
      resumeData?: GetResumeByIdQuery;
    }) => {
      try {
        setLoading(true);

        const myResume = resumeData?.resumeCollection?.edges?.[0]?.node;

        if (myResume && supabaseClient) {
          const getPrivateUrl = async (props: GetStoragePrivateUrlProps) => {
            if (!!props.pathname) {
              return await getStoragePrivateUrl(supabaseClient)(props);
            }
            return '';
          };

          const parsedEtcInfo = JSON.parse(
            myResume?.etc
          ) as EtcFormDataType['etc'];
          const parsedLanguageInfo = JSON.parse(
            myResume?.language
          ) as LanguageFormDataType['language'];

          const profileImageUri = await getPrivateUrl({
            pathname: parsedEtcInfo.profileImage?.uri || '',
            storageName: SupabaseStorage.resumeProfile,
            transform: {
              width: 103,
              height: 132,
            },
          });

          const attatchmentFileUri = await getPrivateUrl({
            pathname: parsedEtcInfo.attatchmentFile?.uri || '',
            storageName: SupabaseStorage.resumeFile,
            transform: {
              width: 103,
              height: 132,
            },
          });

          method.reset({
            ...myResume,
            education: myResume.education[0],
            career: myResume.career[0],
            etc: {
              profileImage: {
                ...parsedEtcInfo.profileImage,
                uri: profileImageUri,
              },
              attatchmentFile: {
                ...parsedEtcInfo.attatchmentFile,
                uri: attatchmentFileUri,
              },
            },
            language: parsedLanguageInfo,
          });
        }
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    resetResumeData({ resumeData: myResumeData });
  }, [myResumeData]);

  const onPressBackHandle = (isDirty: boolean) => {
    if (isDirty) {
      if (Platform.OS === 'web') {
        openModal(MODAL_TYPES.confirm, {
          title: '저장하지 않고 나가시겠어요?',
          description: `페이지 이탈 시\n저장하지 않은 정보는 잃게 됩니다.`,
          ActionComponent: () => (
            <Stack styles="justify-center" columnGap={8}>
              <Button
                label="취소"
                color="default"
                variant="filled"
                onPress={() => closeModal(MODAL_TYPES.confirm)}
              />
              <Button
                label="나가기"
                color="primary"
                variant="outlined"
                onPress={() => {
                  navigation.goBack();
                  closeModal(MODAL_TYPES.confirm);
                }}
              />
            </Stack>
          ),
          open: true,
          closeModal: () => closeModal(MODAL_TYPES.confirm),
        });
      } else {
        Alert.alert(
          '저장하지 않고 나가시겠어요?',
          '페이지 이탈 시\n저장하지 않은 정보는 잃게 됩니다.',
          [
            {
              text: '취소',
              style: 'cancel',
            },
            { text: '나가기', onPress: () => navigation.goBack() },
          ]
        );
      }
    } else navigation.goBack();
  };

  return (
    <FormProvider {...method}>
      {loading ? (
        <DefferedLoading timedOut={200}>
          <OverlaySpinner />
        </DefferedLoading>
      ) : null}

      <NativeStack.Navigator
        initialRouteName={NAV_SCREENS.ResumeEditBasicInfoScreen}
        screenOptions={{
          headerTitle: '이력서 작성',
          presentation: 'card',
          headerLeft: () => (
            <HeaderBackIcon
              onPress={() => onPressBackHandle(method.formState.isDirty)}
            />
          ),
        }}
      >
        <NativeStack.Screen
          name={NAV_SCREENS.ResumeEditBasicInfoScreen}
          component={ResumeEditBasicInfoScreen}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.ResumeEditEduCareerScreen}
          component={ResumeEditEduCareerScreen}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.ResumeEditLanguageScreen}
          component={ResumeEditLanguageScreen}
        />
        <NativeStack.Screen
          name={NAV_SCREENS.ResumeEditEtcInfoScreen}
          component={ResumeEditEtcInfoScreen}
        />
      </NativeStack.Navigator>
    </FormProvider>
  );
};

export default ResumeEditNavigator;
