import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';

const videoData = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://rr3---sn-8qj-q5qes.googlevideo.com/videoplayback?expire=1719819692&ei=TAmCZrHQBrWo1d8P_8my2A4&ip=14.241.224.137&id=o-ALRANu6eSfsA-FkUFIn0xahC_kmERll7yVfHUkauzE1a&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Tc&mm=31%2C29&mn=sn-8qj-q5qes%2Csn-i3belnl7&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=677500&bui=AbKP-1PXlFqF72DSrQj7bQeDDzNLhIvwqwrIaH_76pEoerpeLlGkuNQe_Kut2zg0O-6zsuvY7ckRQHkN&vprv=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=59.628&lmt=1666398060255774&mt=1719797567&fvip=2&c=ANDROID_EMBEDDED_PLAYER&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgbaO9avJcJfxJDwhXMR9tYYoyzGPrEPMuQca8lusndSACIDdG13tTWz4w2c0bODPRFRiRDW-h6hNwy7xyb0-yc4zs&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHlkHjAwRgIhAMjys-ldRcrb3iNdH65C0Bb_8Zwc3Ok3L3-SJbG61sKVAiEA3K0z9aoyXPszMZ4Q8Udow6pML7NT623TbSlUOZkDj6I%3D',
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
