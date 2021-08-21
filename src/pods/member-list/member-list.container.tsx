import React, { useState, useEffect } from 'react';
import { getMemberList } from './api';
import { MemberListComponent } from './member-list.component';
import { mapMemberListToVM } from './member-list.mappers';
import { Member } from './member-list.vm';

export const MemberListContainer: React.FC = () => {
  const [list, setList] = useState<Member[]>([]);

  useEffect(() => {
    getMemberList()
      .then(mapMemberListToVM)
      .then(setList);
  }, []);

  return (
    <>
      <MemberListComponent members={list} />
    </>
  );
};
