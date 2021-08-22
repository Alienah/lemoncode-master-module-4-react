import React, { useContext, useState } from 'react';
import { AuthContext } from 'core/providers';
import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Button, TextField } from 'common/components';

const useStyles = makeStyles({
  root: {
    maxWidth: 475,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '15% auto',
  },
  cardActions: {
    flex: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  formItem: {
    marginBottom: '24px',
  },
});

export const Login: React.FC = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const classes = useStyles();

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setUser({ username });
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Please login to see the content
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <form className={classes.form}>
            <div className={classes.formItem}>
              <TextField
                aria-label="Username"
                label="Type 'username' to login"
                onChange={setUsername}
                size="small"
                value={username}
              />
            </div>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </CardActions>
      </Card>
    </div>
  );
};
