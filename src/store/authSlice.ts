import { createSlice } from '@reduxjs/toolkit';
import { changeAuthStatusAction } from './action';
import { AuthorizationStatus } from '../enums';

interface AuthState {
  authorizationStatus: AuthorizationStatus;
}

const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  },
});

export default authSlice.reducer;
