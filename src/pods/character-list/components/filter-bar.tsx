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

const GENDER_OPTIONS = {
  FEMALE: 'Female',
  MALE: 'Male',
  GENDERLESS: 'Genderless',
  UNKNOWN: 'Unknown',
};

const SPECIES_OPTIONS = {
  ALIEN: 'Alien',
  ANIMAL: 'Animal',
  HUMAN: 'Human',
  HUMANOID: 'Humanoid',
  MYTHOLOG: 'Mytholog',
  ROBOT: 'Robot',
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
  const { gender, setGender } = useContext(CharactersContext);
  const { specie, setSpecie } = useContext(CharactersContext);
  const classes = useStyles();

  const statusOptions = useMemo(
    () => mapToSelectOptions(STATUS_OPTIONS) || [],
    [STATUS_OPTIONS]
  );

  const genderOptions = useMemo(
    () => mapToSelectOptions(GENDER_OPTIONS) || [],
    [GENDER_OPTIONS]
  );

  const speciesOptions = useMemo(
    () => mapToSelectOptions(SPECIES_OPTIONS) || [],
    [SPECIES_OPTIONS]
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
      {genderOptions.length > 0 && (
        <Select
          label="Gender"
          options={genderOptions[0].hasOwnProperty('value') && genderOptions}
          onSelect={setGender}
          value={gender}
        />
      )}
      {speciesOptions.length > 0 && (
        <Select
          label="Species"
          options={speciesOptions[0].hasOwnProperty('value') && speciesOptions}
          onSelect={setSpecie}
          value={specie}
        />
      )}
    </TopBar>
  );
};
