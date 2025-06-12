import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name : "theme",
  initialState : {
    darkMode: false, // Initial state for dark mode
  },
  reducers:{
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Toggle dark mode
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload; // Set dark mode based on payload
    },
  }
  });
  export const { toggleTheme, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;

