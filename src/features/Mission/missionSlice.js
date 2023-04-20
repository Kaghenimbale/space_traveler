import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionItems: [],
  isLoading: false,
  error: null,
  isFetched: false,
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = createAsyncThunk(
  'mission/fecthMission',
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
  reducers: {
    reserveMission: (state, action) => {
      const { id } = action.payload;
      const newState = state.missionItems.map((item) => {
        if (item.mission_id !== id) {
          return item;
        }
        return { ...item, reserved: !item.reserved };
      });
      return {
        ...state,
        missionItems: [...newState],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMission.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMission.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        isFetched: true,
        missionItems: action.payload,
      }))
      .addCase(fetchMission.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        missionItems: [],
        error: action.payload,
      }));
  },
});

export const { reserveMission } = missionSlice.actions;

export default missionSlice.reducer;
