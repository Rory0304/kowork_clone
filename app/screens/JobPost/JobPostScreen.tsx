import React from 'react';
import { ScrollView, View } from 'react-native';

import {
  SearchJobFilterSection,
  SearchJobMainBanner,
  SearchJobPostListSection,
} from 'app/components/pages/searchJob';

const JobPostScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="py-6 bg-white">
        <SearchJobMainBanner />
      </View>
      <SearchJobPostListSection />
      <SearchJobFilterSection />
    </ScrollView>
  );
};

export default JobPostScreen;
