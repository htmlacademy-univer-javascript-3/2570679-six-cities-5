import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PlaceCardsMock } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCards={PlaceCardsMock}/>
  </React.StrictMode>
);
