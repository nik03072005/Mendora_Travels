import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDestinations = createAsyncThunk(
    'destinations/fetchDestinations',
    async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/destinations/get`);
        if (!response.ok) {
            throw new Error('Failed to fetch destinations');
        }
        return response.json();
    }
)

const destinationSlice = createSlice({
    name:'destinations',
    initialState:{
        destinations: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        // console.log('Fetched payload:', action.payload);
        state.status = 'succeeded';
       state.destinations = action.payload;

      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export default destinationSlice.reducer;