import { configureStore } from '@reduxjs/toolkit';
import messageBoardReducer from './reducers';

const store = configureStore({
  reducer: {
    messageBoard: messageBoardReducer,
  },
});

export default store;
