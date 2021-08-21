import { User } from './api.model';

export const getUser = (user: string): Promise<User> => {
  return fetch(`https://api.github.com/users/${user}`).then(response =>
    response.json()
  );
};
