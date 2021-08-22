import React, { useState, useEffect, useContext } from 'react';
import { OrgContext } from 'core/providers';
import { useSafeState } from 'hooks';
import { getMemberList } from './api';
import { mapMemberListToVM } from './member-list.mappers';
import { Member } from './member-list.vm';

import { Loader, SearchBar } from 'common/components';
import { MemberListComponent } from './member-list.component';

export const MemberListContainer: React.FC = () => {
  const [list, setList] = useSafeState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchValue, setSearchValue } = useContext(OrgContext);

  const onFetchMembers = searchValue => {
    setLoading(true);
    getMemberList(searchValue)
      .then(mapMemberListToVM)
      .then(res => {
        setLoading(false);
        setList(res);
      });
  };

  useEffect(() => {
    onFetchMembers(searchValue);
  }, []);

  const filterList = () => {
    onFetchMembers(searchValue);
  };

  return (
    <>
      <SearchBar
        defaultValue="lemoncode"
        onSearch={filterList}
        searchValue={searchValue}
        onChange={setSearchValue}
      />
      {loading && <Loader size={80} />}
      {!loading && <MemberListComponent members={list} />}
    </>
  );
};
