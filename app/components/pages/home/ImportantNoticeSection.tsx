import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import navigate from "../../../utils/navigate";
import MegaphoneIcon from "react-native-heroicons/solid/MegaphoneIcon";
import { contentLayoutStyle } from "app/constants/Global";

const ImportantNoticeSection: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const importantNotice = {
    id: "1",
    title: "1달 만에 D-4에서 E-7 비자 변경한 후기",
  };

  return (
    <View className={`${contentLayoutStyle} py-6`}>
      <TouchableOpacity
        onPress={() =>
          navigator.openNoticeItemModal({ noticeId: importantNotice.id })
        }
      >
        <View className="flex flex-row items-center w-full py-3 pl-3 pr-8 overflow-hidden border border-gray-200 rounded-md bg-gray-50">
          <MegaphoneIcon width={20} height={20} />
          <Text
            className="ml-1 text-base font-bold break-all"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {importantNotice.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImportantNoticeSection;