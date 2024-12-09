import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { OffersMock } from '../mocks/offers';
import { fillOffersAction, changeCityAction, changeOffersSortingAction } from './action';
import { SortingOption } from '../enums';
import { State } from './state-type';


export const initialState: State =
{
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  offers: OffersMock,
  sortingOption: SortingOption.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state: State, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state: State, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(changeOffersSortingAction, (state: State, action: PayloadAction<SortingOption>) => {
      state.sortingOption = action.payload;
    });
});
