// #region imports
import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
type Props = {} &  RouteComponentProps & AuthContextProps
// #endregion

function LogoutRoute(props: Props) {
  const { disconnectUser } = props;

  useEffect(() => {
    disconnectUser();
  });

  return (
    <Route {...props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

LogoutRoute.displayName = 'LogoutRoute';

export default withRouter<Props>(LogoutRoute);
