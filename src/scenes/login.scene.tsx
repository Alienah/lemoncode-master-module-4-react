import React from 'react';
import { Login } from 'common-app/components';
import { AppLayout } from 'layouts';

export const LoginScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <Login />
      </AppLayout>
    </>
  );
};
