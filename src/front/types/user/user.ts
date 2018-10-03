export type UserData = {
  id: string | number,
  login: string,
  firstname: string,
  lastname: string,
  isAdmin: boolean,
};

export interface User {
  token: string;
  user: UserData;
}
