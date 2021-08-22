import React from 'react';
import MuiButton from '@material-ui/core/Button';

interface Props {
  color?: 'default' | 'primary' | 'secondary';
  href?: string;
  onClick: (e?: React.MouseEvent) => void;
  type?: string;
}

export const Button: React.FC<Props> = props => {
  const { color = 'primary', onClick, children, type, href = '' } = props;
  return (
    <MuiButton
      color={color}
      href={href}
      onClick={onClick}
      type={type}
      variant="contained"
    >
      {children}
    </MuiButton>
  );
};
