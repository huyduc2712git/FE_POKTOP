import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';

const videoData = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
];

const useShortVideo = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [currentViewableItemIndex, setCurrentViewableItemIndex] = useState(0);
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentViewableItemIndex(viewableItems[0].index ?? 0);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  useEffect(() => {
    // fetch(
    //   'https://hcm03.vstorage.vngcloud.vn/v1/AUTH_349c8b85955a49f192a4b9b0c9d58020/mobile/dataSample/videoData.json',
    // )
    //   .then(response => response.json())
    //   .then(data => setVideos(data?.guide_video_url))
    //   .catch(error => console.error('Error:', error));
    setVideos(videoData);
  }, [videoData]);

  return {
    videos,
    currentViewableItemIndex,
    viewabilityConfigCallbackPairs,
  };
};
export default useShortVideo;
