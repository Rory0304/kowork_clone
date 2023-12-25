import React from 'react';
import { FlatList, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import _chunk from 'lodash/chunk';
import { gray } from 'tailwindcss/colors';

import { getHighlightedJobPost } from 'app/api/jobPostList';
import navigate from 'app/utils/navigationHelper';

import SearchJobPostListItem from './SearchJobPostListItem';

const COUNT_PER_SLIDE = 4;

const JobPostListSection: React.FC = () => {
  const [height, setHeight] = React.useState(500);

  const handleSetHeight = (value: number) => {
    setHeight(value);
  };

  const { data, isError, error } = useQuery({
    queryKey: ['getHighlightedJobPost'],
    queryFn: async () =>
      await getHighlightedJobPost({
        first: 8,
      }),
  });

  const jobPostList = data?.jobPostList;
  const chunkedJobPostList = _chunk(jobPostList, COUNT_PER_SLIDE);

  return (
    <View className="mb-4 bg-white">
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
                <SearchJobPostListItem {...item.node} isBookMarked={false} />
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
