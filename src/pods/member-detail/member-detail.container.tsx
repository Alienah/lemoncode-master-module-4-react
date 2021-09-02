import React, { useEffect, useState } from 'react';
import { Member } from './member-detail.vm';
import { getUser } from './api';
import { mapMemberToVM } from './member-detail.mappers';
import { MemberDetail } from './member-detail.component';
import { BackLink } from 'common/components';
import { routes } from 'core/router/routes';

interface Props {
  user: string;
}

export const MemberDetailContainer: React.FC<Props> = props => {
  const { user } = props;
  const [member, setMember] = useState<Member>(null);

  useEffect(() => {
    getUser(user)
      .then(mapMemberToVM)
      .then(setMember);
  }, []);

  return (
    <>
      <BackLink text="Back to member list" link={routes.memberList} />
      {member && <MemberDetail member={member} />}
    </>
  );
};
