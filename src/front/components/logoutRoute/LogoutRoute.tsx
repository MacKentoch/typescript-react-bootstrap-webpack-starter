// #region imports
import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Match, Location, RouterHistory } from 'react-router-dom';
import { AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
} & AuthContextProps;

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
