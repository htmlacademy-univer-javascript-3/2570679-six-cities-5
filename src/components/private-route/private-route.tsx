import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../enums';
import { PropsWithChildren } from 'react';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
}>;

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
