import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ResumeFormSectionTitle } from "./layout";
import PaperClipIcon from "react-native-heroicons/solid/PaperClipIcon";
import TrashIcon from "react-native-heroicons/solid/TrashIcon";
import DocumentTextIcon from "react-native-heroicons/solid/DocumentTextIcon";
import { customColors } from "app/constants/styles/Colors";
import { Button, Stack } from "app/components/blocks";
import { pickDocument } from "app/utils/document";
import { getFileSizeFromURI, isFileSizeExceeded } from "app/utils/file";
import { getErrorMessage } from "app/utils/error";
import { useWatch, useFormContext } from "react-hook-form";
import { useAuth } from "app/contexts/AuthProvider";
import useSnackbars from "app/hooks/useSnackbars";

import type { AttatchmentFileType, FormDataType } from "app/types/Resume";
import { getImageFormatFromDataUri } from "app/utils/image";

const AttachmentFileFormSection: React.FC = () => {
  const [document, setDocument] = React.useState<AttatchmentFileType | null>();

  const { userInfo } = useAuth();
  const { enqueueSnackbar } = useSnackbars();
  const { control, setValue } = useFormContext<FormDataType>();

  const profileName = useWatch({ control, name: "name" });
  const attatchmentFile = useWatch({
    name: "etc.attatchmentFile",
  });

  React.useEffect(() => {
    setDocument(attatchmentFile);
  }, [attatchmentFile]);

  const handleDocumentFilePick = React.useCallback(async () => {
    try {
      const result = await pickDocument({
        type: ["application/pdf", "image/png", "image/jpeg"],
      });

      if (result) {
        const fileSize = await getFileSizeFromURI(result.uri);
        if (fileSize) {
          if (isFileSizeExceeded(fileSize, 30 * 1024 * 1024)) {
            throw new Error("30MB 이하 파일만 가능해요");
          } else {
            const documentFormat = getImageFormatFromDataUri(result.uri);

            const configuredDocument = {
              name: `${userInfo?.id}-file.${documentFormat}`,
              type: documentFormat,
              uri: result.uri,
              file: result.file,
            };

            setValue("etc.attatchmentFile", configuredDocument, {
              shouldDirty: true,
            });
            setDocument(configuredDocument);
          }
        } else {
          throw new Error("파일 업로드에 실패했습니다. 다시 시도해주세요");
        }
      }
    } catch (error) {
      enqueueSnackbar({
        message: getErrorMessage(error),
        variant: "error",
      });
    }
  }, []);

  const renderPreviewDocument = (document: AttatchmentFileType) => {
    return (
      <Stack
        direction="row"
        styles="justify-between items-center bg-neutral-100 rounded-lg p-6"
      >
        <Stack direction="row" styles="items-center">
          <DocumentTextIcon width={24} fill={customColors.gray[500]} />
          <Text>{document.name}</Text>
        </Stack>
        <View>
          <TouchableOpacity
            onPress={() => {
              setValue("etc.attatchmentFile", undefined, { shouldDirty: true });
              setDocument(null);
            }}
          >
            <TrashIcon width={24} height={24} fill={customColors.danger} />
          </TouchableOpacity>
        </View>
      </Stack>
    );
  };

  return (
    <View className="mb-2 bg-white">
      <View className="border-b border-neutral-300">
        <ResumeFormSectionTitle title="기타" label="선택사항" />
        <Text className="p-4 text-secondary font-medium text-base">
          파일은 1개까지만 업로드 가능해요.
        </Text>
      </View>
      <View className="p-4">
        {document ? (
          renderPreviewDocument(document)
        ) : (
          <Button
            isFullWidth
            variant="dashed"
            color="primary"
            label="파일 업로드"
            Icon={
              <PaperClipIcon
                width={24}
                fill={customColors.primary}
                size="large"
              />
            }
            onPress={handleDocumentFilePick}
          />
        )}
        <View className="py-4">
          <Text className="text-center text-neutral-500 font-medium">
            jpg, jpeg, png, pdf (30MB 이하)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AttachmentFileFormSection;
