import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const RedditItem = ({ item }: { item: any }) => (
  <View>
    <Text style={styles.item}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)"
    > {!!item?.data?.title && item.data.title} </Text>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  </View>
);

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    padding: 10,
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '100%',
  },
});