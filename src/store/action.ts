import { createAction } from '@reduxjs/toolkit';
import { City, Offer, UserData } from '../types';
import { AuthorizationStatus, SortingOption } from '../enums';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_OFFERS_SORTING: 'CHANGE_OFFERS_SORTING',
  FILL_OFFERS: 'FILL_OFFERS',
  CHANGE_AUTH_STATUS: 'CHANGE_AUTH_STATUS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_USER_DATA: 'SET_USER_DATA'
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (value: City) => ({
  payload: value,
}));

export const setOffersAction = createAction(Action.FILL_OFFERS, (value: Offer[]) => ({
  payload: value,
}));

export const changeOffersSortingAction = createAction(Action.CHANGE_OFFERS_SORTING, (value: SortingOption) => ({
  payload: value,
}));

export const changeAuthStatusAction = createAction<AuthorizationStatus>(Action.CHANGE_AUTH_STATUS);

export const setOffersLoadingStatus = createAction(Action.SET_OFFERS_LOADING_STATUS, (value: boolean) => ({
  payload: value,
}));

export const setUserDataAction = createAction(Action.SET_USER_DATA, (value: UserData) => ({
  payload: value,
}));
