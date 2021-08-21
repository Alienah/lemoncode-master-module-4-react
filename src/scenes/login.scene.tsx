import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Login Scene</h1>
      <Link to={routes.memberList}>Go to member list</Link>
    </>
  );
};
