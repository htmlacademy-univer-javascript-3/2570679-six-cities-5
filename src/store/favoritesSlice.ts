import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types';
import { addToFavoritesAction, removeFromFavoritesAction, setFavoriteOffersAction } from './action';

interface FavoritesState {
  favoriteOffers: Offer[];
}

const initialState: FavoritesState = {
  favoriteOffers: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavoritesAction, (state, action: PayloadAction<Offer>) => {
        state.favoriteOffers.push(action.payload);
      })
      .addCase(removeFromFavoritesAction, (state, action: PayloadAction<Offer>) => {
        state.favoriteOffers = state.favoriteOffers.filter(
          (offer) => offer.id !== action.payload.id
        );
      })
      .addCase(setFavoriteOffersAction, (state, action: PayloadAction<Offer[]>) => {
        state.favoriteOffers = action.payload;
      });
  },
});

export default favoritesSlice.reducer;
