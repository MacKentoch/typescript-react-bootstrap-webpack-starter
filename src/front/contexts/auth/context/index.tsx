// #region imports
//  @ts-ignore
import { createContext } from 'react';
// #endregion

// #region flow types
export interface AuthData {
  isAuthenticated: boolean;
  isExpiredToken: boolean;
  lastAuthDate?: Date | null;
  token: string;
  user: User | null;
}
// #endregion

// #region default context value
export const authDefault: AuthData = {
  isAuthenticated: false,
  lastAuthDate: null,
  isExpiredToken: true,
  token: '',
  user: null,
};
// #endregion

// #region context
const AuthContext = createContext<AuthData | null>({ ...authDefault });

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
// #endregion
