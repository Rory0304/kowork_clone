import React from 'react';
import { FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MagnifyingGlassIcon from 'react-native-heroicons/outline/MagnifyingGlassIcon';
import ClockIcon from 'react-native-heroicons/solid/ClockIcon';
import XCircleIcon from 'react-native-heroicons/solid/XCircleIcon';
import XMarkIcon from 'react-native-heroicons/solid/XMarkIcon';

import { useLazyQuery, useQuery } from '@apollo/client';
import { gray } from 'tailwindcss/colors';

import { Chip, Stack } from 'app/components/blocks';
import SearchJobPostListItem from 'app/components/pages/searchJob/SearchJobPostListItem';
import { JobCategoryList } from 'app/constants/JobCategory';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetJobPostBookmarkByIdsDocument,
  GetJobPostBookmarkByIdsQuery,
  GetJobPostBookmarkByIdsQueryVariables,
  GetJobPostByKeywordDocument,
  GetJobPostByKeywordQuery,
  GetJobPostByKeywordQueryVariables,
  JobCategory,
} from 'app/graphql/generated';
import useKeywordHistory from 'app/hooks/useKeywordHistory';
import { JobCategoryType } from 'app/types/JobPost';

const SearchJobPostScreen: React.FC = () => {
  const { userInfo } = useAuth();
  const {
    keywordHistory,
    insertKeyword,
    initializeKeywordHistory,
    removeKeyword,
    resetKeywordHistory,
  } = useKeywordHistory();

  const [keyword, setKeyword] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<
    | NonNullable<GetJobPostByKeywordQuery['jobPostCollection']>['edges']
    | undefined
  >();

  //
  //
  //
  const [searchJobPost] = useLazyQuery<
    GetJobPostByKeywordQuery,
    GetJobPostByKeywordQueryVariables
  >(GetJobPostByKeywordDocument, {
    fetchPolicy: 'network-only',
    onCompleted: data => setSearchResult(data.jobPostCollection?.edges || []),
  });

  const { data: jobPostBookmarks } = useQuery<
    GetJobPostBookmarkByIdsQuery,
    GetJobPostBookmarkByIdsQueryVariables
  >(GetJobPostBookmarkByIdsDocument, {
    variables: {
      jobPostIds: searchResult?.map(res => res.node.uuid),
      userId: userInfo?.id,
    },
  });

  const jobPostBookmarkIds =
    jobPostBookmarks?.jobPostBookmarkCollection?.edges?.map(
      res => res.node.job_post_id
    );

  //
  //
  //
  React.useEffect(() => {
    if (keyword.length === 0) {
      initializeKeywordHistory();
      setSearchResult(undefined);
    }
  }, [keyword]);

  //
  //
  //
  const handleSearchKeyword = async () => {
    // Add keyword to local storage
    await insertKeyword(keyword);
    await searchJobPost({
      variables: {
        title: `%${keyword}%`,
      },
    });
  };

  const handleSearchJobCategory = async (jobCategory: JobCategory) => {
    await searchJobPost({
      variables: {
        jobCategory,
      },
    });
  };

  //
  //
  //
  return (
    <ScrollView className="bg-white px-4">
      <View className="my-4 flex flex-row p-2 bg-gray-100  items-center rounded-xl justify-between">
        <MagnifyingGlassIcon color={gray[600]} width={24} height={24} />
        <TextInput
          focusable={false}
          value={keyword}
          className="rounded-xl bg-gray-100 flex-1 mx-2"
          placeholder="검색어를 입력해주세요"
          placeholderTextColor={gray[400]}
          onChange={e => {
            setKeyword(e.nativeEvent.text);
          }}
          onSubmitEditing={() => handleSearchKeyword()}
          returnKeyType="search"
          style={{
            fontSize: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setKeyword('');
            setSearchResult(undefined);
          }}
        >
          <XCircleIcon width={24} height={24} fill={gray[600]} />
        </TouchableOpacity>
      </View>

      {/* Rescent Search Result */}
      {typeof searchResult === 'undefined' ? (
        <View className="py-4">
          <FlatList
            data={keywordHistory}
            ListHeaderComponent={
              <Stack direction="row" styles="justify-between mb-2">
                <Text className="font-bold text-base">최근 검색어</Text>
                <TouchableOpacity onPress={() => resetKeywordHistory()}>
                  <Text className="text-base text-primary">전체 삭제</Text>
                </TouchableOpacity>
              </Stack>
            }
            renderItem={({ item }) => (
              <Stack direction="row" styles="py-3 items-center">
                <ClockIcon
                  width={24}
                  height={24}
                  fill={gray[400]}
                  className="flex-1"
                />
                <Text className="mx-2 text-ellipsis flex-1 shrink">{item}</Text>
                <TouchableOpacity onPress={() => removeKeyword(keyword)}>
                  <XMarkIcon
                    width={24}
                    height={24}
                    color={gray[400]}
                    className="flex-1"
                  />
                </TouchableOpacity>
              </Stack>
            )}
            ListEmptyComponent={
              <View className="py-6">
                <Text className="text-base text-secondary text-center">
                  최근 검색어가 없습니다.
                </Text>
              </View>
            }
          />
        </View>
      ) : null}

      {/* Search Result */}
      <View>
        <View className="py-6 flex">
          <View className="flex flex-wrap flex-row gap-3">
            <FlatList
              data={searchResult}
              renderItem={({ item }) => (
                <>
                  <Text className="font-bold text-base mb-2 border-b border-secondary">
                    검색 결과
                  </Text>
                  <SearchJobPostListItem
                    {...item.node}
                    isBookMarked={Boolean(
                      jobPostBookmarkIds?.includes(item.node.uuid)
                    )}
                  />
                </>
              )}
              keyExtractor={item => `${item.node.id}`}
              ListEmptyComponent={
                typeof searchResult !== 'undefined' ? (
                  <View>
                    <View>
                      <Text className="font-bold text-base mb-3">
                        검색 결과가 없습니다.
                      </Text>
                      <Text className="text-secondary text-sm">{`*단어의 철자가 정확한지 확인해주세요.\n*해당 키워드 관련 채용 공고가 아직 없을 수 있어요.`}</Text>
                    </View>
                    {/* Recommendation */}
                    <View className="py-6 flex">
                      <Text className="font-bold text-base mb-3">
                        이런 키워드는 어때요?
                      </Text>
                      <View className="flex flex-wrap flex-row gap-3">
                        {Object.values(JobCategoryType).map(category => (
                          <TouchableOpacity>
                            <Chip
                              label={JobCategoryList[category]}
                              size="small"
                              variant="outlined"
                              onPress={() => {
                                setKeyword(JobCategoryList[category]);
                                handleSearchJobCategory(category);
                              }}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                ) : null
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchJobPostScreen;
