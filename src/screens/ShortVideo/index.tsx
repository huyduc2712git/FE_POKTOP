import useShortVideo from '@hooks/useShortVideo';
import { ResizeMode, Video } from 'expo-av';
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import VideoItems from './components/VideoItems';

interface ShortVideoScreenProps {}

const ShortVideoScreen = (props: ShortVideoScreenProps) => {
  const { videos, currentViewableItemIndex, viewabilityConfigCallbackPairs } =
    useShortVideo();
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <VideoItems
            item={item}
            shouldPlay={index === currentViewableItemIndex}
          />
        )}
        keyExtractor={item => item}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
};

export default ShortVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
