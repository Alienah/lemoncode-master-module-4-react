import React, { useState, useEffect, useContext } from 'react';
import { CharactersContext } from 'core/providers';
import { useSafeState } from 'hooks';
import { getCharactersBy } from './api';
import { mapCharacterListToVM } from './character-list.mappers';
import { Character } from './character-list.vm';

import { Loader } from 'common/components';
import { CharacterListComponent } from './character-list.component';
import { FilterBar } from './components/filter-bar';
import { useDebounce } from 'use-debounce/lib';

export const CharacterListContainer: React.FC = () => {
  const [list, setList] = useSafeState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { charName, status } = useContext(CharactersContext);
  const [debouncedCharName] = useDebounce(charName, 500);

  const onFetchCharacters = () => {
    setLoading(true);
    getCharactersBy(charName, status)
      .then(mapCharacterListToVM)
      .then(res => {
        setLoading(false);
        setList(res);
      });
  };

  useEffect(() => {
    onFetchCharacters();
  }, [debouncedCharName, status]);

  return (
    <>
      <FilterBar />
      {loading && <Loader size={80} />}
      {!loading && <CharacterListComponent characters={list} />}
    </>
  );
};
