import { MemberDetailContainer } from 'pods/member-detail';
import React from 'react';
import { useParams } from 'react-router-dom';

export const MemberDetailScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <MemberDetailContainer user={id} />
    </>
  );
};
