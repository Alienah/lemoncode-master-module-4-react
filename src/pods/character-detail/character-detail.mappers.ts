import * as am from './api/api.model';
import * as vm from './character-detail.vm';

export const mapCharacterToVM = (data: am.Character): vm.Character => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
  image: data.image,
  locationName: data.location.name,
});
