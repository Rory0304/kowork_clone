import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { useQuery } from '@apollo/client';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import { BottomSheet, Stack } from 'app/components/blocks';
import {
  VisaInfoBoxContent,
  VisaInfoBoxHeader,
} from 'app/components/pages/global/BottomSheetContent/VisaInfoBox';
import { VisaInfo } from 'app/constants/VisaDetail';
import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetJobPostBookmarkByUserIdDocument,
  GetJobPostBookmarkByUserIdQuery,
  GetJobPostsByIdDocument,
  GetJobPostsByIdQuery,
} from 'app/graphql/generated';
import useVisaBookmark from 'app/hooks/useVisaBookmark';
import navigate from 'app/utils/navigationHelper';

enum BookMarkTab {
  JobPost = 'jobPost',
  Visa = 'visa',
}

const MyBookMarkScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const { userInfo } = useAuth();

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const [selectedVisaCode, setSelectedVisaCode] = React.useState<string>('');
  const [tab, setTab] = React.useState(BookMarkTab.JobPost);

  const { visaBookmarkList, toggleBookmark, isBookmarked } = useVisaBookmark({
    visaCode: selectedVisaCode || '',
  });

  const { data: jobPostBookmarksByUserId } =
    useQuery<GetJobPostBookmarkByUserIdQuery>(
      GetJobPostBookmarkByUserIdDocument,
      {
        variables: {
          userId: userInfo?.id,
        },
      }
    );

  const { data: jobPostData } = useQuery<GetJobPostsByIdQuery>(
    GetJobPostsByIdDocument,
    {
      variables: {
        uuids: jobPostBookmarksByUserId?.jobPostBookmarkCollection?.edges.map(
          edge => edge.node.job_post_id
        ),
      },
    }
  );

  const bookmarkedJobPost = jobPostData?.jobPostCollection?.edges;

  return (
    <ScrollView>
      <Stack direction="row" styles="w-full justify-between">
        {(Object.keys(BookMarkTab) as Array<keyof typeof BookMarkTab>).map(
          item => (
            <TouchableOpacity
              className="basis-1/2"
              onPress={() => setTab(BookMarkTab[item])}
            >
              <View
                className={`py-3 border-b-2 ${
                  tab === BookMarkTab[item]
                    ? 'border-b-primary'
                    : 'border-b-neutral-400'
                }`}
              >
                <Text
                  className={`text-base text-center font-bold ${
                    tab === BookMarkTab[item]
                      ? 'text-primary'
                      : 'text-neutral-400'
                  }`}
                >
                  {BookMarkTab[item]}
                </Text>
              </View>
            </TouchableOpacity>
          )
        )}
      </Stack>
      <View>
        {tab === BookMarkTab.JobPost ? (
          <FlatList
            data={bookmarkedJobPost}
            keyExtractor={item => item.node.uuid}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigator.openJobPostDetailScreen({ uuid: item.node.uuid })
                }
              >
                <View className="bg-white mb-3 p-4">
                  <Text className="mb-2 font-bold text-primary">
                    {item.node.jobType}
                  </Text>
                  <Text className="mb-1 text-lg font-bold">
                    {item.node.title}
                  </Text>
                  <Text className="mb-3 font-semibold text-gray-600">
                    {item.node.companyName}
                  </Text>
                  <Text className="mb-3 font-semibold text-gray-400">
                    {item.node.siDo}-{item.node.siGunGu}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        ) : (
          <FlatList
            data={visaBookmarkList}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setSelectedVisaCode(item);
                  bottomSheetRef?.current?.present();
                }}
              >
                <View className="bg-white mb-3 p-4">
                  <Text className="mb-2 font-bold text-primary">{item}</Text>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['80%']}
        HeaderComponent={
          <VisaInfoBoxHeader
            title={`${selectedVisaCode?.toUpperCase()}(${
              VisaInfo[selectedVisaCode as keyof typeof VisaInfo]?.title
            })`}
            onClose={() => bottomSheetRef?.current?.close()}
            isBookmarked={isBookmarked}
            toggleBookmark={() => toggleBookmark(selectedVisaCode)}
          />
        }
      >
        <VisaInfoBoxContent
          description={
            VisaInfo[selectedVisaCode as keyof typeof VisaInfo]?.description ||
            ''
          }
          subject={
            VisaInfo[selectedVisaCode as keyof typeof VisaInfo]?.subject || ''
          }
          document={
            VisaInfo[selectedVisaCode as keyof typeof VisaInfo]?.document || ''
          }
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default MyBookMarkScreen;
