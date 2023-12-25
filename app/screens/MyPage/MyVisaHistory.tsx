import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ChevronDownIcon from 'react-native-heroicons/solid/ChevronDownIcon';
import TrashIcon from 'react-native-heroicons/solid/TrashIcon';

import { useMutation, useQuery } from '@apollo/client';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { CheckIcon, Stack } from 'app/components/blocks';
import { VisaCode, VisaStatus } from 'app/constants/VisaDetail';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  DeleteVisaHistoryDocument,
  DeleteVisaHistoryMutation,
  GetVisaHistoryDocument,
  GetVisaHistoryQuery,
} from 'app/graphql/generated';

interface MyVisaHistoryListProps {
  visaStatus: VisaCode;
  visaIssueDate: string;
  visaFinalEntryDate: string;
}

const MyVisaHistoryItem: React.FC<MyVisaHistoryListProps> = ({
  visaStatus,
  visaIssueDate,
  visaFinalEntryDate,
}) => {
  const [open, setOpen] = React.useState(false);

  const configuredInfo = [
    {
      title: '체류자격 / Status',
      value: VisaStatus[visaStatus],
    },
    {
      title: '발급일 / Issue Date',
      value: visaIssueDate,
    },
    {
      title: '입국만료일 / Final Entry Date',
      value: visaFinalEntryDate,
    },
  ];

  return (
    <View className="mb-4 w-full flex flex-col shrink">
      <TouchableOpacity onPress={() => setOpen(current => !current)}>
        <Stack styles="p-4 bg-gray-50 rounded-xl justify-between items-center">
          <Text className="text-sm font-medium text-neutral-400">
            ~{visaFinalEntryDate}
          </Text>
          <Text className="text-base font-bold">{VisaStatus[visaStatus]}</Text>
          <ChevronDownIcon />
        </Stack>
      </TouchableOpacity>
      <View className={`${open ? 'block' : 'hidden'} px-2`}>
        {configuredInfo.map((item, index) => (
          <Stack
            direction="column"
            styles={
              index === configuredInfo.length - 1
                ? ''
                : 'border-b border-neutral-200'
            }
          >
            <Text className="my-4 font-semibold text-neutral-400">
              {item.title}
            </Text>
            <Text className="mb-4 text-base font-bold">{item.value}</Text>
          </Stack>
        ))}
      </View>
    </View>
  );
};

const MyVisaHistory: React.FC = () => {
  const { userInfo } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();

  const [isEditShown, setIsEditShown] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<number[]>([]);

  const { data, refetch } = useQuery<GetVisaHistoryQuery>(
    GetVisaHistoryDocument,
    {
      variables: {
        userId: userInfo?.id,
      },
    }
  );

  const [deleteVisaHistory, { loading, error, data: deleteVisaHistoryRes }] =
    useMutation<DeleteVisaHistoryMutation>(DeleteVisaHistoryDocument);

  const visaHistory = data?.visaHistoryCollection?.edges;

  const handleItemCheck = React.useCallback(
    (id: number) => {
      const newSelectedItem = selectedItem.includes(id)
        ? selectedItem.filter(item => item !== id)
        : [...selectedItem, id];

      setSelectedItem(newSelectedItem);
    },
    [selectedItem]
  );

  const handleItemCheckAll = React.useCallback(() => {
    setSelectedItem(visaHistory?.map(item => Number(item.node.id)) || []);
  }, [visaHistory]);

  const handleVisaHistoryDelete = async (idList: number[]) => {
    await deleteVisaHistory({
      variables: {
        id: idList,
      },
    }).then(res => {
      if (res.data) {
        refetch();
        setSelectedItem([]);
      }
    });
  };

  const handleDeleteButtonClick = React.useCallback(() => {
    if (selectedItem.length === 0) return;

    const options = ['선택 목록 삭제', '취소'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (index?: number) => {
        switch (index) {
          case destructiveButtonIndex:
            handleVisaHistoryDelete(selectedItem);
            // Delete
            break;

          case cancelButtonIndex:
            // Canceled
            break;
        }
      }
    );
  }, [selectedItem]);

  return (
    <ScrollView className={`pb-12 bg-white`}>
      <View className="mb-4">
        <Stack
          direction="row"
          styles="justify-between p-4 border-b border-neutral-300"
        >
          <Text className="text-sm font-medium text-neutral-400">
            총 <Text className="text-primary">{visaHistory?.length}건</Text>
          </Text>
          <TouchableOpacity onPress={() => setIsEditShown(!isEditShown)}>
            <Text className="text-sm font-medium text-primary">
              {isEditShown ? '취소' : '편집'}
            </Text>
          </TouchableOpacity>
        </Stack>
        <Stack
          direction="row"
          styles={`${
            isEditShown ? 'block' : 'hidden'
          } px-4 py-3 items-center justify-between`}
        >
          <TouchableOpacity onPress={handleItemCheckAll}>
            <Text className="text-sm font-medium text-neutral-400">
              전체 선택
            </Text>
          </TouchableOpacity>
          <Text className="font-bold text-base">
            {selectedItem.length > 0
              ? `${selectedItem.length}개 항목 선택됨`
              : null}
          </Text>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="delete my visa history"
            onPress={handleDeleteButtonClick}
          >
            <TrashIcon />
          </TouchableOpacity>
        </Stack>
      </View>
      <FlatList
        className="px-4"
        scrollEnabled={false}
        data={visaHistory}
        keyExtractor={(_, index) => `visaHistory-${index}`}
        renderItem={({ item }) => (
          <Stack direction="row" styles="w-full items-start">
            {isEditShown ? (
              <TouchableOpacity
                onPress={() => handleItemCheck(Number(item.node.id))}
                className="my-4 mr-2"
              >
                <CheckIcon
                  variant="square"
                  checked={selectedItem.includes(Number(item.node.id))}
                />
              </TouchableOpacity>
            ) : null}
            <MyVisaHistoryItem
              visaFinalEntryDate={item.node.visaFinalEntryDate}
              visaIssueDate={item.node.visaIssueDate}
              visaStatus={item.node.visaStatus as VisaCode}
            />
          </Stack>
        )}
      />
    </ScrollView>
  );
};

export default MyVisaHistory;
