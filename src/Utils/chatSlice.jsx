import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    liveChats: [],
  },
  reducers:{
    addMessage:(state, action) => {
      state.liveChats.splice(25, 1)
      state.liveChats.unshift(action.payload);
    }
  },
});
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;