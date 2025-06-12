import React, {  useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { Youtube_Video_Api_Url } from '../Utils/constants'
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => { getVideos()}, [])
  const getVideos =async () => {
    const response =   await fetch(Youtube_Video_Api_Url);
   
    const data = await response.json();
    setVideos(data.items);
    
  };
  return (
    <div>
      <h1>Popular Videos</h1>
      <div className="flex flex-wrap gap-4">
        {videos.map((video) => (
         <Link key={video.id} to= {"watch?v="+ video.id}><VideoCards  info={video} /></Link>
        ))}
      </div> 
    </div>
  )
}
 
export default VideoContainer;