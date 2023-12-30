import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { BottomSheet, Chip, Stack } from 'app/components/blocks';
import {
  VisaInfoBoxContent,
  VisaInfoBoxHeader,
} from 'app/components/pages/global/BottomSheetContent/VisaInfoBox';
import { VisaCategory, VisaInfo } from 'app/constants/VisaDetail';
import useVisaBookmark from 'app/hooks/useVisaBookmark';

interface GroupItemByCategory {
  visaCode: keyof typeof VisaInfo;
  title: string;
  category: VisaCategory;
  description: string;
  subject: string;
  document: string;
}

type GroupByCategory = {
  [key in VisaCategory]: GroupItemByCategory[];
};

const VisaInfoScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<
    VisaCategory | 'All'
  >('All');
  const [selectedVisa, setSelectedVisa] =
    React.useState<GroupItemByCategory | null>(null);

  const { toggleBookmark, isBookmarked } = useVisaBookmark({
    visaCode: selectedVisa?.visaCode || '',
  });

  // Bottom Sheet
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  const visaGroupByCategory = React.useMemo(
    () =>
      Object.keys(VisaInfo).reduce((acc, cur) => {
        const curVisaInfo = VisaInfo[cur as keyof typeof VisaInfo];
        if (curVisaInfo) {
          const category = curVisaInfo.category;
          const newValue = {
            visaCode: cur as keyof typeof VisaInfo,
            ...curVisaInfo,
          };

          acc[category]
            ? acc[category].push(newValue)
            : (acc[category] = [newValue]);
        }
        return acc;
      }, {} as GroupByCategory),
    [VisaInfo]
  );

  return (
    <ScrollView className="bg-white">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-4"
      >
        <Stack columnGap={8} styles="mx-4">
          <Chip
            key="All"
            label="전체"
            variant="outlined"
            active={selectedCategory === 'All'}
            onPress={() => setSelectedCategory('All')}
          />
          {Object.values(VisaCategory).map(category => (
            <Chip
              key={category}
              label={category}
              variant="outlined"
              active={selectedCategory === category}
              onPress={() => setSelectedCategory(category)}
            />
          ))}
        </Stack>
      </ScrollView>
      <View className="p-4">
        <View className="mb-4">
          <Text className="font-bold text-base mb-2">전체 비자 유형</Text>
          <Text className="font-medium text-secondary">
            모든 비자 유형을 확인하세요!
          </Text>
        </View>
        <View className="flex flex-wrap flex-row gap-4">
          {(selectedCategory === 'All'
            ? Object.values(visaGroupByCategory).flat()
            : visaGroupByCategory[selectedCategory]
          ).map((item, index, arr) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedVisa(item);
                bottomSheetRef?.current?.present();
              }}
              containerStyle={{
                flexShrink: 1,
                flexBasis:
                  index == arr.length - 1 && arr.length % 2 !== 0
                    ? '100%'
                    : '50%',
              }}
            >
              <View className="flex  flex-col bg-gray-100 rounded-xl p-6">
                <Text className="font-bold text-base mb-2 text-center">
                  {item.visaCode.toUpperCase()}
                </Text>
                <Text className="text-secondary text-center">{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['80%']}
        HeaderComponent={
          <VisaInfoBoxHeader
            title={`${selectedVisa?.visaCode.toUpperCase()}(${
              selectedVisa?.title
            })`}
            onClose={() => bottomSheetRef?.current?.close()}
            isBookmarked={isBookmarked}
            toggleBookmark={() => toggleBookmark(selectedVisa?.visaCode || '')}
          />
        }
      >
        <VisaInfoBoxContent
          description={selectedVisa?.description || ''}
          subject={selectedVisa?.subject || ''}
          document={selectedVisa?.document || ''}
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default VisaInfoScreen;
