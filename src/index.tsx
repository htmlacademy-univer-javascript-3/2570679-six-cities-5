import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';
import { OffersDetailsMock } from './mocks/offers-details';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: reducer,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={OffersMock} offersDetails={OffersDetailsMock} />
    </Provider>
  </React.StrictMode>
);
