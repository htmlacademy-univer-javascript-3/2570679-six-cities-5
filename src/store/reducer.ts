// import { createReducer } from '@reduxjs/toolkit';
// import { setOffersAction as setOffersAction, changeCityAction, changeOffersSortingAction, changeAuthStatusAction, setOffersLoadingStatus, setUserDataAction, setOfferDetailAction, setNearOffersAction, setOfferCommentsAction } from './action';
// import { AuthorizationStatus, SortingOption } from '../enums';
// import { State } from './state-type';
// import { RootState } from '..';


// export const initialState: State =
// {
//   city: {
//     name: 'Paris',
//     location: {
//       latitude: 48.85661,
//       longitude: 2.351499,
//       zoom: 13,
//     },
//   },
//   offers: [],
//   sortingOption: SortingOption.Popular,
//   authorizationStatus: AuthorizationStatus.Unknown,
//   isOffersDataLoading: false,
//   userData: undefined,
//   offerDetails: undefined,
//   nearOffers: [],
//   offerComments: []
// };

// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCityAction, (state: RootState, action) => {
//       state.city = action.payload;
//     })
//     .addCase(setOffersAction, (state: RootState, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(changeOffersSortingAction, (state: RootState, action) => {
//       state.sortingOption = action.payload;
//     })
//     .addCase(changeAuthStatusAction, (state: RootState, action) => {
//       state.authorizationStatus = action.payload;
//     })
//     .addCase(setOffersLoadingStatus, (state: RootState, action) => {
//       state.isOffersDataLoading = action.payload;
//     })
//     .addCase(setUserDataAction, (state: RootState, action) => {
//       state.userData = action.payload;
//     })
//     .addCase(setOfferDetailAction, (state: RootState, action) => {
//       state.offerDetails = action.payload;
//     })
//     .addCase(setNearOffersAction, (state: RootState, action) => {
//       state.nearOffers = action.payload;
//     })
//     .addCase(setOfferCommentsAction, (state: RootState, action) => {
//       state.offerComments = action.payload;
//     });
// });
