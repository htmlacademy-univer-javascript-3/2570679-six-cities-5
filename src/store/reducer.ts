import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { OffersMock } from '../mocks/offers';
import { fillOffersAction, changeCityAction } from './action';


export type State = {
    city: City;
    offers: Offer[];
};

const initialState: State =
{
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  offers: OffersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state: State, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state: State, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    });
});
