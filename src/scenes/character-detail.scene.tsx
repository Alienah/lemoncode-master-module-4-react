import React from 'react';
import { useParams } from 'react-router-dom';

export const CharacterDetailScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div>detail for {id}</div>
    </>
  );
};
