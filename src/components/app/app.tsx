import FavoritesPage from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import { Offer, OfferDetails } from '../../types';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../enums';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';

type AppProps = {
  offers: Offer[];
  offersDetails: OfferDetails[];
}

function App({ offers, offersDetails }: AppProps) {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element=
              {
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage favoritesOffers={offers.filter((offer) => offer.isFavorite)} />
                </PrivateRoute>
              }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offersDetails={offersDetails} />}
          >
          </Route>
          <Route
            path="*"
            element={<Navigate to={AppRoute.NotFoundPage} replace />}
          />
          <Route
            path={AppRoute.NotFoundPage}
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
