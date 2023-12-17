import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { VisaCode, VisaStatus } from "app/constants/VisaDetail";
import Stack from "app/components/blocks/Stack/Stack";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useMutation, useQuery } from "@apollo/client";
import {
  DeleteVisaHistoryDocument,
  DeleteVisaHistoryMutation,
  GetVisaHistoryDocument,
  GetVisaHistoryQuery,
} from "app/graphql/generated";
import { useAuth } from "app/contexts/AuthProvider";

import EllipsisVerticalIcon from "react-native-heroicons/solid/EllipsisVerticalIcon";
import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";
import ChevronUpIcon from "react-native-heroicons/solid/ChevronUpIcon";

interface MyVisaHistorySectionProps {
  name: string;
}

const MyVisaHistorySection: React.FC<MyVisaHistorySectionProps> = ({
  name,
}) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const { userInfo } = useAuth();

  const { showActionSheetWithOptions } = useActionSheet();

  const [isHistoryClosed, setIsHistoryClosed] = React.useState(false);

  const { data: currentVisaHistoryData, refetch } =
    useQuery<GetVisaHistoryQuery>(GetVisaHistoryDocument, {
      variables: {
        userId: userInfo?.id,
      },
    });

  const [deleteVisaHistory, { loading, error, data: deleteVisaHistoryRes }] =
    useMutation<DeleteVisaHistoryMutation>(DeleteVisaHistoryDocument);

  const currentVisaHistory =
    currentVisaHistoryData?.visaHistoryCollection?.edges?.[0]?.node;

  const currentVisaStatus = currentVisaHistory
    ? VisaStatus[currentVisaHistory.visaStatus as VisaCode]
    : "비자 없음";

  const visaHistory = [
    {
      title: "체류자격 / Status",
      data: currentVisaStatus,
    },
    {
      title: "발급일 / Issue Date",
      data: currentVisaHistory?.visaIssueDate,
    },
    {
      title: "입국만료일 / Final Entry Date",
      data: currentVisaHistory?.visaFinalEntryDate,
    },
  ];

  const handleVisaHistoryDelete = async (idList: number[]) => {
    await deleteVisaHistory({
      variables: {
        id: idList,
      },
    }).then((res) => {
      if (res.data) {
        refetch();
      }
    });
  };

  const handleMenuButtonClick = React.useCallback(() => {
    const options = ["새로운 비자 등록", "수정하기", "삭제하기", "취소"];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (index?: number) => {
        switch (index) {
          case 0:
            // 새로운 비자 등록
            navigator.openMyVisaEnrollScreen();
            break;

          case 1:
            // 수정하기
            navigator.openMyVisaEnrollScreen({
              visaHistory: currentVisaHistory,
            });
            break;

          case destructiveButtonIndex:
            handleVisaHistoryDelete(currentVisaHistory?.id);
            // Delete
            break;

          case cancelButtonIndex:
            // Canceled
            break;
        }
      }
    );
  }, [currentVisaHistory]);

  return (
    <View className="px-4 py-3 rounded-md bg-gray-50">
      <View className="mb-2">
        <Stack direction="row" styles="justify-between items-center">
          <View>
            <Text className="mb-2 font-semibold text-md text-neutral-400">
              {name}님의 현재 비자
            </Text>
            <Text className="text-lg font-bold">{currentVisaStatus}</Text>
          </View>
          <TouchableOpacity onPress={handleMenuButtonClick}>
            <EllipsisVerticalIcon />
          </TouchableOpacity>
        </Stack>
      </View>
      <View className={`${isHistoryClosed ? "hidden" : "block"}`}>
        {currentVisaHistory ? (
          <FlatList
            scrollEnabled={false}
            data={visaHistory}
            ItemSeparatorComponent={() => (
              <View className="border-b border-neutral-200" />
            )}
            renderItem={({ item }) => (
              <View className="py-3">
                <Text className="font-medium text-neutral-500 mb-2">
                  {item.title}
                </Text>
                <Text className="font-bold text-base text-secondary mb-2">
                  {item.data}
                </Text>
              </View>
            )}
          />
        ) : (
          <TouchableOpacity onPress={() => navigator.openMyVisaEnrollScreen()}>
            <Text className="py-4 text-lg font-semibold text-center underline text-neutral-400">
              비자 등록하기
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={() => navigator.openMyVisaHistoryScreen()}>
        <View className="px-4 py-2 border rounded-md">
          <Text className="font-bold text-center text-neutral-500">
            비자 히스토리
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsHistoryClosed((current) => !current)}
      >
        <View className="flex flex-row justify-center w-full p-3">
          {isHistoryClosed ? (
            <ChevronDownIcon width={24} height={24} />
          ) : (
            <ChevronUpIcon width={24} height={24} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyVisaHistorySection;
