import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const MemberDetailScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Member Detail Scene</h1>
      <Link to={routes.memberList}>Go to member list</Link>
    </>
  );
};
