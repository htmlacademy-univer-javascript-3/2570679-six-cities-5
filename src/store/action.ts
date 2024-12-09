import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferDetails, Review, UserData } from '../types';
import { AuthorizationStatus, SortingOption } from '../enums';

const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_OFFERS_SORTING: 'CHANGE_OFFERS_SORTING',
  FILL_OFFERS: 'FILL_OFFERS',
  CHANGE_AUTH_STATUS: 'CHANGE_AUTH_STATUS',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_OFFER_DETAIL: 'SET_OFFER_DETAIL',
  SET_NEAR_OFFERS: 'SET_NEAR_OFFERS',
  ADD_COMMENT: 'ADD_COMMENT',
  SET_OFFER_COMMENTS: 'SET_OFFER_COMMENTS'
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

export const setOfferDetailAction = createAction<OfferDetails>(Action.SET_OFFER_DETAIL);
export const setNearOffersAction = createAction<Offer[]>(Action.SET_NEAR_OFFERS);
export const addCommentAction = createAction<Review>(Action.ADD_COMMENT);
export const setOfferCommentsAction = createAction<Review[]>(Action.SET_OFFER_COMMENTS);
