import React from 'react';
import { FlatList, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { useQuery } from '@apollo/client';
import _chunk from 'lodash/chunk';
import { gray } from 'tailwindcss/colors';

import { OverlaySpinner } from 'app/components/blocks';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetHighlightedJobPostDocument,
  GetHighlightedJobPostQuery,
  GetJobPostBookmarkByIdsDocument,
  GetJobPostBookmarkByIdsQuery,
  GetJobPostBookmarkByIdsQueryVariables,
} from 'app/graphql/generated';
import navigate from 'app/utils/navigationHelper';

import SearchJobPostListItem from './SearchJobPostListItem';

const COUNT_PER_SLIDE = 4;

const JobPostListSection: React.FC = () => {
  const { userInfo } = useAuth();
  const [height, setHeight] = React.useState(500);

  const handleSetHeight = (value: number) => {
    setHeight(value);
  };

  const { data: jobPostListData, loading: highlightedPostListLoading } =
    useQuery<GetHighlightedJobPostQuery>(GetHighlightedJobPostDocument, {
      variables: {
        first: 8,
      },
    });

  const highlightedPostList = jobPostListData?.jobPostCollection?.edges;
  const chunkedJobPostList = _chunk(highlightedPostList, COUNT_PER_SLIDE);

  const { data: jobPostBookmarks, loading: jobPostBookmarksLoading } = useQuery<
    GetJobPostBookmarkByIdsQuery,
    GetJobPostBookmarkByIdsQueryVariables
  >(GetJobPostBookmarkByIdsDocument, {
    variables: {
      jobPostIds: highlightedPostList?.map(res => res.node.uuid),
      userId: userInfo?.id,
    },
  });

  const jobPostBookmarkIds =
    jobPostBookmarks?.jobPostBookmarkCollection?.edges?.map(
      res => res.node.job_post_id
    );

  return (
    <View className="mb-4 bg-white relative">
      {highlightedPostListLoading && jobPostBookmarksLoading ? (
        <OverlaySpinner />
      ) : null}
      <Swiper
        loop={false}
        showsButtons={false}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        style={{
          height,
        }}
        paginationStyle={{
          position: 'relative',
          bottom: 0,
          borderTopWidth: 1,
          borderTopColor: gray[200],
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        {chunkedJobPostList.map(list => (
          <View
            onLayout={event => {
              handleSetHeight(event.nativeEvent.layout.height);
            }}
          >
            <FlatList
              scrollEnabled={false}
              data={list}
              renderItem={({ item }) => (
                <SearchJobPostListItem
                  {...item.node}
                  isBookMarked={Boolean(
                    jobPostBookmarkIds?.includes(item.node.uuid)
                  )}
                />
              )}
              keyExtractor={item => `${item.node.id}`}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default JobPostListSection;
