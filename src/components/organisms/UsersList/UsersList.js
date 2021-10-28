import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/user';
import { Wrapper } from './UsersList.styles'
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import FormFields from 'components/molecules/FormFields.js/FormFields';
import { Button } from 'components/atoms/Button/Button';
import { v4 as uuidv4 } from 'uuid'

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

  const [formValues, setFormValue] = useState({
    name: '',
    attendance: '',
    average: '',
  });

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

  const handleInputChange = (e) => {
    console.log(formValues)
    setFormValue({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }

    setUsers([newUser, ...users])
  }

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h2>Add new student</h2>
        <FormFields label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
        <FormFields label="attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}/>
        <FormFields label="Average" id="average" name="average"  value={formValues.average} onChange={handleInputChange}/>
        <Button type='submit'>Add</Button>
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
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
