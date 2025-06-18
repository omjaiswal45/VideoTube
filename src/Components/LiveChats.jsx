import React, { use, useEffect } from 'react'
import ChatsMessage from './ChatsMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'
import { useSelector } from 'react-redux'; 
import {RandomNamegenerate} from '../Utils/helper'
import {generateRandomText} from '../Utils/helper'
const LiveChats = () => {
  const dispatch = useDispatch();
  const liveChats = useSelector((store) => store.chat.liveChats);

  useEffect(() => {
    const i =setInterval(() => {
      //API call to fetch live chat messages
      // console.log("Fetching live chat messages..."); 
      dispatch(
        addMessage
        ({
          name: RandomNamegenerate () ,
          message: generateRandomText(25),
        }
      ));
    }, 1500);
    return () => clearInterval(i);

  }, [])
  return (
  <div className='w-[370px] h-[415px] mx-2 p-2 border rounded-lg overflow-y-scroll flex flex-col-reverse'>
  {liveChats.map((chat, index) => (
    <ChatsMessage key={index} name={chat.name} message={chat.message} />
  ))}
</div>

  )
}

export default LiveChats 