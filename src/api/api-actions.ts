import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Offer, OfferDetails, Review, UserData } from '../types.js';
import { changeAuthStatusAction, setNearOffersAction, setOfferCommentsAction, setOfferDetailAction, setOffersAction, setOffersLoadingStatus, setUserDataAction } from '../store/action.js';
import { saveToken, dropToken } from '../api/token.js';
import { APIRoute, AuthorizationStatus } from '../enums.js';
import { AppDispatch, RootState } from '../index.js';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersAction(data));
    dispatch(setOffersLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const data = await api.get<UserData>(APIRoute.Login);
      saveToken(data.data.token);
      dispatch(setUserDataAction(data.data));
      dispatch(changeAuthStatusAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthStatusAction(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const data = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.data.token);
    dispatch(setUserDataAction(data.data));
    dispatch(changeAuthStatusAction(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeAuthStatusAction(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferDetailAction = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/fetchOfferDetail',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferDetails>(APIRoute.Offer.replace(':offerId', offerId));
    dispatch(setOfferDetailAction(data));
  }
);

export const fetchNearOffersAction = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/fetchNearOffers',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.OffersNearby.replace(':offerId', offerId));
    dispatch(setNearOffersAction(data));
  }
);

export const sendCommentAction = createAsyncThunk<
  void,
  { offerId: string; comment: string; rating: number },
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/sendComment',
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Review>(APIRoute.Comments.replace(':offerId', offerId), { comment, rating });
    const dataAfter = await api.get<Review[]>(APIRoute.Comments.replace(':offerId', offerId));
    dispatch(setOfferCommentsAction(dataAfter.data));
  }
);

export const fetchOfferComments = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>(
  'data/fetchOfferComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(APIRoute.Comments.replace(':offerId', offerId));
    dispatch(setOfferCommentsAction(data));
  }
);
