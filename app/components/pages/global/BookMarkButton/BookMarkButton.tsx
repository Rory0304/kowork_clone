import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmptyStarIcon from 'react-native-heroicons/outline/StarIcon';
import FilledStarIcon from 'react-native-heroicons/solid/StarIcon';

import { customColors } from 'app/constants/styles/Colors';
import useJobPostBookmark from 'app/hooks/useJobPostBookmark';

interface BookMarkButtonProps {
  jobPostId: string;
  bookmarkStatus: Boolean;
}

// [TODO] Refactor this
const BookMarkButton: React.FC<BookMarkButtonProps> = ({
  jobPostId,
  bookmarkStatus,
}) => {
  const { toggleBookmark, isBookMarked } = useJobPostBookmark({
    bookmarkStatus,
  });

  return (
    <TouchableOpacity onPress={() => toggleBookmark(jobPostId)}>
      {isBookMarked ? (
        <FilledStarIcon fill={customColors.primary} />
      ) : (
        <EmptyStarIcon color={customColors.primary} />
      )}
    </TouchableOpacity>
  );
};

export default BookMarkButton;
