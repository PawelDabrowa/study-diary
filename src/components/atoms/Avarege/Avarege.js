import React from 'react';
import {  Wrapper } from './Avarege.styles'

const Avarege = ({ userData}) => {

const value = userData.average;

 return (
  <Wrapper value={value}>
  <div>{userData.average}</div>
  </Wrapper>
 )
};

export default Avarege;
