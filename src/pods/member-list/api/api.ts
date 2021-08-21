import { Member } from './api.model';

export const getMemberList = (): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/lemoncode/members`).then(response =>
    response.json()
  );
};
