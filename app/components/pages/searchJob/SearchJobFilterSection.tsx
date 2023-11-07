import React from "react";
import {
  ScrollView,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import SearchJobPostListItem from "./SearchJobPostListItem";
import ArrowPathIcon from "react-native-heroicons/solid/ArrowPathIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";

import Stack from "app/components/blocks/Stack/Stack";
import Chip from "app/components/blocks/Chip/Chip";
import SearchJobAreaBox from "./SearchJobAreaBox";
import {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import { useQuery } from "@tanstack/react-query";
import { getJobPostByFilter, JobCategoryType } from "app/api/jobPostList";
import { JobType, JobTypeCategory } from "app/constants/JobCategory";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

const JOB_POST_LIST_COUNT = 5;
interface JobPostListItemProps {
  id: number;
  title: string;
  company: string;
  jobType: string;
  area: string;
  endDate: string;
  isBookMarked: boolean;
}

const SearchJobFilterSection: React.FC = () => {
  const [selectedJobType, setSelectedJobType] = React.useState<
    keyof typeof JobType
  >(JobType.All);
  const [selectedArea, setSelectedArea] = React.useState<string[]>([]);
  const [cursor, setCursor] = React.useState<string | undefined | null>();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ["65%"], []);

  const { data, isError, error } = useQuery({
    queryKey: [selectedArea, selectedJobType],
    queryFn: async () =>
      await getJobPostByFilter({
        jobCategory: [JobCategoryType.Etc],
        siDo: ["경기도"],
        after: cursor,
        first: JOB_POST_LIST_COUNT,
      }),
  });

  const searchedJobPost = data?.jobPost;
  const pageInfo = data?.pageInfo;

  React.useEffect(() => {
    setCursor(pageInfo?.endCursor);
  }, [pageInfo]);

  const handleOptionResetClick = () => {
    setSelectedJobType(JobType.All);
    setSelectedArea([]);
  };

  const handleAreaFilterOpen = () => {
    bottomSheetRef.current?.present();
  };

  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.close();
  };

  const renderBackdrop = React.useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
    ) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        pressBehavior={"close"}
      />
    ),
    []
  );

  const ResetButton = (
    <Pressable onPress={handleOptionResetClick}>
      <ArrowPathIcon />
    </Pressable>
  );

  const AreaFilter = (
    <TouchableOpacity onPress={handleAreaFilterOpen}>
      <Stack styles="items-center border-b px-1 pb-0.5 justify-between">
        <Text className="mr-1">
          {selectedArea.length === 0
            ? "지역"
            : selectedArea.length === 1
            ? selectedArea[0]
            : `${selectedArea[0]} 외 ${selectedArea.length - 1} 곳`}
        </Text>
        <MapPinIcon width={20} height={20} />
      </Stack>
    </TouchableOpacity>
  );

  const JobTypeFilter = (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Stack columnGap={8} styles="mx-4">
        {(Object.keys(JobTypeCategory) as Array<keyof typeof JobType>).map(
          (jobTypekey) => (
            <Chip
              key={jobTypekey}
              label={JobTypeCategory[jobTypekey]}
              variant={jobTypekey === "All" ? "filled" : "outlined"}
              active={jobTypekey === selectedJobType}
              onPress={() => setSelectedJobType(jobTypekey)}
            />
          )
        )}
      </Stack>
    </ScrollView>
  );

  return (
    <View className="py-4 bg-white">
      <View>
        <Stack styles="justify-between mb-6 px-4">
          {ResetButton}
          {AreaFilter}
        </Stack>
        {JobTypeFilter}
      </View>
      <View>
        <FlatList
          scrollEnabled={false}
          data={searchedJobPost}
          renderItem={({ item }) => (
            <SearchJobPostListItem {...item.node} isBookMarked={false} />
          )}
          keyExtractor={(item) => `${item.node.id}`}
          ListEmptyComponent={
            <Stack styles="justify-center items-center h-80 ">
              <Text className="text-base text-neutral-500">
                게제된 공고가 아직 없어요
              </Text>
            </Stack>
          }
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView>
          <SearchJobAreaBox
            defaultArea={selectedArea}
            onSaveBtnClick={(areaList) => {
              setSelectedArea(areaList);
              handleBottomSheetClose();
            }}
          />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
};

export default SearchJobFilterSection;
