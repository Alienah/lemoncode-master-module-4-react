import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { routes } from 'core/router/routes';

const useStyles = makeStyles({
  link: {
    margin: '16px 0',
    fontSize: '18px',
    cursor: 'pointer',
  },
});

export const BackLink: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.link}>
      <Link to={routes.memberList}>Back to member list</Link>
    </div>
  );
};
