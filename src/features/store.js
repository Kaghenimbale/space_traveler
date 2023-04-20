import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
