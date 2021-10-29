import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { users as usersData } from '../data/user';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const App = () => {

  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <Wrapper>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/add-user">/add-user</Link>
            </nav>
            <Switch>
              <Route path='/' exact>
              <UsersList deleteUser={deleteUser} users={users} />
              </Route>
              <Route path='/add-user'>
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
            </Switch>
          </Wrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App;
