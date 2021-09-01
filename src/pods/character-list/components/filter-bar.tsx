import React, { useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { CharactersContext } from 'core/providers';

import { Select, TextField, TopBar } from 'common/components';

const useStyles = makeStyles({
  filterLabel: {
    marginRight: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
  },
  barItem: {
    marginRight: '8px',
  },
});

const STATUS_OPTIONS = {
  ALIVE: 'Alive',
  DEAD: 'Dead',
  UNKNOWN: 'Unknown',
};

const mapToSelectOptions = obj =>
  Object.values(obj).map(value => {
    if (typeof value === 'string') {
      return {
        name: value,
        value: value,
      };
    }
    return null;
  });

export const FilterBar: React.FC = () => {
  const { charName, setCharName } = useContext(CharactersContext);
  const { status, setStatus } = useContext(CharactersContext);
  const classes = useStyles();

  const statusOptions = useMemo(
    () => mapToSelectOptions(STATUS_OPTIONS) || [],
    [STATUS_OPTIONS]
  );

  return (
    <TopBar>
      <span className={classes.filterLabel}>Filter by:</span>
      <div className={classes.barItem}>
        <TextField
          aria-label="name"
          label="Name"
          onChange={setCharName}
          size="small"
          value={charName}
        />
      </div>
      {statusOptions.length > 0 && (
        <Select
          label="Status"
          options={statusOptions[0].hasOwnProperty('value') && statusOptions}
          onSelect={setStatus}
          value={status}
        />
      )}
    </TopBar>
  );
};
