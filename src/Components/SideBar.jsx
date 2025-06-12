import React from "react";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div
      className={`
  shadow-xl w-48 p-5sticky top-0 h-screen
  transition-all duration-300 ease-in-out
  ${isMenuOpen ? "translate-x-0" : "-translate-x-48"}
  overflow-y-auto
`}
    >
      <ul>
        <li className="py-1 hover:bg-gray-400 rounded px-2 flex items-center gap-2  hover:cursor-pointer transition-colors duration-200">
          <IoMdHome className="text-lg" /> <Link to ='/' >Home</Link>
        </li>
        <li className="py-1 hover:bg-gray-400 rounded px-2 flex items-center gap-2  hover:cursor-pointer transition-colors duration-200">
          <SiYoutubeshorts className="text-lg" /> Shorts
        </li>
        <li className="py-1 hover:bg-gray-400 rounded px-2 flex items-center gap-2 hover:cursor-pointer transition-colors duration-200">
          <IoLogoYoutube className="text-lg" /> Videos
        </li>
        <li className="py-1 hover:bg-gray-400 rounded px-2 flex items-center gap-2 hover:cursor-pointer transition-colors duration-200">
          <MdWatchLater className="text-lg" /> Watch Later
        </li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Channel 1</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Channel 2</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Channel 3</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Channel 4</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Channel 5</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Trending</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Shopping</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Music</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">Gaming</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">News</li>
      </ul>

      <h1 className="font-bold pt-5">More YouTube</h1>
      <ul>
        <li className="py-1 hover:bg-gray-400 rounded px-2 truncate">
          YouTube Premium
        </li>

        <li className="py-1 hover:bg-gray-400 rounded px-2">YouTube Studio</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">YouTube Music</li>
        <li className="py-1 hover:bg-gray-400 rounded px-2">YouTube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
