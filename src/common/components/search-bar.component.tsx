import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Button, TextField } from 'common/components';
import { TopBar } from './top-bar.component';

interface Props {
  defaultValue?: string;
  onChange: (searchValue: string) => void;
  onSearch?: () => void;
  searchValue: string;
  showButton?: boolean;
}

const useStyles = makeStyles({
  form: {
    display: 'flex',
  },
  barItem: {
    marginRight: '8px',
  },
});

export const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();
  const { onSearch, searchValue, onChange, showButton } = props;

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <TopBar>
      <div className={classes.barItem}>
        <SearchIcon />
      </div>
      <form className={classes.form}>
        <div className={classes.barItem}>
          <TextField
            aria-label="search"
            label="Search"
            onChange={onChange}
            size="small"
            value={searchValue}
          />
        </div>
        {!onSearch && showButton && (
          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        )}
      </form>
    </TopBar>
  );
};
