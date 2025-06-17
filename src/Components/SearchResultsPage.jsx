import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Youtube_Search_Api_Url } from "../Utils/constants";
import VideoCards from "./VideoCards";

const SearchResultsPage = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&type=video&key=AIzaSyCJLV9O0mm0p3r46yqVPLAfPdvPsBZdVoo`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTerm) fetchVideos();
  }, [searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results for: {searchTerm}</h2>
      <div className="flex flex-wrap gap-4">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link key={video.id.videoId} to={`/resu?v=${video.id.videoId}`}>
              <VideoCards info={video} />
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
