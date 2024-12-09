import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { SortingOption } from '../enums';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_OFFERS_SORTING: 'CHANGE_OFFERS_SORTING',
  FILL_OFFERS: 'FILL_OFFERS',
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value: City) => ({
  payload: value,
}));

export const fillOffersAction = createAction(Action.FILL_OFFERS, (value: Offer[]) => ({
  payload: value,
}));

export const changeOffersSortingAction = createAction(Action.CHANGE_OFFERS_SORTING, (value: SortingOption) => ({
  payload: value,
}));
