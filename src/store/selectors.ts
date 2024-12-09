import { createSelector } from 'reselect';
import { Offer } from '../types';
import { RootState } from '..';

const selectCity = (state: RootState) => state.city;
const selectOffers = (state: RootState) => state.offers.offers;

export const selectOffersByCity = createSelector(
  [selectOffers, selectCity],
  (offers, city) => {
    if (Array.isArray(offers)) {
      return offers.filter((offer: Offer) => offer.city.name === city.name);
    }

    return [];
  }
);

