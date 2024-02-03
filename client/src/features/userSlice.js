



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null, 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.email = null;
      state.token = null; 
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;