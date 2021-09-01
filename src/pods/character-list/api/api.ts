import { Character } from './api.model';

export const getCharactersBy = (name, status): Promise<Character[]> => {
  const hasAnyFilter = name || status;
  const nameFilter = name ? `&name=${name}` : '';
  const statusFilter = status ? `&status=${status.toLowerCase()}` : '';
  const url = hasAnyFilter
    ? `https://rickandmortyapi.com/api/character/?${nameFilter}${statusFilter}`
    : `https://rickandmortyapi.com/api/character`;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
    .catch(err => console.log(`Error trying to get data:`, err));
};
