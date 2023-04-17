import { configureStore } from '@reduxjs/toolkit';
import rockectReducer from './Rockect/RockectSlice';

const store = configureStore({
  reducer: {
    rocket: rockectReducer,
  },
});

export default store;
