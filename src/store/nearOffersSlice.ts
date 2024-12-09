import { createSlice } from '@reduxjs/toolkit';
import { setNearOffersAction } from './action';
import { Offer } from '../types';

interface NearOffersState {
  nearOffers: Offer[];
}

const initialState: NearOffersState = {
  nearOffers: [],
};

const nearOffersSlice = createSlice({
  name: 'nearOffers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setNearOffersAction, (state, action) => {
      state.nearOffers = action.payload;
    });
  },
});

export default nearOffersSlice.reducer;
