import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types';
import { AuthorizationStatus, SortingOption } from '../enums';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_OFFERS_SORTING: 'CHANGE_OFFERS_SORTING',
  FILL_OFFERS: 'FILL_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS'
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

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const setOffersLoadingStatus = createAction(Action.SET_OFFERS_LOADING_STATUS, (value: boolean) => ({
  payload: value,
}));
