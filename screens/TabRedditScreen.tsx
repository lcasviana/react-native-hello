import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { RedditItem } from '../components/RedditItem';
import { View } from '../components/Themed';
import useRedditResources from '../hooks/useRedditResources';

export default function TabRedditScreen() {
  const results = useRedditResources('javascript');

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={({ item }) => <RedditItem item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
