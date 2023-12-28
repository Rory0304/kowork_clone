import React from 'react';
import { ScrollView } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { getCompanyById } from 'app/api/company';
import { getJobPostBookmarkByIds } from 'app/api/jobPostBookmark';
import { getJobPostById } from 'app/api/jobPostList';
import VStack from 'app/components/blocks/Stack/VStack';
import BookMarkButton from 'app/components/pages/global/BookMarkButton/BookMarkButton';
import {
  JobPostBasicInfo,
  JobPostCompanyInfo,
  JobPostDetailInfo,
  JobPostHeader,
} from 'app/components/pages/jobPostDetail';
import { useAuth } from 'app/contexts/AuthProvider';
import { useSupabaseClient } from 'app/contexts/SupabaseClientProvider';
import type {
  JobPostDescriptionInfoType,
  preferredVisaListType,
} from 'app/types/JobPost';

type JobPostDetailScreenParamList = {
  params: {
    uuid: string;
  };
};

const JobPostDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { uuid },
  } = useRoute<RouteProp<JobPostDetailScreenParamList, 'params'>>();

  const { userInfo } = useAuth();
  const { supabaseClient } = useSupabaseClient();

  const { data: JobPostData } = useQuery({
    queryKey: ['getJobPostById', uuid],
    queryFn: () =>
      getJobPostById({
        uuid,
      }),
  });

  const companyId = JobPostData?.jobPost?.companyId;

  const {
    data: companyAndFavData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['getCompanyAndFavData', companyId, uuid, supabaseClient],
    queryFn: () =>
      Promise.all([
        getCompanyById({
          uuid: companyId,
        }),
        supabaseClient &&
          getJobPostBookmarkByIds(supabaseClient)({
            jobPostIds: [uuid],
            userId: userInfo?.id || '',
          }),
      ]).then(result => {
        return {
          companyData: result[0].companyData,
          jobPostId: result[1]?.jobPostBookmarks?.[0]?.job_post_id,
        };
      }),
    enabled: Boolean(!!companyId && !!uuid && supabaseClient),
  });

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookMarkButton
          jobPostId={uuid}
          bookmarkStatus={Boolean(companyAndFavData?.jobPostId === uuid)}
        />
      ),
    });
  }, [navigation, companyAndFavData]);

  if (JobPostData?.jobPost) {
    const {
      id,
      title,
      endDate,
      siDo,
      siGunGu,
      jobType,
      employmentArrangement,
      salary,
      workingHoursEnd,
      workingHoursStart,
      workingDays,
      jobDescription,
      preferredVisaList,
      benefits,
      area,
      companyName,
    } = JobPostData?.jobPost;

    return (
      <ScrollView style={{ flex: 1 }}>
        <JobPostHeader
          {...{
            id,
            title,
            endDate,
            siDo,
            siGunGu,
            jobType,
            employmentArrangement,
            salary,
            companyName,
          }}
        />
        <JobPostBasicInfo
          {...{
            jobType,
            workingDays: JSON.parse(workingDays),
            workingHoursEnd,
            workingHoursStart,
            employmentArrangement,
            salary,
          }}
        />
        <VStack space={2} />
        <JobPostDetailInfo
          jobDescription={
            JSON.parse(jobDescription) as JobPostDescriptionInfoType
          }
          preferredVisaList={
            JSON.parse(preferredVisaList) as preferredVisaListType
          }
          area={area}
          benefits={benefits}
        />
        <VStack space={2} />
        <JobPostCompanyInfo {...companyAndFavData?.companyData} />
      </ScrollView>
    );
  }

  return <ScrollView></ScrollView>;
};

export default JobPostDetailScreen;
