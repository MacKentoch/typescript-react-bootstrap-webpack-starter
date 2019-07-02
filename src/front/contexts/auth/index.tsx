
import React, {useState, createContext} from 'react'

export const AUTH_DEFAULT: AuthData = {
  isAuthenticated: false,
  lastAuthDate: null,
  isExpiredToken: true,
  token: '',
  user: null,
};

const AuthContext = createContext<(AuthData | Function)[]>([AUTH_DEFAULT, () => {}]);

type Props = {
  children: any
}

function AuthContextProvider ({children}: Props) {
  const [value, setValue] = useState(AUTH_DEFAULT);

  return <AuthContext.Provider value={[value, setValue]}>
    {children}
  </AuthContext.Provider>

}

AuthContextProvider.displayName = 'AuthContextProvider'

export default AuthContextProvider
