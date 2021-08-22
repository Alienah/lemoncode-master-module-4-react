import { Member } from './api.model';

export const getMemberList = (org): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`)
    .then(response => response.json())
    .catch(err => console.log(`Error trying to get ${org} data:`, err));
};
