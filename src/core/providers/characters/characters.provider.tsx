import React, { useState } from 'react';
import { CharactersContext } from './characters.context';

export const CharactersProvider: React.FC = props => {
  const { children } = props;
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <CharactersContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </CharactersContext.Provider>
  );
};
