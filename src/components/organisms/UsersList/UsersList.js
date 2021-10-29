import React from 'react';
import { Wrapper } from './UsersList.styles'
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { v4 as uuidv4 } from 'uuid'


const UsersList = ({users, deleteUser}) => {

  return (
    <>
      <Wrapper>
        <h1>Student List</h1>
        <Wrapper>
          {users.map((userData) => (
            <UserListItem deleteUser={deleteUser} key={uuidv4()} userData={userData} />
          ))}
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default UsersList;
