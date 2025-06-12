import { createSlice } from "@reduxjs/toolkit";
const AppSlice = createSlice({ 
  name : "app", 
  initialState : {
    isMenuOpen: false, // Initial state for the menu
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false; // Action to close the menu
    },
  },
});
export const { toggleMenu ,closeMenu } = AppSlice.actions;
export default AppSlice.reducer;