import React, { useState, useEffect, useContext } from 'react';
import { CharactersContext } from 'core/providers';
import { useSafeState } from 'hooks';
import { getAllCharacters } from './api';
import { mapCharacterListToVM } from './character-list.mappers';
import { Character } from './character-list.vm';

import { Loader, SearchBar } from 'common/components';
import { CharacterListComponent } from './character-list.component';

export const CharacterListContainer: React.FC = () => {
  const [list, setList] = useSafeState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchValue, setSearchValue } = useContext(CharactersContext);

  const onFetchCharacters = () => {
    setLoading(true);
    getAllCharacters()
      .then(mapCharacterListToVM)
      .then(res => {
        setLoading(false);
        setList(res);
      });
  };

  useEffect(() => {
    onFetchCharacters();
  }, []);

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        onChange={setSearchValue}
        showButton={false}
      />
      {loading && <Loader size={80} />}
      {!loading && <CharacterListComponent characters={list} />}
    </>
  );
};
