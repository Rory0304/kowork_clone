import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";
import TitleAndDescriptionSection from "app/components/pages/global/Section/TitleAndDescriptionSection";

interface VisaPlanProps {
  visaType: string;
  visaName: string;
}

const VISA_PLAN: VisaPlanProps[] = [
  {
    visaType: "D-2",
    visaName: "학생비자",
  },
  {
    visaType: "D-10",
    visaName: "구직비자",
  },
  {
    visaType: "E-7",
    visaName: "전문직비자",
  },
  {
    visaType: "F-2",
    visaName: "거주비자",
  },
];

const VisaPlanSection: React.FC = () => {
  const Item = ({ visaName, visaType }: VisaPlanProps) => (
    <Stack direction="column" styles="border justify-center mr-1">
      <Text className="mb-2 font-bold text-center">{visaType}</Text>
      <Text className="text-xs font-semibold text-center text-primary">
        {visaName}
      </Text>
    </Stack>
  );

  const BlueDotLine: React.FC = () => {
    const dotStyle =
      "absolute w-2 h-2 bg-black rounded-full top-[-4px] left-[-1px]";

    return (
      <View className={`mb-4 flex flex-row`}>
        <View className={`relative w-32 border `} style={{}}>
          <View className="absolute w-2 h-2 bg-black  rounded-full top-[-4px] right-[-9]" />
          <View className="absolute w-2 h-2 bg-black  rounded-full top-[-4px] right-[35]" />
          <View className="absolute w-2 h-2 bg-black  rounded-full top-[-4px] left-[35]" />
          <View className="absolute w-2 h-2 bg-black rounded-full top-[-4px] left-[-9]" />
        </View>
      </View>
    );
  };

  return (
    <TitleAndDescriptionSection
      title="평균 비자 플랜"
      description="많은 외국인들이 계획하는 비자 로드맵은 다음과 같아요!"
    >
      <Stack styles="border border-gray-200 rounded-l-lg bg-gray-50 justify-between items-center overflow-hidden">
        <Stack direction="column" styles="items-center py-4 flex-1">
          <BlueDotLine />
          <FlatList
            horizontal
            data={VISA_PLAN}
            scrollEnabled={false}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.visaType}
          />
        </Stack>
        <Stack
          direction="column"
          styles="px-3 py-2 bg-primary justify-center border"
        >
          <>
            <Image
              alt=""
              source={require("../../../../assets/images/flag.png")}
              resizeMode="contain"
              style={{
                objectFit: "contain",
                width: 50,
                height: 50,
              }}
            />
            <Text className="mb-2 font-bold text-center text-white">F-5</Text>
            <Text className="text-xs font-semibold text-center text-white">
              영주권
            </Text>
          </>
        </Stack>
      </Stack>
    </TitleAndDescriptionSection>
  );
};

export default VisaPlanSection;
