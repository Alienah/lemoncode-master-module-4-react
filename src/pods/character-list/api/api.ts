import { Character } from './api.model';

export const getCharactersBy = (
  name,
  status,
  gender,
  specie
): Promise<Character[]> => {
  const hasAnyFilter = name || status || gender || specie;
  const nameFilter = name ? `&name=${name}` : '';
  const statusFilter = status ? `&status=${status.toLowerCase()}` : '';
  const genderFilter = gender ? `&gender=${gender.toLowerCase()}` : '';
  const speciesFilter = specie ? `&species=${specie.toLowerCase()}` : '';
  const url = hasAnyFilter
    ? `https://rickandmortyapi.com/api/character/?${nameFilter}${statusFilter}${genderFilter}${speciesFilter}`
    : `https://rickandmortyapi.com/api/character`;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
    .catch(err => console.log(`Error trying to get data:`, err));
};
