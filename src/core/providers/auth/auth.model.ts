interface User {
  username: string;
}

interface AuthContextModel {
  user: User;
  setUser: (user: User) => void;
}
