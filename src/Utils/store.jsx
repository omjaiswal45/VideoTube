import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice"; // Import your AppSlice here
import themeSlice from "./themeSlice"; 
import searchSlice from "./searchSlice"; // Import your searchSlice here
const Store = configureStore({
  reducer: { 
      app: AppSlice,  // AppSlice.reducer (a function, not a component)
       // Import your AppSlice here
    // Add your reducers here 
    theme: themeSlice, // Import your themeSlice here
    search: searchSlice, // Import your searchSlice here
  },
});
  export default Store