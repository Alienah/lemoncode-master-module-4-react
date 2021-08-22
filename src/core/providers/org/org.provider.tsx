import React, { useState } from 'react';
import { OrgContext } from './org.context';

export const OrgProvider: React.FC = props => {
  const { children } = props;
  const [searchValue, setSearchValue] = useState<string>('lemoncode');

  return (
    <OrgContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </OrgContext.Provider>
  );
};
