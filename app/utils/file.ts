import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";

/** Check file size is exceeded
 * @param  fileSize file in bytes
 * @param  maxSizeInBytes max file size in bytes
 */
export const isFileSizeExceeded = (
  fileSize: number,
  maxSizeInBytes = 5 * 1024 * 1024
) => {
  return fileSize > maxSizeInBytes;
};

/** Get File size from uri
 * @param  fileURI
 * @returns return file size in bytes
 */
export const getFileSizeFromURI = async (fileURI: string) => {
  if (Platform.OS === "web") {
    const response = await fetch(fileURI);
    const blob = await response.blob();
    const fileSizeInBytes = blob.size;
    return fileSizeInBytes;
  } else {
    const fileInfo = await FileSystem.getInfoAsync(fileURI);
    return fileInfo.exists ? fileInfo.size : null;
  }
};
