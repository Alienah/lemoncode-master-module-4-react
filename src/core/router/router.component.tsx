import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { LoginScene, MemberListScene, MemberDetailScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]}>
          <LoginScene />
        </Route>
        <Route exact={true} path={[switchRoutes.memberList]}>
          <MemberListScene />
        </Route>
        <Route exact={true} path={[switchRoutes.memberDetail]}>
          <MemberDetailScene />
        </Route>
      </Switch>
    </HashRouter>
  );
};
