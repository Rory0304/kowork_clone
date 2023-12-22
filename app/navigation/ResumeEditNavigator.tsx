import React from "react";
import { Alert, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useAuth } from "app/contexts/AuthProvider";
import { useQuery } from "@apollo/client";

import ResumeEditBasicInfoScreen from "app/screens/Resume/ResumeEditBasicInfoScreen";
import ResumeEditEduCareerScreen from "app/screens/Resume/ResumeEditEduCareerScreen";
import ResumeEditLanguageScreen from "app/screens/Resume/ResumeEditLanguageScreen";
import ResumeEditEtcInfoScreen from "app/screens/Resume/ResumeEditEtcInfoScreen";

import { HeaderBackIcon, Stack, Button } from "app/components/blocks";
import { NAV_SCREENS } from "../constants/Routes";
import { DEFAULT_RESUME_FORM_DATA } from "app/constants/Resume";
import type {
  EtcFormDataType,
  FormDataType,
  LanguageFormDataType,
} from "app/types/Resume";
import { useNavigation } from "@react-navigation/native";
import { resumeSchemaResolver } from "app/constants/validation/Resume";
import useModals from "app/hooks/useModals";
import { MODAL_TYPES } from "app/components/pages/global/Modals/Modals";

import {
  GetResumeByIdDocument,
  GetResumeByIdQuery,
} from "app/graphql/generated";
import {
  getStoragePrivateUrl,
  GetStoragePrivateUrlProps,
} from "app/utils/image";
import { useSupabaseClient } from "app/contexts/SupabaseClientProvider";
import { SupabaseStorage } from "app/types/Supabase";
import { supabaseClient } from "app/utils/supabase";

const NativeStack = createNativeStackNavigator();

const ResumeEditNavigator: React.FC = () => {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  const { supbaseClient } = useSupabaseClient();

  const method = useForm<FormDataType>({
    defaultValues: DEFAULT_RESUME_FORM_DATA,
    mode: "onChange",
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

  React.useEffect(() => {
    const resetResumeData = async ({
      resumeData,
    }: {
      resumeData?: GetResumeByIdQuery;
    }) => {
      const myResume = resumeData?.resumeCollection?.edges?.[0]?.node;

      if (myResume && supbaseClient) {
        const getPrivateUrl = async (props: GetStoragePrivateUrlProps) => {
          if (!!props.pathname) {
            return await getStoragePrivateUrl(supabaseClient)(props);
          }
          return "";
        };

        const parsedEtcInfo = JSON.parse(
          myResume?.etc
        ) as EtcFormDataType["etc"];
        const parsedLanguageInfo = JSON.parse(
          myResume?.language
        ) as LanguageFormDataType["language"];

        const profileImageUri = await getPrivateUrl({
          pathname: parsedEtcInfo.profileImage?.uri || "",
          storageName: SupabaseStorage.resumeProfile,
          transform: {
            width: 103,
            height: 132,
          },
        });

        const attatchmentFileUri = await getPrivateUrl({
          pathname: parsedEtcInfo.attatchmentFile?.uri || "",
          storageName: SupabaseStorage.resumeFile,
          transform: {
            width: 103,
            height: 132,
          },
        });

        method.reset({
          ...myResume,
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
    };

    resetResumeData({ resumeData: myResumeData });
  }, [myResumeData]);

  const onPressBackHandle = (isDirty: boolean) => {
    if (isDirty) {
      if (Platform.OS === "web") {
        openModal(MODAL_TYPES.confirm, {
          title: "저장하지 않고 나가시겠어요?",
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
          "저장하지 않고 나가시겠어요?",
          "페이지 이탈 시\n저장하지 않은 정보는 잃게 됩니다.",
          [
            {
              text: "취소",
              style: "cancel",
            },
            { text: "나가기", onPress: () => navigation.goBack() },
          ]
        );
      }
    } else navigation.goBack();
  };

  return (
    <FormProvider {...method}>
      <NativeStack.Navigator
        initialRouteName={NAV_SCREENS.ResumeEditBasicInfoScreen}
        screenOptions={{
          headerTitle: "이력서 작성",
          presentation: "card",
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
