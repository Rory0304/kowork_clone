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

import { useQuery as ApolloUseQuery } from '@apollo/client';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useQuery } from '@tanstack/react-query';

import { JobCategoryType, getJobPostByFilter } from 'app/api/jobPostList';
import { BottomSheet, Chip, Stack } from 'app/components/blocks';
import { JobType, JobTypeCategory } from 'app/constants/JobCategory';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetJobPostBookmarkByIdsDocument,
  GetJobPostBookmarkByIdsQuery,
  GetJobPostBookmarkByIdsQueryVariables,
} from 'app/graphql/generated';

import SearchJobAreaBox from './SearchJobAreaBox';
import SearchJobPostListItem from './SearchJobPostListItem';

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
  const { userInfo } = useAuth();

  const [selectedJobType, setSelectedJobType] = React.useState<
    keyof typeof JobType
  >(JobType.All);
  const [selectedArea, setSelectedArea] = React.useState<string[]>([]);
  const [cursor, setCursor] = React.useState<string | undefined | null>();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ['65%'], []);

  const { data } = useQuery({
    queryKey: [selectedArea, selectedJobType],
    queryFn: async () =>
      await getJobPostByFilter({
        jobCategory: [JobCategoryType.Etc],
        siDo: ['경기도'],
        after: cursor,
        first: JOB_POST_LIST_COUNT,
      }),
  });

  const searchedJobPost = data?.jobPost;
  const pageInfo = data?.pageInfo;

  const { data: jobPostBookmarks, refetch } = ApolloUseQuery<
    GetJobPostBookmarkByIdsQuery,
    GetJobPostBookmarkByIdsQueryVariables
  >(GetJobPostBookmarkByIdsDocument, {
    variables: {
      jobPostIds: searchedJobPost?.map(res => res.node.uuid),
      userId: userInfo?.id,
    },
  });

  const jobPostBookmarkIds =
    jobPostBookmarks?.jobPostBookmarkCollection?.edges?.map(
      res => res.node.job_post_id
    );

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

  return (
    <View className="py-4 bg-white">
      <View>
        <Stack styles="justify-between mb-6 px-4">
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Stack columnGap={8} styles="mx-4">
            {(Object.keys(JobTypeCategory) as Array<keyof typeof JobType>).map(
              jobTypekey => (
                <Chip
                  key={jobTypekey}
                  label={JobTypeCategory[jobTypekey]}
                  variant={jobTypekey === 'All' ? 'filled' : 'outlined'}
                  active={jobTypekey === selectedJobType}
                  onPress={() => setSelectedJobType(jobTypekey)}
                />
              )
            )}
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
