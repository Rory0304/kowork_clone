import React from 'react';

import { useMutation, useQuery } from '@apollo/client';

import { useAuth } from 'app/contexts/AuthProvider';
import {
  GetVisaBookmarkByUserIdDocument,
  GetVisaBookmarkByUserIdQuery,
  InsertVisaBookmarkDocument,
  InsertVisaBookmarkMutation,
  InsertVisaBookmarkMutationVariables,
  UpdateVisaBookmarkDocument,
  UpdateVisaBookmarkMutation,
  UpdateVisaBookmarkMutationVariables,
} from 'app/graphql/generated';

interface useVisaBookmarkProps {
  visaCode: string;
  updateSuccessCallback?: () => void;
  updateFailCallback?: () => void;
}

const useVisaBookmark = ({
  visaCode,
  updateFailCallback,
  updateSuccessCallback,
}: useVisaBookmarkProps) => {
  const { userInfo } = useAuth();
  const [isBookmarked, setIsBookmarked] = React.useState<Boolean>(false);
  const [visaBookmarkList, setVisaBookmarkList] = React.useState<
    string[] | undefined
  >();

  const { data: visaBookmarkData, refetch } =
    useQuery<GetVisaBookmarkByUserIdQuery>(GetVisaBookmarkByUserIdDocument, {
      variables: {
        userId: userInfo?.id,
      },
    });

  console.log(visaBookmarkList);

  const [insertBookMark] = useMutation<
    InsertVisaBookmarkMutation,
    InsertVisaBookmarkMutationVariables
  >(InsertVisaBookmarkDocument);

  const [bulkUpdateBookMark] = useMutation<
    UpdateVisaBookmarkMutation,
    UpdateVisaBookmarkMutationVariables
  >(UpdateVisaBookmarkDocument, {});

  React.useEffect(() => {
    // visa code field exists
    if (visaBookmarkData?.visaBookmarkCollection?.edges?.[0]?.node?.visa_code) {
      const visaCodes =
        visaBookmarkData?.visaBookmarkCollection?.edges?.[0]?.node.visa_code.filter(
          Boolean
        ) as string[];
      setVisaBookmarkList(visaCodes);
    }
  }, [visaBookmarkData]);

  React.useEffect(() => {
    setIsBookmarked(checkIsBookmarked(visaCode));
  }, [visaBookmarkList, visaCode]);

  const checkIsBookmarked = React.useCallback(
    (visaCode: string) => {
      return Boolean(visaBookmarkList?.includes(visaCode));
    },
    [visaBookmarkList]
  );

  const toggleBookmark = React.useCallback(
    async (visaCode: string) => {
      const isBookmarked = checkIsBookmarked(visaCode);

      try {
        // if book mark not yet created, then insert row first
        if (typeof visaBookmarkList === 'undefined') {
          await insertBookMark({
            variables: {
              userId: userInfo?.id,
              visaCodes: [visaCode],
            },
          });
        } else {
          const newVisaBookmarkList = isBookmarked
            ? visaBookmarkList?.filter(elem => elem !== visaCode)
            : [...(visaBookmarkList || []), visaCode];

          await bulkUpdateBookMark({
            variables: {
              userId: userInfo?.id,
              visaCodes: newVisaBookmarkList,
            },
          });
        }

        refetch();

        if (typeof updateSuccessCallback === 'function') {
          updateSuccessCallback(); // ex: show snackbar
        }
      } catch (err) {
        if (typeof updateFailCallback === 'function') {
          updateFailCallback();
        }
      }
    },
    [visaBookmarkList]
  );

  return { isBookmarked, visaBookmarkList, checkIsBookmarked, toggleBookmark };
};

export default useVisaBookmark;
