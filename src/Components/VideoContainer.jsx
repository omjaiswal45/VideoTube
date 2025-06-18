import React, { useEffect, useState } from 'react';
import VideoCards from './VideoCards';
import { Youtube_Video_Api_Url } from '../Utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getVideos = async () => {
    if (isFetching) return;

    setIsFetching(true);
    try {
      const url = nextPageToken
        ? `${Youtube_Video_Api_Url}&pageToken=${nextPageToken}`
        : Youtube_Video_Api_Url;

      const response = await fetch(url);
      const data = await response.json();

      // Append new videos to existing list
      setVideos(prev => [...prev, ...data.items]);
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getVideos(); // Load initial videos
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100 && !isFetching) {
        getVideos(); // Load more videos when near bottom
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching, nextPageToken]);

  return (
    <div>
      <h1 className="text-xl font-bold m-4">Popular Videos</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {videos.map((video) => (
          <Link key={video.id.videoId || video.id} to={"watch?v=" + (video.id.videoId || video.id)}>
            <VideoCards info={video} />
          </Link>
        ))}
      </div>
      {isFetching && <p className="text-center my-4">Loading more videos...</p>}
    </div>
  );
};

export default VideoContainer;
