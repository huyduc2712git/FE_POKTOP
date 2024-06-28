import { useEffect, useState } from 'react';

interface IUseShortVideoProps {}

const useShortVideo = (props: IUseShortVideoProps) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return {};
};
export default useShortVideo;
