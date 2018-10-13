// #region imports
import * as React from 'react';
import { Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import { Match, Location, RouterHistory } from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
interface BaseProps {};

type Props=  BaseProps extends BrowserRouter & AuthContextProps;

type State = any;
// #endregion

class LogoutRoute extends React.PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    const { disconnectUser } = this.props;
    disconnectUser();
  }

  render() {
    return (
      <Route {...this.props}>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
  // #endregion
}

export default withRouter(LogoutRoute);
