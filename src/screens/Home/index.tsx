import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import useShortVideo from '../../hooks/useShortVideo';
import { ResizeMode, Video } from 'expo-av';
// import useShortVideo from 'src/hooks/useShortVideo';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const { videos, onLoadVideo } = useShortVideo();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<any>({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videos,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status?.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current?.pauseAsync()
              : video.current?.playAsync()
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  video: {
    width: '100%',
    height: '100%',
  },
});
