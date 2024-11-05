import Favorites from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Offer from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import { PlaceCard } from '../place-card/place-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
    placeCards: PlaceCard[];
}

function App({placeCards} : AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainPage placeCards={placeCards}/>}
        />
        <Route
          path = {AppRoute.Login}
          element = {<Login/>}
        />
        <Route
          path = {AppRoute.Favorites}
          element =
            {
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites/>
              </PrivateRoute>
            }
        />
        <Route
          path = {AppRoute.Offer}
          element = {<Offer/>}
        />
        <Route
          path = {AppRoute.NonExistent}
          element = {<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
