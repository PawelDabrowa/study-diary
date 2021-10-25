import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({userData}) => {
  return (
    <li>
    <div>{userData.name}</div>
    <div>
      <p>{userData.average}</p>
      <p>{userData.attendance}</p>
    </div>
    <button>X</button>
  </li>
  )
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance:  PropTypes.string,
  }),
};

export default UserListItem
