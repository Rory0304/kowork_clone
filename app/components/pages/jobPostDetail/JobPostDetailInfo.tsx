import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Table from "app/components/blocks/Table/Table";
import type {
  JobPostDescriptionInfoType,
  JobPostType,
  preferredVisaListType,
} from "app/types/JobPost";
import JobPostInfoSection from "./JobPostInfoSection";

interface JobPostDetailInfoProps
  extends Pick<JobPostType, "area" | "benefits"> {
  preferredVisaList: preferredVisaListType;
  jobDescription: JobPostDescriptionInfoType;
}

const JobPostDetailInfoDescription: React.FC<{
  jobDescription: JobPostDescriptionInfoType;
}> = ({ jobDescription }) => {
  const { ko, en } = jobDescription;
  const [selectedLang, setSelectedLang] = React.useState<"ko" | "en">("ko");

  const selectedJobDescription = selectedLang === "ko" ? ko : en;

  const configuredData = [
    {
      title: "주요업무",
      content: selectedJobDescription.description,
    },
    {
      title: "자격요건",
      content: selectedJobDescription.qualification,
    },
    {
      title: "우대사항",
      content: selectedJobDescription.preferred,
    },
    {
      title: "기타",
      content: selectedJobDescription.etc,
    },
  ];

  return (
    <>
      <FlatList
        scrollEnabled={false}
        data={configuredData}
        renderItem={({ item }) => (
          <View className="mb-3">
            <Text className="mb-2 text-base font-bold">{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
        style={{
          flexGrow: 0,
        }}
      />
      <TouchableOpacity
        onPress={() =>
          setSelectedLang((current) => (current === "en" ? "ko" : "en"))
        }
      >
        <Text className="py-4 text-xs text-right text-primary">
          {selectedLang === "ko" ? "View in Original Text" : "View in English"}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const JobPostDetailInfo: React.FC<JobPostDetailInfoProps> = ({
  jobDescription,
  area,
  preferredVisaList,
  benefits,
}) => {
  const colHeader = ["업무 상세 설명", "선호 비자", "복리후생", "근무지"];
  const data = [
    <JobPostDetailInfoDescription jobDescription={jobDescription} />,
    <FlatList
      scrollEnabled={false}
      data={preferredVisaList.visa}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item) => `${item}`}
      style={{
        flexGrow: 0,
      }}
    />,
    <Text>{benefits}</Text>,
    <Text>{area}</Text>,
  ];

  return (
    <JobPostInfoSection title="상세 정보">
      <Table variant="vertical" colHeader={colHeader} data={data} />
    </JobPostInfoSection>
  );
};

export default JobPostDetailInfo;
