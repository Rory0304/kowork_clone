import React from 'react';
import { ScrollView, Text } from 'react-native';

const MyNotificationScreen: React.FC = () => {
  const isEmpty = true;

  if (isEmpty) {
    return (
      <ScrollView>
        <Text>알림함이 비어있습니다.</Text>
      </ScrollView>
    );
  }

  return <ScrollView></ScrollView>;
};

export default MyNotificationScreen;
