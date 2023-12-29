import React from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowPathIcon from 'react-native-heroicons/solid/ArrowPathIcon';
import MapPinIcon from 'react-native-heroicons/solid/MapPinIcon';

import { useQuery } from '@apollo/client';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { BottomSheet, Chip, Stack } from 'app/components/blocks';
import { JobCategoryList } from 'app/constants/JobCategory';
import { AREA_LIST } from 'app/constants/JobCategory';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetJobPostBookmarkByIdsDocument,
  GetJobPostBookmarkByIdsQuery,
  GetJobPostBookmarkByIdsQueryVariables,
  GetJobPostByFilterDocument,
  GetJobPostByFilterQuery,
  GetJobPostByFilterQueryVariables,
} from 'app/graphql/generated';
import { JobCategoryType } from 'app/types/JobPost';

import SearchJobAreaBox from './SearchJobAreaBox';
import SearchJobPostListItem from './SearchJobPostListItem';

const JOB_POST_LIST_COUNT = 5;

const SearchJobFilterSection: React.FC = () => {
  const { userInfo } = useAuth();

  //
  //
  //
  const [selectedJobCategory, setSelectedJobCategory] = React.useState<
    JobCategoryType | 'All'
  >('All');
  const [selectedArea, setSelectedArea] = React.useState<string[]>([]);
  const cursorRef = React.useRef<string | undefined | null>();

  //
  // Bottom Sheet
  //
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ['65%'], []);

  const handleAreaFilterOpen = () => {
    bottomSheetRef.current?.present();
  };

  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.close();
  };

  //
  //
  //
  const { data: jobPost } = useQuery<
    GetJobPostByFilterQuery,
    GetJobPostByFilterQueryVariables
  >(GetJobPostByFilterDocument, {
    variables: {
      jobCategory:
        selectedJobCategory === 'All'
          ? Object.values(JobCategoryType)
          : selectedJobCategory,
      siDo: selectedArea.length === 0 ? AREA_LIST : selectedArea,
      after: cursorRef.current,
      first: JOB_POST_LIST_COUNT,
    },
  });

  const searchedJobPost = jobPost?.jobPostCollection?.edges;
  const pageInfo = jobPost?.jobPostCollection?.pageInfo;

  React.useEffect(() => {
    cursorRef.current = pageInfo?.endCursor;
  }, [pageInfo]);

  //
  //
  //
  const { data: jobPostBookmarks } = useQuery<
    GetJobPostBookmarkByIdsQuery,
    GetJobPostBookmarkByIdsQueryVariables
  >(GetJobPostBookmarkByIdsDocument, {
    variables: {
      jobPostIds: searchedJobPost?.map(res => res.node.uuid),
      userId: userInfo?.id,
    },
    skip: !userInfo?.id,
  });

  const jobPostBookmarkIds =
    jobPostBookmarks?.jobPostBookmarkCollection?.edges?.map(
      res => res.node.job_post_id
    );

  //
  //
  //
  const handleOptionResetClick = () => {
    setSelectedJobCategory('All');
    setSelectedArea([]);
  };

  //
  //
  //
  return (
    <View className="py-4 bg-white grow shrink basis-auto">
      <View>
        <Stack styles="justify-between  px-4">
          <Pressable onPress={handleOptionResetClick}>
            <ArrowPathIcon />
          </Pressable>
          <TouchableOpacity onPress={handleAreaFilterOpen}>
            <Stack styles="items-center border-b px-1 pb-0.5 justify-between">
              <Text className="mr-1">
                {selectedArea.length === 0
                  ? '지역'
                  : selectedArea.length === 1
                  ? selectedArea[0]
                  : `${selectedArea[0]} 외 ${selectedArea.length - 1} 곳`}
              </Text>
              <MapPinIcon width={20} height={20} />
            </Stack>
          </TouchableOpacity>
        </Stack>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-6"
        >
          <Stack columnGap={8} styles="mx-4">
            <Chip
              key={'All'}
              label={'전체'}
              variant={selectedJobCategory === 'All' ? 'filled' : 'outlined'}
              active={selectedJobCategory === 'All'}
              onPress={() => setSelectedJobCategory('All')}
            />
            {(
              Object.keys(JobCategoryList) as Array<
                keyof typeof JobCategoryList
              >
            ).map(jobTypekey => (
              <Chip
                key={jobTypekey}
                label={JobCategoryList[jobTypekey]}
                variant={
                  selectedJobCategory === jobTypekey ? 'filled' : 'outlined'
                }
                active={jobTypekey === selectedJobCategory}
                onPress={() => setSelectedJobCategory(jobTypekey)}
              />
            ))}
          </Stack>
        </ScrollView>
      </View>
      <View>
        <FlatList
          scrollEnabled={false}
          data={searchedJobPost}
          renderItem={({ item }) => (
            <SearchJobPostListItem
              {...item.node}
              isBookMarked={Boolean(
                jobPostBookmarkIds?.includes(item.node.uuid)
              )}
            />
          )}
          keyExtractor={item => `${item.node.id}`}
          ListEmptyComponent={
            <Stack styles="justify-center items-center h-80 ">
              <Text className="text-base text-neutral-500">
                게제된 공고가 아직 없어요
              </Text>
            </Stack>
          }
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onClose={handleBottomSheetClose}
      >
        <SearchJobAreaBox
          defaultArea={selectedArea}
          onSaveBtnClick={areaList => {
            setSelectedArea(areaList);
            handleBottomSheetClose();
          }}
        />
      </BottomSheet>
    </View>
  );
};

export default SearchJobFilterSection;
