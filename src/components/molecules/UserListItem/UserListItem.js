import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UserListItem.styles';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Avarege from 'components/atoms/Avarege/Avarege';

const UserListItem = ({deleteUser, userData}) => {
  return (
    <Wrapper>
      <Avarege userData={userData}/>
      <div>
      <StyledInfo>
        <p>{userData.name}</p>
        <p>attendence {userData.attendance}</p>
      </StyledInfo>
      </div>
      <DeleteButton onClick={()=>deleteUser(userData.name)}/>
    </Wrapper>
  )
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    attendance:  PropTypes.string,
  }),
};

export default UserListItem
