import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../enums';
import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';

type PrivateRouteProps = PropsWithChildren;

function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useSelector((state: RootState) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
