type UserData = {
  id: string | number;
  login: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
};

interface User {
  token: string | null;
  user?: UserData;
  email: string;
}
