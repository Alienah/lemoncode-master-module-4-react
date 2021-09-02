import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  link: string;
}

const useStyles = makeStyles({
  link: {
    margin: '16px 0',
    fontSize: '18px',
    cursor: 'pointer',
  },
});

export const BackLink: React.FC<Props> = props => {
  const { text, link } = props;
  const classes = useStyles();
  return (
    <div className={classes.link}>
      <Link to={link}>{text}</Link>
    </div>
  );
};
