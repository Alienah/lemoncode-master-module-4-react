import React from 'react';
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@material-ui/core';

export interface SelectOption {
  name: string;
  value: string;
}

interface Props extends SelectProps {
  label: string;
  options: SelectOption[];
  onSelect: (value: any) => void;
  value: string;
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    transform: 'translate(14px, 12px) scale(1)',
  },
  selectContainer: {
    '& .MuiSelect-select': {
      padding: '10.5px 14px',
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Select: React.FC<Props> = props => {
  const {
    label = '',
    options = [],
    onSelect,
    value,
    variant = 'outlined',
  } = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="select-label" className={classes.label}>
        {label}
      </InputLabel>
      <MuiSelect
        className={classes.selectContainer}
        labelId="select-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={e => onSelect(e.target.value)}
        label={label}
        variant={variant}
        {...props}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options?.length > 0 &&
          options.map((opt, key) => (
            <MenuItem key={key} value={opt.value}>
              {opt.name}
            </MenuItem>
          ))}
      </MuiSelect>
    </FormControl>
  );
};
