import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { BiLike } from "react-icons/bi";
const Comment = ({data}) => {
  const { name, comment, likes, replies, timestamp } = data;
  return (
    <div className="flex items-start p-4 border-b border-gray-400 shadow-sm rounded-lg mb-4">
       <FaUserCircle size={28} className="text-gray-600" />
      <div className="ml-2">
        <h3 className="text-sm font-semibold flex">{name}
           <p className="text-xs text-gray-400 mt-1 px-2  ">{timestamp}</p>
        </h3>
        <p className="text-sm ">{comment}</p>
      
          <span className="mx-2 flex "><BiLike size={20} className='my-1'/> {likes} Likes</span>
          
      </div>

    
    </div>
  )
}

export default Comment
