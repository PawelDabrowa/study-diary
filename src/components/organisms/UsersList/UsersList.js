import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/user';
import { Wrapper } from './UsersList.styles'
import UserListItem from 'components/molecules/UserListItem/UserListItem';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <Wrapper>
        {users.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </Wrapper>
    </Wrapper>
  );
};

export default UsersList;
