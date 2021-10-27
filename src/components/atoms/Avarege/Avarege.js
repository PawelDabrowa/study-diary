import React from 'react';
import {  Wrapper } from './Avarege.styles'

const Avarege = ({userData}) => {
 return (
  <Wrapper>
    <div>{userData.average}</div>
  </Wrapper>
 )
};

export default Avarege;
