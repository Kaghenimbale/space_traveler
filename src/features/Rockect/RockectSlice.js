import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketItems: [],
};

const fetchRockets = createAsyncThunk('rockect/fecthRocket', async () => {
  try {
  } catch (error) {}
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: {},
});

export default rocketSlice.reducer;
