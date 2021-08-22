import { Character } from './api.model';

export const getAllCharacters = (): Promise<Character[]> => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(json => json.results)
    .catch(err => console.log(`Error trying to get data:`, err));
};
