import React from "react";
import { View, FlatList, Pressable, TouchableOpacity } from "react-native";
import SearchJobPostListItem from "./SearchJobPostListItem";
import ArrowPathIcon from "react-native-heroicons/solid/ArrowPathIcon";
import MapPinIcon from "react-native-heroicons/solid/MapPinIcon";

import Stack from "app/components/blocks/Stack/Stack";
import Chip from "app/components/blocks/Chip/Chip";
import SearchJobAreaBox from "./SearchJobAreaBox";

import { JobType, JobTypeCategory } from "app/constants/JobCategory";

interface JobPostListItemProps {
  id: number;
  title: string;
  company: string;
  jobType: string;
  area: string;
  endDate: string;
  isBookMarked: boolean;
}

const SearchJobFilterSection: React.FC = () => {
  const snapPoints = React.useMemo(() => ["80%"], []);

  const [selectedJobType, setSelectedJobType] = React.useState<string>(
    JobType.All
  );
  const [selectedArea, setSelectedArea] = React.useState<string[]>([]);
  const [searchResult, setSearchResult] = React.useState<
    JobPostListItemProps[]
  >([]);

  const handleOptionResetClick = () => {
    setSelectedJobType(JobType.All);
    setSelectedArea([]);
  };

  React.useEffect(() => {
    setSearchResult([]);
  }, [selectedJobType, selectedArea]);

  return (
    <View className='bg-white'>
      <View className="py-2">
        <Stack styles="justify-between mb-2">
          <>
            <Pressable onPress={handleOptionResetClick}>
              <ArrowPathIcon />
            </Pressable>
            <TouchableOpacity>
              <MapPinIcon />
            </TouchableOpacity>
          </>
        </Stack>
        <Stack>
          {(Object.keys(JobTypeCategory) as Array<keyof typeof JobType>).map(
            (jobTypekey) => (
              <Chip
                key={jobTypekey}
                label={JobTypeCategory[jobTypekey]}
                variant={jobTypekey === "All" ? "filled" : "outlined"}
                active={jobTypekey === selectedJobType}
                onPress={() => setSelectedArea([jobTypekey])}
              />
            )
          )}
        </Stack>
      </View>
      <View>
        <FlatList
          scrollEnabled={false}
          data={searchResult}
          renderItem={({ item }) => <SearchJobPostListItem {...item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </View>
  );
};

export default SearchJobFilterSection;
