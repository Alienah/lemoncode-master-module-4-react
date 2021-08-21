import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Button, TextField } from 'common/components';
import { useState } from 'react';

interface Props {
  defaultValue?: string;
  onSearch: (value: string) => void;
}

const useStyles = makeStyles({
  searchIcon: {},
  barItem: {
    marginRight: '8px',
  },
});

export const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();
  const { defaultValue = '', onSearch } = props;
  const [searchValue, setSearchValue] = useState<string>(defaultValue);

  const handleSearch = () => {
    onSearch(searchValue);
  };
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <div className={`${classes.searchIcon} ${classes.barItem}`}>
          <SearchIcon />
        </div>
        <div className={classes.barItem}>
          <TextField
            aria-label="search"
            label="Search"
            value={searchValue}
            onChange={setSearchValue}
            size="small"
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </Toolbar>
    </AppBar>
  );
};
