import { createSlice } from '@reduxjs/toolkit';
import { setOfferCommentsAction } from './action';
import { Review } from '../types';

interface OfferCommentsState {
  offerComments: Review[];
}

const initialState: OfferCommentsState = {
  offerComments: [],
};

const offerCommentsSlice = createSlice({
  name: 'offerComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setOfferCommentsAction, (state, action) => {
      state.offerComments = action.payload;
    });
  },
});

export default offerCommentsSlice.reducer;
