import React, { useState } from 'react';
import { LoginScene } from 'scenes';
import { AuthContext } from './auth.context';

export const AuthProvider: React.FC = props => {
  const { children } = props;
  const [user, setUser] = useState<User>({ username: '' });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user.username ? children : <LoginScene />}
    </AuthContext.Provider>
  );
};
