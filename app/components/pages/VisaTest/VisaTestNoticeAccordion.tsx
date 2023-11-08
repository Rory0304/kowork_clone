import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import ChevronUpIcon from "react-native-heroicons/solid/ChevronUpIcon";
import ChevronDownIcon from "react-native-heroicons/solid/ChevronDownIcon";
import PhoneIcon from "react-native-heroicons/solid/PhoneIcon";
import Stack from "app/components/blocks/Stack/Stack";

const VisaTesetNoticeAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const animatedHeightValue = useSharedValue(1);
  const contentBodyHeight = useSharedValue(100);

  const toggleOpen = () => {
    toggleAnimationValue(!isOpen);
    setIsOpen(!isOpen);
  };

  const toggleAnimationValue = (isOpen: boolean) => {
    if (isOpen) {
      animatedHeightValue.value = withTiming(1, {
        duration: 200,
      });
    } else {
      animatedHeightValue.value = withTiming(0, {
        duration: 200,
      });
    }
  };

  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, contentBodyHeight.value]
    );
    return {
      height: height,
    };
  });

  return (
    <View className="px-3 py-2 mb-2 transition-all bg-gray-100 border rounded border-neutral-500">
      <View className={`${isOpen ? "border-b pb-2" : ""} border-neutral-300`}>
        <TouchableOpacity onPress={toggleOpen}>
          <Stack styles="justify-between items-center">
            <Text className="text-sm">
              새로운 기준/요건이 업데이트될 수 있어요.
            </Text>
            {isOpen ? (
              <ChevronUpIcon width={20} height={20} />
            ) : (
              <ChevronDownIcon width={20} height={20} />
            )}
          </Stack>
        </TouchableOpacity>
      </View>
      <Animated.View style={[{ overflow: "hidden" }, animatedHeight]}>
        <View
          className="absolute"
          onLayout={(event) => {
            contentBodyHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <Text className="my-2 text-sm text-neutral-500">
            보다 정확한 정보는 [외국인종합센터]로 연락하여 확인이 가능해요.
          </Text>
          <Stack styles="items-center mb-1" columnGap={8}>
            <PhoneIcon width={18} height={18} />
            <Text>국내: (국번없이)1345</Text>
          </Stack>
          <Stack styles="items-center mb-1" columnGap={8}>
            <PhoneIcon width={18} height={18} />
            <Text>해외: +82-1345</Text>
          </Stack>
        </View>
      </Animated.View>
    </View>
  );
};

export default VisaTesetNoticeAccordion;
