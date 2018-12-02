type UserData = {
  id: string | number;
  login: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
};

interface User {
  token: string;
  user?: UserData;
  email: string;
}
