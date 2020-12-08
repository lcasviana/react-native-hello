import * as React from 'react';
import { View, Text } from 'react-native';

export const RedditItem = ({ item }: { item: any }) => (
  <View>
    <Text> {item.data.title} </Text>
  </View>
);