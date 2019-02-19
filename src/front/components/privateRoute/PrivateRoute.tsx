// #region imports
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
interface Props extends RouteComponentProps<any>, AuthContextProps {
  // parent
  component: any;
  path: string;
}

interface State {}
// #endregion

function PrivateRoute(props: Props) {
  const { component: InnerComponent, ...rest } = props;

  const isExpired = () => {
    const { checkTokenIsExpired } = props;
    const isExpired = checkTokenIsExpired();
    return isExpired;
  };

  const renderScene = (sceneProps: any) => {
    const { location, isAuthenticated } = sceneProps;
    const isTokenExpired = false; // this.isExpired()

    return !isTokenExpired && isAuthenticated ? (
      <InnerComponent {...sceneProps} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    );
  };

  return <Route {...rest} render={renderScene} />;
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
