import { ResizeMode, Video } from 'expo-av';
import * as React from 'react';
import { memo, useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions } from 'react-native';

interface VideoItemsProps {
  item: string;
  shouldPlay?: boolean;
}

const VideoItems = (props: VideoItemsProps) => {
  const { item, shouldPlay } = props ?? {};
  const video = useRef<Video | null>(null);
  const [status, setStatus] = useState<any>(null);
  useEffect(() => {
    if (!video.current) return;

    if (shouldPlay) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
      video.current.setPositionAsync(0);
    }
  }, [shouldPlay]);

  return (
    <Pressable
      onPress={() =>
        status.isPlaying
          ? video.current?.pauseAsync()
          : video.current?.playAsync()
      }
    >
      <View style={styles.videoContainer}>
        <Video
          ref={video}
          source={{ uri: item }}
          style={styles.video}
          isLooping
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls={false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
    </Pressable>
  );
};

export default memo(VideoItems);

const styles = StyleSheet.create({
  videoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
