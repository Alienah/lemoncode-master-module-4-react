import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { routes } from 'core/router/routes';
import { Character } from './character-list.vm';

interface Props {
  characters: Character[];
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    width: '760px',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  avatarImg: {
    width: '5rem',
  },
}));

export const CharacterListComponent: React.FC<Props> = props => {
  const { characters } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>Rick and Morty characters list</h2>
      <Paper className={classes.root}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Species</TableCell>
                <TableCell align="right">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map(member => (
                <TableRow key={member.id}>
                  <TableCell>
                    <img src={member.image} className={classes.avatarImg} />
                  </TableCell>
                  <TableCell align="right">{member.id}</TableCell>
                  <TableCell align="right">{member.status}</TableCell>
                  <TableCell align="right">{member.gender}</TableCell>
                  <TableCell align="right">{member.species}</TableCell>
                  <TableCell align="right">
                    <Link to={routes.characterDetail(member.id)}>
                      {member.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
