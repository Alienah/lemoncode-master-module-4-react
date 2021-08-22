import * as am from './api/api.model';
import * as vm from './character-list.vm';

const mapCharacterToVM = (data: am.Character): vm.Character => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
  image: data.image,
});

export const mapCharacterListToVM = (data: am.Character[]): vm.Character[] =>
  (data.length > 0 && data.map(mapCharacterToVM)) || [];
