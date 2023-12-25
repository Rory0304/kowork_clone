import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ResumeFormSectionTitle } from "./layout";
import { customColors } from "app/constants/styles/Colors";
import { Button } from "app/components/blocks";
import { getImageFormatFromDataUri, pickImage } from "app/utils/image";
import { getFileSizeFromURI, isFileSizeExceeded } from "app/utils/file";
import { getErrorMessage } from "app/utils/error";
import { useFormContext, useWatch } from "react-hook-form";
import XCircleIcon from "react-native-heroicons/solid/XCircleIcon";
import PhotoIcon from "react-native-heroicons/solid/PhotoIcon";

import type { ProfileImageType, FormDataType } from "app/types/Resume";
import useSnackbars from "app/hooks/useSnackbars";
import { useAuth } from "app/contexts/AuthProvider";

const ProfileImageFormSection: React.FC = () => {
  const { userInfo } = useAuth();
  const { enqueueSnackbar } = useSnackbars();
  const { setValue, watch } = useFormContext<FormDataType>();

  const [image, setImage] = React.useState<ProfileImageType | null>();

  const profileName = useWatch({ name: "name" });
  const profileImage = useWatch({ name: "etc.profileImage" });

  React.useEffect(() => {
    setImage(profileImage);
  }, [profileImage]);

  //
  //
  //
  const handleProfileImagePick = React.useCallback(async () => {
    try {
      const result = await pickImage({
        allowsEditing: true,
        quality: 1,
        base64: true,
        aspect: [103, 132],
      });

      if (result) {
        const fileSize = await getFileSizeFromURI(result.uri);
        if (fileSize) {
          if (isFileSizeExceeded(fileSize)) {
            throw new Error("5MB 이하 사진만 가능해요");
          } else {
            const imgFormat = getImageFormatFromDataUri(result.uri);

            const configuredImageData = {
              name: `${userInfo?.id}-profile.${imgFormat}`,
              type: imgFormat,
              uri: result.uri,
              base64: result.base64 || undefined,
            };

            setValue("etc.profileImage", configuredImageData, {
              shouldDirty: true,
            });
            setImage(configuredImageData);
          }
        } else {
          throw new Error("사진 업로드에 실패했습니다. 다시 시도해주세요");
        }
      }
    } catch (error) {
      enqueueSnackbar({
        message: getErrorMessage(error),
        variant: "error",
        duration: 500,
      });
    }
  }, []);

  //
  //
  //
  const renderPrivewImage = (image: ProfileImageType) => {
    return (
      <View className="flex justify-center flex-row">
        <View className="relative items-center">
          <Image
            source={{ uri: image.uri }}
            style={{ width: 103, height: 132 }}
          />
          <Text>{image.name}</Text>
          <View className="absolute right-[-5px] top-[-5px]">
            <TouchableOpacity
              onPress={() => {
                setValue("etc.profileImage", undefined, {
                  shouldDirty: true,
                });
                setImage(null);
              }}
            >
              <XCircleIcon
                width={24}
                height={24}
                fill={customColors.gray[300]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="mb-2 bg-white">
      <View className="border-b border-neutral-300">
        <ResumeFormSectionTitle title="사진" label="선택사항" />
        <Text className="p-4 text-secondary font-medium text-base">
          정면으로 보이는 얼굴 사진을 등록해주세요.
        </Text>
      </View>
      <View className="p-4 flex justify-center">
        {image?.uri ? (
          renderPrivewImage(image)
        ) : (
          <Button
            isFullWidth
            variant="dashed"
            color="primary"
            label="사진 업로드"
            Icon={
              <PhotoIcon width={24} fill={customColors.primary} size="large" />
            }
            onPress={handleProfileImagePick}
          />
        )}
        <View className="py-4">
          <Text className="text-center text-secondary">
            권장규격: 103 X 132
          </Text>
          <Text className="text-center text-neutral-500 font-medium">
            jpg, jpeg, png (5MB 이하)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileImageFormSection;
