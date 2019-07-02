interface AuthData {
  isAuthenticated: boolean;
  isExpiredToken: boolean;
  lastAuthDate?: Date | null;
  token: string;
  user: User | null;
}


interface AuthProviderState extends AuthData {
  checkIsAuthenticated: () => boolean;
  checkTokenIsExpired: () => boolean;
  setToken: (token: string) => any;
  setUserInfo: (user: User) => any;
  disconnectUser: () => boolean;
}
