import { makeStyles } from '@material-ui/core';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import React from 'react';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px auto',
  },
});

export const Loader: React.FC<CircularProgressProps> = props => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <CircularProgress {...props} />
    </div>
  );
};
