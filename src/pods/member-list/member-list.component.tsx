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
import { Member } from './member-list.vm';

interface Props {
  members: Member[];
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

export const MemberListComponent: React.FC<Props> = props => {
  const { members } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>Members list</h2>
      <Paper className={classes.root}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map(member => (
                <TableRow key={member.id}>
                  <TableCell>
                    <img src={member.avatarUrl} className={classes.avatarImg} />
                  </TableCell>
                  <TableCell align="right">{member.id}</TableCell>
                  <TableCell align="right">
                    <Link to={routes.memberDetail(member.login)}>
                      {member.login}
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
