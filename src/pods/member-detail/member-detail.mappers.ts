import * as am from './api/api.model';
import * as vm from './member-detail.vm';

export const mapMemberToVM = (data: am.User): vm.Member => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
  htmlUrl: data.html_url,
  name: data.name,
  location: data.location,
});
