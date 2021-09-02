import React, { useEffect, useState } from 'react';
import { Character } from './character-detail.vm';
import { getCharacter } from './api';
import { mapCharacterToVM } from './character-detail.mappers';
import { routes } from 'core/router/routes';

import { CharacterDetail } from './character-detail.component';
import { BackLink } from 'common/components';

interface Props {
  charId: string;
}

export const CharacterDetailContainer: React.FC<Props> = props => {
  const { charId } = props;
  const [char, setChar] = useState<Character>(null);

  useEffect(() => {
    getCharacter(charId)
      .then(mapCharacterToVM)
      .then(setChar);
  }, []);

  return (
    <>
      <BackLink text="Back to member list" link={routes.characterList} />
      {char && <CharacterDetail char={char} />}
    </>
  );
};
