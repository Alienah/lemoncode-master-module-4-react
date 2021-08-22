import * as am from './api/api.model';
import * as vm from './member-list.vm';

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});

export const mapMemberListToVM = (data: am.Member[]): vm.Member[] =>
  (data.length > 0 && data.map(mapMemberToVM)) || [];
