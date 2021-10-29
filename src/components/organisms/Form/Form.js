
import React from 'react';
import { Wrapper } from '../UsersList/UsersList.styles'
import FormFields from 'components/molecules/FormFields.js/FormFields';
import { Button } from 'components/atoms/Button/Button';

const Form = ({handleAddUser, formValues, handleInputChange}) => {

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <h1>Add new student</h1>
        <FormFields label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}/>
        <FormFields label="attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}/>
        <FormFields label="Average" id="average" name="average"  value={formValues.average} onChange={handleInputChange}/>
        <Button type='submit'>Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
