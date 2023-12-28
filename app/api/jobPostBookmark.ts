import { SupabaseClient } from '@supabase/supabase-js';

//
// Get Job Post Fav by Ids
//
interface getJobPostFavByIdsProps {
  jobPostIds: string[];
  userId: string;
}

export const getJobPostBookmarkByIds =
  (supabaseClient: SupabaseClient) =>
  async ({ jobPostIds, userId }: getJobPostFavByIdsProps) => {
    const { data, error } = await supabaseClient
      .from('JobPostBookmark')
      .select('*')
      .in('job_post_id', jobPostIds)
      .eq('user_id', userId);

    if (error) {
      throw new Error('Fail to get job post fav');
    }

    return { jobPostBookmarks: data };
  };
