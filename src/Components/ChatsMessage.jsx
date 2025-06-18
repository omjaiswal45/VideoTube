import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const ChatsMessage = ({name, message}) => {
  return (
    <div className='flex items-center py-1' 
    ><FaUserCircle size={25} className="text-gray-600 flex" />
    <span className="font-semibold ml-2 bg-green-500 rounded-br-sm">{name}</span>
    <p className="ml-2">{message}</p>
    </div>
  )
}

export default ChatsMessage