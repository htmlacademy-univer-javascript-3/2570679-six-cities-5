import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, Offer, UserData } from '../types.js';
import { changeAuthStatusAction, setOffersAction, setOffersLoadingStatus, setUserDataAction } from '../store/action.js';
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
