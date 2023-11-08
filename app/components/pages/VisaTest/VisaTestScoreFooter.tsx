import React from "react";
import { View, Text, Image } from "react-native";

interface VisaTestScoreFooterProps {
  totalScore: number;
  standardScore: number;
}
const VisaTestScoreFooter: React.FC<VisaTestScoreFooterProps> = ({
  totalScore,
  standardScore,
}) => {
  const isTotalScoreOverStandard = totalScore >= standardScore;
  const imageSrc = isTotalScoreOverStandard
    ? require("../../../../assets/images/clap.png")
    : require("../../../../assets/images/needMoreEmoji.png");

  return (
    <View className="absolute bottom-0 w-full px-4 opacity-90">
      <View className="box-border flex flex-row items-center justify-between px-4 py-3 my-10 bg-white rounded-lg shadow-2xl max-h-14">
        <Image
          alt=""
          style={{
            width: 40,
            height: 40,
          }}
          source={imageSrc}
        />
        <Text className="text-base font-bold text-neutral-600">
          {isTotalScoreOverStandard
            ? `${standardScore} 이상으로 합격이에요!`
            : "점수가 조금 더 필요해요"}
        </Text>
        <Text
          className={`text-2xl font-bold ${
            isTotalScoreOverStandard ? "text-green-400" : "text-neutral-600"
          }`}
        >
          {totalScore}
        </Text>
      </View>
    </View>
  );
};

export default VisaTestScoreFooter;
