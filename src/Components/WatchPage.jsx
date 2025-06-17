import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChats"; // Assuming you have a LiveChats component

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="px-10 py-2 ">
        <div className="flex">
        <iframe
          width="660"
          height="415"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullScreen
        ></iframe>
          <div ><LiveChats/></div>

        </div>
      </div>
    

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
