import * as React from 'react';
import { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import loadable from 'loadable-components';
import createHistory from 'history/createBrowserHistory';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import LogoutRoute from './components/logoutRoute';
import AuthContextProvider from './contexts/auth'
import GlobalStyle from './style/GlobalStyles';

// #region types
type Props = any;
type State = any;
// #nedregion

// #region constants
const MainApp = compose(withMainLayout())(MainRoutes);
const history = createHistory();
// we lazy load pages:
const LoadableLogin = loadable(() => import('./pages/login'));
const LoadablePageNotFound = loadable(() => import('./pages/pageNotFound'));
// #endregion

class Root extends React.Component<Props, State> {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <GlobalStyle />
          <AuthContextProvider>
            {/* <ScrollToTop> */}
              <Switch>
                <Route exact path="/login" component={LoadableLogin} />
                {/* Application with main layout (could have multiple applications with different layouts) */}
                <MainApp />
                {/* logout: just redirects to login (App will take care of removing the token) */}
                <LogoutRoute path="/logout" />
                <Route component={LoadablePageNotFound} />
              </Switch>
            {/* </ScrollToTop> */}
          </AuthContextProvider>
        </Fragment>
      </Router>
    );
  }
}

export default Root;
