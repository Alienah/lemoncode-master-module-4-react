import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { AppLayout } from 'layouts';
import { AuthProvider, OrgProvider } from 'core/providers';
import { MemberListScene, MemberDetailScene } from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <AuthProvider>
          <OrgProvider>
            <AppLayout>
              <Route
                exact={true}
                path={[switchRoutes.root, switchRoutes.memberList]}
              >
                <MemberListScene />
              </Route>
              <Route exact={true} path={[switchRoutes.memberDetail]}>
                <MemberDetailScene />
              </Route>
            </AppLayout>
          </OrgProvider>
        </AuthProvider>
      </Switch>
    </HashRouter>
  );
};
