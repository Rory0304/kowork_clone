import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EmptyStarIcon from 'react-native-heroicons/outline/StarIcon';
import CheckCircleIcon from 'react-native-heroicons/solid/CheckCircleIcon';
import DocumentTextIcon from 'react-native-heroicons/solid/DocumentTextIcon';
import FilledStarIcon from 'react-native-heroicons/solid/StarIcon';
import UserCircleIcon from 'react-native-heroicons/solid/UserCircleIcon';

import { Stack } from 'app/components/blocks';
import { BottomSheetCloseBtn } from 'app/components/blocks/BottomSheet/BottomSheet';
import { customColors } from 'app/constants/styles/Colors';

interface VisaInfoBoxHeaderProps {
  title: string;
  isBookmarked: Boolean;
  onClose: () => void;
  toggleBookmark: () => void;
}

interface VisaInfoBoxContentProps {
  description: string;
  subject: string;
  document: string;
}

export const VisaInfoBoxHeader: React.FC<VisaInfoBoxHeaderProps> = ({
  title,
  isBookmarked,
  onClose,
  toggleBookmark,
}) => {
  return (
    <React.Fragment>
      <BottomSheetCloseBtn onClose={onClose} />
      <Text className="text-base font-bold">{title}</Text>
      <TouchableOpacity onPress={toggleBookmark}>
        {isBookmarked ? (
          <FilledStarIcon fill={customColors.primary} />
        ) : (
          <EmptyStarIcon color={customColors.primary} />
        )}
      </TouchableOpacity>
    </React.Fragment>
  );
};

const VisaInfoBottomSheetContent = ({
  Icon,
  title,
  content,
}: {
  Icon: React.ReactNode;
  title: string;
  content: string;
}) => {
  return (
    <View className="bg-gray-50 rounded-lg p-4">
      <View className="pb-2 mb-4 flex flex-row items-center border-b border-gray-300">
        {Icon}
        <Text className="ml-2 font-bold text-neutral-500 text-base">
          {title}
        </Text>
      </View>
      <View>
        <Text className="text-neutral-500 text-base">{content}</Text>
      </View>
    </View>
  );
};

export const VisaInfoBoxContent: React.FC<VisaInfoBoxContentProps> = ({
  description,
  subject,
  document,
}) => {
  return (
    <ScrollView>
      <Stack direction="column" rowGap={8} styles="p-4">
        <VisaInfoBottomSheetContent
          Icon={<DocumentTextIcon fill={customColors.neutral[500]} />}
          title="설명"
          content={description}
        />
        <VisaInfoBottomSheetContent
          Icon={<UserCircleIcon fill={customColors.neutral[500]} />}
          title="대상자"
          content={subject}
        />
        <VisaInfoBottomSheetContent
          Icon={<CheckCircleIcon fill={customColors.neutral[500]} />}
          title="필요서류"
          content={document}
        />
      </Stack>
    </ScrollView>
  );
};
