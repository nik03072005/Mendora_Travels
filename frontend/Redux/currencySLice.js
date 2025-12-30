import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'INR', // Default currency
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrency, setLoading, setError } = currencySlice.actions;
export default currencySlice.reducer;