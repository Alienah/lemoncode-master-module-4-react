import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Button, TextField } from 'common/components';

interface Props {
  defaultValue?: string;
  onChange: (searchValue: string) => void;
  onSearch?: () => void;
  searchValue: string;
  showButton?: boolean;
}

const useStyles = makeStyles({
  appBar: {
    padding: '8px 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
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
    <AppBar position="static" color="transparent" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
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
      </Toolbar>
    </AppBar>
  );
};
