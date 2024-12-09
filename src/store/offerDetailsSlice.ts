import { createSlice } from '@reduxjs/toolkit';
import { setOfferDetailAction } from './action';
import { OfferDetails } from '../types';

interface OfferDetailsState {
  offerDetails: OfferDetails | undefined;
}

const initialState: OfferDetailsState = {
  offerDetails: undefined,
};

const offerDetailsSlice = createSlice({
  name: 'offerDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setOfferDetailAction, (state, action) => {
      state.offerDetails = action.payload;
    });
  },
});

export default offerDetailsSlice.reducer;
