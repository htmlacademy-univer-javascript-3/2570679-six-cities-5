import { combineReducers } from 'redux';
import cityReducer from './citySlice';
import offersReducer from './offersSlice';
import authReducer from './authSlice';
import userDataReducer from './userDataSlice';
import offerDetailsReducer from './offerDetailsSlice';
import nearOffersReducer from './nearOffersSlice';
import offerCommentsReducer from './offerCommentsSlice';
import favoritesOffersReducer from './favoritesSlice';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  auth: authReducer,
  userData: userDataReducer,
  offerDetails: offerDetailsReducer,
  nearOffers: nearOffersReducer,
  offerComments: offerCommentsReducer,
  favoritesOffers: favoritesOffersReducer
});

export default rootReducer;
