import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetailContainer } from 'pods/character-detail/character-detail.container';

export const CharacterDetailScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <CharacterDetailContainer charId={id} />
    </>
  );
};
