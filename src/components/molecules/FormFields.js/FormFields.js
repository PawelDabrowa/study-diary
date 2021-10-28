import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormFields = ({ onChange, value, label, name, id, type }) => {
  return (
    <Wrapper>
     <Label htmlFor={id}>
       {label}
     </Label>
     <Input name={name} id={id} type={type} value={value} onChange={onChange}></Input>
    </Wrapper>
  )
}

FormFields.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
}

export default FormFields
