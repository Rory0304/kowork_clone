import React from 'react';

import { useMutation } from '@apollo/client';

import { useAuth } from 'app/contexts/AuthProvider';
import {
  InsertPostBookmarkByIdsDocument,
  InsertPostBookmarkByIdsMutation,
  RemovePostBookmarkByIdsDocument,
  RemovePostBookmarkByIdsMutation,
} from 'app/graphql/generated';

interface useJobPostBookmarkProps {
  bookmarkStatus: Boolean;
  updateSuccessCallback?: () => void;
  updateFailCallback?: () => void;
}

/**
 * job post bookmark 의 상태를 관리함
 */
const useJobPostBookmark = ({
  bookmarkStatus,
  updateSuccessCallback,
  updateFailCallback,
}: useJobPostBookmarkProps) => {
  const { userInfo } = useAuth();

  const [isBookMarked, setIsBookMarked] = React.useState(bookmarkStatus);
  const prevIsBookMarked = React.useRef(isBookMarked);

  const [insertBookMark] = useMutation<InsertPostBookmarkByIdsMutation>(
    InsertPostBookmarkByIdsDocument
  );

  const [deleteBookMark] = useMutation<RemovePostBookmarkByIdsMutation>(
    RemovePostBookmarkByIdsDocument
  );

  React.useEffect(() => {
    setIsBookMarked(bookmarkStatus);
  }, [bookmarkStatus]);

  const toggleBookmark = React.useCallback(
    async (jobPostId: string) => {
      try {
        if (isBookMarked) {
          setIsBookMarked(false);
          await deleteBookMark({
            variables: { userId: userInfo?.id, jobPostId },
          });
        } else {
          setIsBookMarked(true);
          await insertBookMark({
            variables: { userId: userInfo?.id, jobPostId },
          });
        }

        if (typeof updateSuccessCallback === 'function') {
          updateSuccessCallback(); // ex: show snackbar
        }
      } catch (err) {
        if (typeof updateFailCallback === 'function') {
          setIsBookMarked(prevIsBookMarked.current);
          updateFailCallback();
        }
      }
    },
    [isBookMarked]
  );

  return { isBookMarked, toggleBookmark };
};

export default useJobPostBookmark;
