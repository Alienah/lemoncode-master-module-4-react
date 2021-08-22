import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  memberList: string;
  memberDetail: string;
  characterList: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  memberList: '/members',
  memberDetail: '/members/:id',
  characterList: '/characters',
  characterDetail: '/characters/:id',
};

interface Routes
  extends Omit<SwitchRoutes, 'memberDetail' | 'characterDetail'> {
  memberDetail: (id: string) => string;
  characterDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  memberDetail: id => generatePath(switchRoutes.memberDetail, { id }),
  characterDetail: id => generatePath(switchRoutes.characterDetail, { id }),
};
