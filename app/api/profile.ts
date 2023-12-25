import type { ProfileType } from 'app/types/Profile';
import { supabaseClient } from 'app/utils/supabase';

import client from '../graphql/client';
import {
  GetProfileDocument,
  GetProfileQuery,
  GetProfileQueryVariables,
} from '../graphql/generated';
import { getFetchPolicy } from '../utils/getFetchPolicy';

interface GetProfileByUserIdProps {
  userId: string;
}

export const getProfileByUserId = async ({
  userId,
}: GetProfileByUserIdProps) => {
  const { data } = await client.query<
    GetProfileQuery,
    GetProfileQueryVariables
  >({
    query: GetProfileDocument,
    variables: {
      userId: userId,
    },
    fetchPolicy: getFetchPolicy(),
  });

  const profile = data.profileCollection?.edges?.[0]?.node || null;

  return { profile };
};

interface InsertProfileDataProps extends ProfileType {
  userId: string;
}

export const insertProfileData = async (props: InsertProfileDataProps) => {
  const { data, error } = await supabaseClient
    .from('Profile')
    .insert({ ...props });

  if (error) {
    throw new Error('fail to insert profile data');
  }

  return data;
};
