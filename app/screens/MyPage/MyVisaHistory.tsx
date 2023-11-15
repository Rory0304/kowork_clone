import { ScrollView, View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import Stack from "app/components/blocks/Stack/Stack";
import TrashIcon from "react-native-heroicons/solid/TrashIcon";
import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";
import { VisaCode, VisaStatus } from "app/constants/VisaDetail";

interface MyVisaHistoryListProps {
  id: number;
  status: VisaCode;
  issueDate: string;
  finalEntryDate: string;
}

const MyVisaHistoryItem: React.FC<MyVisaHistoryListProps> = ({
  id,
  status,
  issueDate,
  finalEntryDate,
}) => {
  const [open, setOpen] = React.useState(false);

  const configuredInfo = [
    {
      title: "체류자격 / Status",
      value: status,
    },
    {
      title: "발급일 / Issue Date",
      value: issueDate,
    },
    {
      title: "입국만료일 / Final Entry Date",
      value: finalEntryDate,
    },
  ];

  return (
    <View className="px-4 mb-4">
      <Pressable onPress={() => setOpen((current) => !current)}>
        <Stack styles="p-4 bg-gray-50 rounded-xl justify-between items-center">
          <Text className="text-sm font-medium text-neutral-400">
            ~{finalEntryDate}
          </Text>
          <Text className="text-base font-bold">{VisaStatus[status]}</Text>
          <ChevronDownIcon />
        </Stack>
      </Pressable>
      <View className={`${open ? "block" : "hidden"} px-2`}>
        {configuredInfo.map((item, index) => (
          <Stack
            direction="column"
            styles={
              index === configuredInfo.length - 1
                ? ""
                : "border-b border-neutral-200"
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
  const [isEditShown, setIsEditShown] = React.useState(false);

  const myVisaHistoryList: MyVisaHistoryListProps[] = [
    {
      id: 1,
      status: VisaCode.D4,
      issueDate: "2026/06/06",
      finalEntryDate: "2028/09/09",
    },
    {
      id: 2,
      status: VisaCode.D4,
      issueDate: "2026/06/06",
      finalEntryDate: "2028/09/09",
    },
  ];

  return (
    <ScrollView className={`pb-12 bg-white`}>
      <View className="mb-4">
        <Stack
          direction="row"
          styles="justify-between p-4 border-b border-neutral-300"
        >
          <Text className="text-sm font-medium text-neutral-400">
            총 {myVisaHistoryList.length}건
          </Text>
          <Pressable onPress={() => setIsEditShown(!isEditShown)}>
            <Text className="text-sm font-medium text-neutral-400">
              {isEditShown ? "취소" : "편집"}
            </Text>
          </Pressable>
        </Stack>
        <Stack
          direction="row"
          styles={`${
            isEditShown ? "block" : "hidden"
          } px-4 py-3 items-center justify-between`}
        >
          <Pressable>
            <Text className="text-sm font-medium text-neutral-400">
              전체선택
            </Text>
          </Pressable>
          <Pressable>
            <TrashIcon />
          </Pressable>
        </Stack>
      </View>

      <FlatList
        scrollEnabled={false}
        data={myVisaHistoryList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MyVisaHistoryItem {...item} />}
      />
    </ScrollView>
  );
};

export default MyVisaHistory;
