import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice"; // Import your AppSlice here
import themeSlice from "./themeSlice"; 
import searchSlice from "./searchSlice"; // Import your searchSlice here
import chatSlice from "./chatSlice"; // Import your chatSlice here
const Store = configureStore({
  reducer: { 
      app: AppSlice,  // AppSlice.reducer (a function, not a component)
       // Import your AppSlice here
    // Add your reducers here 
    theme: themeSlice, // Import your themeSlice here
    search: searchSlice, // Import your searchSlice here
    chat: chatSlice, // Import your chatSlice here
  },
});
  export default Store