import React from 'react';
import { AppBar, AppBarProps, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    padding: '8px 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const TopBar: React.FC<AppBarProps> = props => {
  const classes = useStyles();
  const { children } = props;

  return (
    <AppBar
      position="static"
      color="transparent"
      className={classes.appBar}
      {...props}
    >
      <Toolbar className={classes.toolbar}>{children}</Toolbar>
    </AppBar>
  );
};
