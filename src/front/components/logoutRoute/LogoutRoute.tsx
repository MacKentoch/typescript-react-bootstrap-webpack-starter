// #region imports
import React from 'react';
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
interface Props extends RouteComponentProps, AuthContextProps {}

interface State {}
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
