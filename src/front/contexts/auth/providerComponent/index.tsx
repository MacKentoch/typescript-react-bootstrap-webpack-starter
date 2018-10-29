// #region imports
import * as React from 'react';
import { AuthContextProvider, AuthData, authDefault } from '../context';
import auth from '../../../services/auth';
import { User } from '../../../types/user/user';
// #endregion

// #region flow types
export interface AuthProviderProps extends AuthData {
  initialState?: AuthData;
}

export interface AuthProviderState extends AuthData {
  checkIsAuthenticated: () => boolean;
  checkTokenIsExpired: () => boolean;
  setToken: (token: string) => any;
  setUserInfo: (user: User) => any;
  disconnectUser: () => boolean;
}
// #endregion

// #region PROVIDER component
export default class AuthProvider extends React.Component<
  AuthProviderProps,
  // tslint:disable-next-line:trailing-comma
  AuthProviderState, // prettier-ignore
> {
  static defaultProps = {
    initialState: {
      token: null,
      user: null,
      isAuthenticated: false,
      isExpiredToken: true,
      lastAuthDate: null,
    },
  };

  // #region lifecyle
  constructor(props) {
    super(props);

    // initialize state in constructor (otherwise function won't be passed)
    this.state = {
      ...this.props.initialState,
      checkIsAuthenticated: this.checkIsAuthenticated,
      checkTokenIsExpired: this.checkTokenIsExpired,
      disconnectUser: this.disconnectUser,
      setToken: this.setToken,
      setUserInfo: this.setUserInfo,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <AuthContextProvider
        value={{
          ...this.state,
        }}
      >
        {children}
      </AuthContextProvider>
    );
  }
  // #endregion

  checkIsAuthenticated = (): boolean => {
    const checkUserHasId = user => user && user.id;
    const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    const isAuthenticated = auth.getToken() && checkUserHasId(user);

    this.setState({
      isAuthenticated,
    });
    return isAuthenticated;
  };

  checkTokenIsExpired = (): boolean => {
    const token = auth.getToken();
    const isExpiredToken = auth.isExpiredToken(token);

    this.setState({
      isExpiredToken,
    });
    return isExpiredToken;
  };

  setToken = (token: string = '') => {
    auth.setToken(token);
    this.setState({ token, isAuthenticated: true });
  };

  setUserInfo = (user: User) => {
    if (typeof user === 'object') {
      auth.setUserInfo(user);
      this.setState({ user });
    }
  };

  disconnectUser = (): boolean => {
    auth.clearAllAppStorage();
    this.checkIsAuthenticated();
    return true;
  };
}
// #endregion
