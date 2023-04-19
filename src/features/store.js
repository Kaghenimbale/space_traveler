import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
