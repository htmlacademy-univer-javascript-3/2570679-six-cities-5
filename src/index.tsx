import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';
import { OffersDetailsMock } from './mocks/offers-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OffersMock} offersDetails={OffersDetailsMock}/>
  </React.StrictMode>
);
