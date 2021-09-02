import { Character } from './api.model';

interface Response {
  results: Character[];
  info: {
    pages: number;
  };
}

const URL = `https://rickandmortyapi.com/api/character`;

export const getCharactersBy = (
  name,
  status,
  gender,
  specie,
  page
): Promise<Response> => {
  const hasAnyFilter = name || status || gender || specie;
  const pageFilter = page ? `&page=${page}` : '';
  const nameFilter = name ? `&name=${name}` : '';
  const statusFilter = status ? `&status=${status.toLowerCase()}` : '';
  const genderFilter = gender ? `&gender=${gender.toLowerCase()}` : '';
  const speciesFilter = specie ? `&species=${specie.toLowerCase()}` : '';
  const url =
    hasAnyFilter || pageFilter
      ? `${URL}/?${nameFilter}${statusFilter}${genderFilter}${speciesFilter}${pageFilter}`
      : URL;
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(`Error trying to get data:`, err));
};
