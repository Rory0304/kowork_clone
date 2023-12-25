import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { ScrollView, View } from 'react-native';

import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidV4 } from 'uuid';

import { Button, OverlaySpinner, Stack } from 'app/components/blocks';
import {
  ProgressStep,
  ResumeFormWrapperTitle,
} from 'app/components/pages/resume';
import {
  AttachmentFileFormSection,
  PortfolioLinkFormSection,
  ProfileImageFormSection,
} from 'app/components/pages/resume';
import { useAuth } from 'app/contexts/AuthProvider';
import { useSupabaseClient } from 'app/contexts/SupabaseClientProvider';
import {
  UpdateResumeByIdDocument,
  UpdateResumeByIdMutation,
  UpdateResumeByIdMutationVariables,
} from 'app/graphql/generated';
import useSnackbars from 'app/hooks/useSnackbars';
import { APIStatus } from 'app/types/ApiStatus';
import { FormDataType } from 'app/types/Resume';
import { SupabaseStorage } from 'app/types/Supabase';
import { uploadDocument } from 'app/utils/document';
import { getErrorMessage } from 'app/utils/error';
import { uploadImage } from 'app/utils/image';
import navigate from 'app/utils/navigationHelper';

const ResumeEditEtcInfoScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const { userInfo } = useAuth();
  const { enqueueSnackbar } = useSnackbars();
  const { supbaseClient } = useSupabaseClient();

  const [apiStatus, setApiStatus] = React.useState<APIStatus>('idle');

  const {
    control,
    watch,
    formState: { isValid },
  } = useFormContext<FormDataType>();

  const profileName = useWatch({ control, name: 'name' });

  const [updateResume] = useMutation<UpdateResumeByIdMutation>(
    UpdateResumeByIdDocument
  );

  const handleResumeSave = async ({
    userId,
    resumeData,
  }: {
    userId?: string;
    resumeData: FormDataType;
  }) => {
    if (userId && supbaseClient) {
      try {
        setApiStatus('pending');

        const attatchmentFilePath = resumeData.etc.attatchmentFile?.file
          ? await uploadDocument(supbaseClient)({
              fileName: resumeData.etc.attatchmentFile.name,
              file: resumeData.etc.attatchmentFile.file,
              storageName: SupabaseStorage.resumeFile,
            })
          : null;

        const profileImagePath = resumeData.etc.profileImage?.base64
          ? await uploadImage(supbaseClient)({
              fileName: resumeData.etc.profileImage.name,
              base64: resumeData.etc.profileImage.base64,
              fileType: resumeData.etc.profileImage.type,
              storageName: SupabaseStorage.resumeProfile,
            })
          : null;

        const configuredResumeData: UpdateResumeByIdMutationVariables = {
          ...resumeData,
          career: JSON.stringify(resumeData.career),
          education: JSON.stringify(resumeData.education),
          language: JSON.stringify(resumeData.language),
          etc: JSON.stringify({
            profileImage: {
              name: resumeData.etc.profileImage?.name,
              type: resumeData.etc.profileImage?.type,
              uri: profileImagePath,
            },
            attatchmentFile: {
              name: resumeData.etc.attatchmentFile?.file?.name,
              type: resumeData.etc.attatchmentFile?.type,
              uri: attatchmentFilePath,
            },
          }),
        };

        await updateResume({
          variables: configuredResumeData,
        }).then(res => {
          if (res.data) {
            setApiStatus('resolved');
            enqueueSnackbar({
              message: '성공적으로 이력서를 저장했습니다.',
              variant: 'success',
              duration: 500,
            });
            navigator.openMyPageScreen();
          } else {
            throw new Error('이력서 저장에 실패했습니다. 다시 시도해주세요');
          }
        });
      } catch (error) {
        setApiStatus('rejected');
        enqueueSnackbar({
          message: getErrorMessage(error),
          variant: 'error',
          duration: 500,
        });
      } finally {
        setApiStatus('idle');
      }
    }
  };

  return (
    <ScrollView className="flex-1 relative" stickyHeaderIndices={[0]}>
      <ProgressStep currentStepIdx={3} />
      <ResumeFormWrapperTitle title="기타정보" step={4} />
      <View>
        <ProfileImageFormSection />
        <AttachmentFileFormSection />
        <PortfolioLinkFormSection />
      </View>
      <Stack columnGap={8} styles="px-4 pb-24 bg-white justify-end">
        <Button
          label="이전"
          variant="default"
          onPress={() => navigation.goBack()}
        />
        <Button
          disabled={!isValid}
          label="완료"
          variant="filled"
          color="primary"
          onPress={() =>
            handleResumeSave({ userId: userInfo?.id, resumeData: watch() })
          }
        />
      </Stack>
      {apiStatus === 'pending' ? <OverlaySpinner /> : null}
    </ScrollView>
  );
};

export default ResumeEditEtcInfoScreen;
