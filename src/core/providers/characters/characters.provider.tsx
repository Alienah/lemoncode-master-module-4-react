import React, { useState } from 'react';
import { CharactersContext } from './characters.context';

export const CharactersProvider: React.FC = props => {
  const { children } = props;
  const [charName, setCharName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [specie, setSpecie] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  return (
    <CharactersContext.Provider
      value={{
        charName,
        setCharName,
        gender,
        setGender,
        specie,
        setSpecie,
        status,
        setStatus,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
