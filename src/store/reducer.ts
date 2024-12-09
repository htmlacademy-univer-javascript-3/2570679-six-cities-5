import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { setOffersAction as setOffersAction, changeCityAction, changeOffersSortingAction, changeAuthStatusAction, setOffersLoadingStatus, setUserDataAction } from './action';
import { AuthorizationStatus, SortingOption } from '../enums';
import { State } from './state-type';
import { RootState } from '..';


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
  offers: [],
  sortingOption: SortingOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userData: undefined
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state: RootState, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state: RootState, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(changeOffersSortingAction, (state: RootState, action: PayloadAction<SortingOption>) => {
      state.sortingOption = action.payload;
    })
    .addCase(changeAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserDataAction, (state, action) => {
      state.userData = action.payload;
    });
});
