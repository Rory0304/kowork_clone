import * as ImagePicker from "expo-image-picker";
import { decode } from "base64-arraybuffer";
import { SupabaseClient } from "@supabase/supabase-js";
import { SupabaseStorage } from "app/types/Supabase";

export const pickImage = async (props?: ImagePicker.ImagePickerOptions) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    ...props,
  });

  if (!result.canceled) {
    return result.assets[0];
  }

  return null;
};

export interface GetStoragePrivateUrlProps {
  storageName: SupabaseStorage;
  pathname: string;
  expiresIn?: number;
  transform?: {
    width: number;
    height: number;
  };
}

export const getStoragePrivateUrl =
  (supabaseClient: SupabaseClient) =>
  async ({
    storageName,
    pathname,
    expiresIn = 70560,
    transform,
  }: GetStoragePrivateUrlProps) => {
    const { data } = await supabaseClient.storage
      .from(storageName)
      .createSignedUrl(pathname, expiresIn, { transform });

    return data?.signedUrl;
  };

export const getStoragePublicUrl =
  (supabaseClient: SupabaseClient) =>
  ({
    pathname,
    storageName,
  }: {
    pathname: string;
    storageName: SupabaseStorage;
  }) => {
    const { data } = supabaseClient.storage
      .from(storageName)
      .getPublicUrl(pathname);

    return data.publicUrl;
  };

export const uploadImage =
  (supabaseClient: SupabaseClient) =>
  async ({
    fileName,
    fileType,
    base64,
    storageName,
  }: {
    fileName: string;
    fileType: string;
    base64: string;
    storageName: SupabaseStorage;
  }) => {
    // File naming convention in supabase storage
    // ref: https://github.com/supabase/storage/issues/133#issuecomment-1098845258
    const { data, error } = await supabaseClient.storage
      .from(storageName)
      .upload(fileName, decode(base64), {
        contentType: `image/${fileType}`,
        upsert: true,
      });

    if (error) {
      throw new Error("fail to upload image");
    }

    return data.path;
  };

export const getImageFormatFromDataUri = (dataUri: string) => {
  const match = dataUri.match(/^data:image\/([a-z]+);base64,/i);

  return match ? match[1] : "png";
};
