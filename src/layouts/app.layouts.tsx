import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const AppLayout: React.FC = ({ children }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          React app
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);
