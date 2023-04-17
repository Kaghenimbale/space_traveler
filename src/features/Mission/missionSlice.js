import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionItems: [],
  isLoading: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk(
  'rockect/fecthMission',
  async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error.name;
    }
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMission.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMission.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missionItems: action.payload,
      }))
      .addCase(fetchMission.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default missionSlice.reducer;
