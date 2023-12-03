import { createSlice } from "@reduxjs/toolkit";

const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: {
    allMessages: [],
    selectedMessageIds: [],
    selectedSort: "",
  },
  reducers: {
    setAllMessages: (state, action) => {
      state.allMessages = action.payload;
    },
    setSelectedMessageIds: (state, action) => {
      state.selectedMessageIds = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    }
  },
});

export const {
    setAllMessages,
    setSelectedMessageIds,
    setSelectedSort,
} = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
