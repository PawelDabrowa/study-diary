import React from 'react';
import { users } from 'data/user';
import { Wrapper } from './UsersList.styles'
import UserListItem from 'components/molecules/UserListItem/UserListItem';

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData, i) => (
          <UserListItem index={i} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  )
};

export default UsersList;
