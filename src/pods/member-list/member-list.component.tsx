import React from 'react';
import { Member } from './member-list.vm';
import { Link } from 'react-router-dom';
import { routes } from 'core/router/routes';

interface Props {
  members: Member[];
}

export const MemberListComponent: React.FC<Props> = props => {
  const { members } = props;
  return (
    <>
      <h2>Hello from List page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>
                <img src={member.avatarUrl} style={{ width: '5rem' }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={routes.memberDetail(member.login)}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
