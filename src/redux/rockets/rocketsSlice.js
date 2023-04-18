import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  }
);

export const reserveRocket = createAsyncThunk(
  'rockets/reserveRocket',
  async (rocketId) => {
    const response = await axios.patch(`https://api.spacexdata.com/v4/rockets/${rocketId}`, {
      reserved: true
    });
    return response.data;
  }
);

export const cancelRocket = createAsyncThunk(
  'rockets/cancelRocket',
  async (rocketId) => {
    const response = await axios.patch(`https://api.spacexdata.com/v4/rockets/${rocketId}`, {
      reserved: false
    });
    return response.data;
  }
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        return { ...state, status: 'succeeded', rockets: action.payload };
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        return { ...state, status: 'failed', error: action.error.message };
      })
      .addCase(reserveRocket.fulfilled, (state, action) => {
        const index = state.rockets.findIndex((rocket) => rocket.id === action.payload.id);
        const newRockets = [...state.rockets]
        newRockets[index] = action.payload;
        return { ...state, rockets: newRockets };
      })
      .addCase(cancelRocket.fulfilled, (state, action) => {
        const index = state.rockets.findIndex((rocket) => rocket.id === action.payload.id);
        const newRockets = [...state.rockets];
        newRockets[index] = action.payload;
        return { ...state, rockets:newRockets };
      });
  }
});

export default rocketsSlice.reducer;
