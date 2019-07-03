type PartialUserData = Partial<UserData>

export type State = {
  isFetching: boolean,
  isLogging: boolean,
  isAuthenticated: boolean,
  token: string | null,
} & PartialUserData & User;

export type UserAuthActions = {

};
