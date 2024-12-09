import { createSlice } from '@reduxjs/toolkit';
import { setOffersAction, setOffersLoadingStatus } from './action';
import { Offer } from '../types';

export interface OffersState {
  offers: Offer[];
  isOffersDataLoading: boolean;
}

const initialState: OffersState = {
  offers: [],
  isOffersDataLoading: false,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOffersAction, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(setOffersLoadingStatus, (state, action) => {
        state.isOffersDataLoading = action.payload;
      });
  },
});

export default offersSlice.reducer;
