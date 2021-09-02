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
import { Pagination } from './components/pagination';

export const CharacterListContainer: React.FC = () => {
  const [list, setList] = useSafeState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { charName, status, gender, specie, pages, setPages } = useContext(
    CharactersContext
  );
  const [debouncedCharName] = useDebounce(charName, 500);

  const onFetchCharacters = (page?) => {
    setLoading(true);
    getCharactersBy(charName, status, gender, specie, page)
      .then(res => {
        const { info, results } = res;
        info.pages && setPages(info.pages);
        return mapCharacterListToVM(results);
      })
      .then(res => {
        setLoading(false);
        setList(res);
      });
  };

  useEffect(() => {
    onFetchCharacters();
  }, [debouncedCharName, status, gender, specie]);

  return (
    <>
      <FilterBar />
      {loading && <Loader size={80} />}
      {!loading && <CharacterListComponent characters={list} />}
      <Pagination onChange={onFetchCharacters} />
    </>
  );
};
