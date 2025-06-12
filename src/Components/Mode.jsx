import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Utils/themeSlice'; // Adjust the import path as necessary

const Mode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="flex items-center cursor-pointer mx-9" onClick={() => dispatch(toggleTheme())}>
      <MdDarkMode size={32} className="mr-2" />
   
    </div>
  );
};

export default Mode;
