import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './UserListItem.styles';

import Button from 'components/atoms/Button/Button';
import Avarege from 'components/atoms/Avarege/Avarege';

const showIndex =(index) => alert(`jestem #${index+1}`)

const UserListItem = ({index,userData}) => {
  return (
    <Wrapper>
    <Avarege userData={userData}/>
    <div>
    <StyledInfo>
      <p>{userData.name}</p>
      <p>attendence {userData.attendance}</p>
    </StyledInfo>
    </div>
    <Button onClick={()=>showIndex(index)}/>
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
