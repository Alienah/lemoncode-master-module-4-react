import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface Props {
  color?: 'default' | 'primary' | 'secondary';
  onClick: () => void;
}

export const Button: React.FC<Props> = props => {
  const { color = 'primary', onClick, children } = props;
  return (
    <MuiButton color={color} onClick={onClick} variant="contained">
      {children}
    </MuiButton>
  );
};
