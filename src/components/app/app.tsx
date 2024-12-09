import FavoritesPage from '../favorites/favorites';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import OfferPage from '../offer/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element=
              {
                <PrivateRoute>
                  <FavoritesPage/>
                </PrivateRoute>
              }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage/>}
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
