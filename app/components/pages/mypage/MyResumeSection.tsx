import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Stack from "app/components/blocks/Stack/Stack";
import { useNavigation } from "@react-navigation/native";
import navigate from "app/utils/navigationHelper";
import {
  GetResumeByIdDocument,
  GetResumeByIdQuery,
} from "app/graphql/generated";
import { useAuth } from "app/contexts/AuthProvider";
import ChevronRightIcon from "react-native-heroicons/solid/ChevronRightIcon";
import PencilIcon from "react-native-heroicons/solid/PencilIcon";
import { useQuery } from "@apollo/client";

const MAX_RESUME_STEP = 3;

const MyResumeSection: React.FC = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const { userInfo } = useAuth();

  const { data: myResumeData } = useQuery<GetResumeByIdQuery>(
    GetResumeByIdDocument,
    {
      variables: {
        userId: userInfo?.id,
      },
    }
  );

  const myResume = myResumeData?.resumeCollection?.edges?.[0]?.node;

  const currentStep = myResume?.language ? 3 : myResume?.education ? 2 : 1;

  return (
    <View className="px-4 py-2 border rounded-md bg-gray-50 border-primary">
      <TouchableOpacity
        onPress={() => navigator.openResumeEditBasicInfoScreen()}
      >
        <Stack styles="justify-between items-center">
          <View>
            <Stack styles="items-center">
              <PencilIcon width={20} height={20} />
              <Text className="mb-1 ml-2 text-lg font-bold">이력서 작성</Text>
            </Stack>
            <Text className="text-xs text-neutral-700">
              수고하셨어요! 이력서가 완성되었어요.
            </Text>
          </View>
          <ChevronRightIcon />
        </Stack>
      </TouchableOpacity>
      <Stack styles="items-center my-4 flex-row w-full">
        <View
          className={`h-3 mr-1 ${
            currentStep >= 1 ? "bg-blue-300 border-blue-300" : "bg-gray-300"
          } border-l rounded-l-lg shrink basis-1/4`}
        />
        <View
          className={`h-3 mr-1 ${
            currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"
          } shrink basis-1/4`}
        />
        <View
          className={`h-3 mr-1 ${
            currentStep >= 3 ? "bg-blue-700" : "bg-gray-300"
          } shrink basis-1/4`}
        />
        <View
          className={`h-3  ${
            currentStep >= 3
              ? "bg-blue-800 border-blue-800"
              : "bg-gray-300 border-gray-300"
          } border-l rounded-r-lg shrink rounded-lborder-r basis-1/4`}
        />
      </Stack>
      <Text className="mb-2 text-xs text-neutral-400">
        {currentStep === MAX_RESUME_STEP
          ? "완성! 바뀐 정보는 지속적으로 업데이트 해주세요."
          : currentStep === MAX_RESUME_STEP - 1
          ? "마지막 4단계를 완료해주세요"
          : "3분 안에 빠르게 이력서를 완성해보세요."}
      </Text>
    </View>
  );
};

export default MyResumeSection;
