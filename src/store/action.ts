import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS'
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value: City) => ({
  payload: value,
}));

export const fillOffersAction = createAction(Action.FILL_OFFERS, (value: Offer[]) => ({
  payload: value,
}));
