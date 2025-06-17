import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { toggleMenu } from "../Utils/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import Mode from "./Mode";
import { Youtube_Search_Api_Url } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((store) => store.theme.darkMode);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);
  const searchcache = useSelector((store) => store.search.cacheResults);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggestions(searchcache[searchQuery]);
      } else {
        getSearchQuery();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchQuery = async () => {
    const response = await fetch(Youtube_Search_Api_Url + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };

  const handleSearch = (query = searchQuery) => {
    if (query.trim() !== "") {
      navigate(`/results?q=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };

  return (
    <header className="flex items-center justify-between p-3 shadow-md">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button onClick={toggleMenuHandler} className="p-2 rounded-full cursor-pointer transition-colors duration-200">
          <GiHamburgerMenu size={24} />
        </button>

        <a href="/" className="flex items-center">
          <img
            src={
              darkMode
                ? "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo_dark.svg"
                : "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            }
            alt="YouTube Logo"
            className="h-8 transition-opacity duration-300"
          />
        </a>
      </div>

      {/* Center: Search */}
      <div className="relative flex flex-1 max-w-xl mx-6 flex-col">
        <div className="flex">
          <input
            className="flex-1 h-10 px-4 rounded-l-full border border-gray-300 
              focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300
              shadow-sm hover:border-blue-300 transition-colors duration-200"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="Search"
          />
          <button
            onClick={() => handleSearch()}
            className="h-10 px-4 bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center mx-0.5"
          >
            <IoIosSearch size={22} className="text-gray-800 dark:text-white" />
          </button>
        </div>

        {/* Dropdown list */}
        {showsuggestions && (
          <ul className="absolute top-11 bg-white dark:bg-gray-800 shadow-md rounded w-full z-10 text-sm text-gray-900 dark:text-white">
            {suggestions?.length > 0 &&
              suggestions.map((s, index) => (
                <li
                  key={index}
                  onMouseDown={() => {
                    setSearchQuery(s);
                    handleSearch(s);
                  }}
                  className="px-4 py-1 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  <IoIosSearch className="text-gray-500 dark:text-gray-300" />
                  {s}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Right: User */}
      <div className="flex items-center focus:ring-blue-500">
        <Mode />
        <FaUserCircle size={32} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Head;
