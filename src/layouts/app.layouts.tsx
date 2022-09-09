import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router/routes';
import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    const targetPos = event.currentTarget.getBoundingClientRect();
    console.log('EVENT', targetPos);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            <Link className={classes.link} to={routes.memberList}>
              Api Consulting App
            </Link>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            aria-controls="simple-menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            anchorPosition={{ left: 0, top: 0 }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className={classes.link} to={routes.memberList}>
                Github members
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className={classes.link} to={routes.characterList}>
                Rick & Morty
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};
