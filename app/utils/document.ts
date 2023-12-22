import * as DocumentPicker from "expo-document-picker";
import { SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseStorage } from "app/types/Supabase";

export const pickDocument = async (
  props?: DocumentPicker.DocumentPickerOptions
) => {
  const result = await DocumentPicker.getDocumentAsync(props);

  if (!result.canceled) {
    return result.assets[0];
  }

  return null;
};

export const uploadDocument =
  (supabaseClient: SupabaseClient) =>
  async ({
    fileName,
    file,
    storageName,
  }: {
    fileName: string;
    file: File;
    storageName: SupabaseStorage;
  }) => {
    // File naming convention in supabase storage
    // ref: https://github.com/supabase/storage/issues/133#issuecomment-1098845258
    const { data, error } = await supabaseClient.storage
      .from(storageName)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      throw new Error("fail to upload image");
    }

    return data.path;
  };
