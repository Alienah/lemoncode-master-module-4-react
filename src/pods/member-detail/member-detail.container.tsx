import React, { useEffect, useState } from 'react';
import { Member } from './member-detail.vm';
import { getUser } from './api';
import { mapMemberToVM } from './member-detail.mappers';
import { MemberDetail } from './member-detail.component';
import { BackLink } from './components/back-link';

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
      <BackLink />
      {member && <MemberDetail member={member} />}
    </>
  );
};
