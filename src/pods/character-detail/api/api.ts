import { Character } from './api.model';

export const getCharacter = (id: string): Promise<Character> => {
  return fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  ).then(response => response.json());
};
