import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { AppLayout } from 'layouts';
import { AuthProvider, CharactersProvider, OrgProvider } from 'core/providers';
import {
  CharacterDetailScene,
  CharacterListScene,
  MemberListScene,
  MemberDetailScene,
} from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <AuthProvider>
          <AppLayout>
            <OrgProvider>
              <Route
                exact={true}
                path={[switchRoutes.root, switchRoutes.memberList]}
              >
                <MemberListScene />
              </Route>
              <Route exact={true} path={[switchRoutes.memberDetail]}>
                <MemberDetailScene />
              </Route>
            </OrgProvider>
            <CharactersProvider>
              <Route exact={true} path={[switchRoutes.characterList]}>
                <CharacterListScene />
              </Route>
              <Route exact={true} path={[switchRoutes.characterDetail]}>
                <CharacterDetailScene />
              </Route>
            </CharactersProvider>
          </AppLayout>
        </AuthProvider>
      </Switch>
    </HashRouter>
  );
};
