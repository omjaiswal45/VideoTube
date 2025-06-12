import React from 'react'

const VideoCards = ({info}) => {
   
  const {snippet, statistics} = info;
  const {title, channelTitle, thumbnails} = snippet;
  
  return (
    <div className='p-2 m-2 w-70 h-auto border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
      <img src={thumbnails.medium.url} alt={title} />
      <h3 className='font-bold'>{title}</h3>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount} views</p>
    </div>
  )
};

export default VideoCards