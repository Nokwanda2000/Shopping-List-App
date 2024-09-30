// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  // Stores the logged-in user's info
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logout, loginFailure } = authSlice.actions;
export default authSlice.reducer;
