import React from 'react';
import { ScrollView, View } from 'react-native';

import {
  SearchJobFilterSection,
  SearchJobMainBanner,
  SearchJobPostListSection,
} from 'app/components/pages/searchJob';

const SearchJobScreen: React.FC = () => {
  return (
    <ScrollView>
      <View className="py-6 bg-white">
        <SearchJobMainBanner />
      </View>
      <SearchJobPostListSection />
      <SearchJobFilterSection />
    </ScrollView>
  );
};

export default SearchJobScreen;
