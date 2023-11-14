import React from "react";
import Swiper from "react-native-swiper";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";

interface HomeNoticeBannerItemProps {
  id: number;
  category: string;
  subTitle: string;
  title: string;
  img: {
    src: ImageSourcePropType;
    width: number;
    height: number;
  };
  bgColor: string;
}

const HOME_NOTICE_BANNER_LIST: HomeNoticeBannerItemProps[] = [
  {
    id: 1,
    category: "NOTICE",
    subTitle: "비자에 대해 알아보는 시간",
    title: "About E-7 Visa",
    img: {
      src: require("../../../../assets/images/document.png"),
      width: 130,
      height: 130,
    },
    bgColor: "bg-[#edc431]",
  },
  {
    id: 2,
    category: "NOTICE",
    subTitle: "앱 만족도를 실시해요!",
    title: "Survey for satsfaction",
    img: {
      src: require("../../../../assets/images/message-bubble.png"),
      width: 100,
      height: 100,
    },
    bgColor: "bg-[#65e139]",
  },
];

const HomeNoticeBanner: React.FC = () => {
  return (
    <View className="w-full">
      <Swiper
        autoplay
        height={160}
        loop={false}
        showsButtons={false}
        showsPagination={false}
      >
        {HOME_NOTICE_BANNER_LIST.map((item, index) => (
          <Stack
            key={item.id}
            direction="row"
            styles={`${item.bgColor} h-full px-4 items-center justify-between`}
          >
            <Stack direction="column" styles="items-start h-full pt-9">
              <View className="px-2 py-1 mb-3 bg-gray-800 rounded-3xl">
                <Text className="text-[10px] font-bold text-white w-fit">
                  {item.category}
                </Text>
              </View>
              <Text className="text-gray-500">{item.subTitle}</Text>
              <Text className="mb-1 text-lg font-bold">{item.title}</Text>
              <Text className="text-lg text-white">
                <Text>{index + 1}</Text> / {HOME_NOTICE_BANNER_LIST.length}
              </Text>
            </Stack>
            <View>
              <Image
                alt=""
                source={item.img.src}
                resizeMode="contain"
                style={{
                  objectFit: "contain",
                  width: item.img.width,
                  height: item.img.height,
                }}
              />
            </View>
          </Stack>
        ))}
      </Swiper>
    </View>
  );
};

export default HomeNoticeBanner;
