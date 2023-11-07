import React from "react";
import { ScrollView, View } from "react-native";
import {
  SearchJobMainBanner,
  SearchJobPostListSection,
  SearchJobFilterSection,
} from "app/components/pages/searchJob";
import VStack from "app/components/blocks/Stack/VStack";

const SearchJobScreen: React.FC = () => {
  return (
    <ScrollView>
      <View className="py-6 bg-white">
        <SearchJobMainBanner />
      </View>
      <SearchJobPostListSection />
      <VStack space={4}>
        <SearchJobFilterSection />
      </VStack>
    </ScrollView>
  );
};

export default SearchJobScreen;
