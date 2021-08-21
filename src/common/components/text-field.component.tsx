import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

interface Props {
  'aria-label'?: string;
  size?: 'small' | 'medium';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextField: React.FC<Props> = props => {
  const { label, onChange, value, ...rest } = props;
  return (
    <MuiTextField
      {...rest}
      label={label}
      onChange={e => onChange(e.target.value)}
      value={value}
      variant="outlined"
    />
  );
};
