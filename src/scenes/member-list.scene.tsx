import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const MemberListScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Members List Scene</h1>
      <Link to={routes.memberDetail('1')}>Go to detail</Link>
    </>
  );
};
