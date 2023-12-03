import { createSlice } from "@reduxjs/toolkit";

const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: {
    allMessages: [],
    selectedMessageIds: [],
    selectedSort: "",
    pagination: {
      pageSize: 5,
      currentPage: 1,
      totalPages: 1,
    }
  },
  reducers: {
    setAllMessages: (state, action) => {
      state.allMessages = action.payload;
    },
    setCurrentMessages: (state, action) => {
      state.currentMessages = action.payload;
    },
    setSelectedMessageIds: (state, action) => {
      state.selectedMessageIds = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.pagination.totalPages = action.payload;
    }
  },
});

export const {
    setAllMessages,
    setSelectedMessageIds,
    setSelectedSort,
    setCurrentPage,
    setTotalPages,
    setCurrentMessages
} = messageBoardSlice.actions;
export default messageBoardSlice.reducer;
