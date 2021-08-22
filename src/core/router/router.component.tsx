import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { AppLayout } from 'layouts';
import { OrgProvider } from 'core/providers';
import { LoginScene, MemberListScene, MemberDetailScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]}>
          <LoginScene />
        </Route>
        <OrgProvider>
          <AppLayout>
            <Route exact={true} path={[switchRoutes.memberList]}>
              <MemberListScene />
            </Route>
            <Route exact={true} path={[switchRoutes.memberDetail]}>
              <MemberDetailScene />
            </Route>
          </AppLayout>
        </OrgProvider>
      </Switch>
    </HashRouter>
  );
};
