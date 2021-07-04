import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { toNumber } from 'lodash';
import styled from 'styled-components';

import { saveInvestment } from '../../store/actions/investment'
import validation from '../../utils/validation';

import { Button } from '../../components';

const StyledForm = styled.form`
  & input {
    display: block;
    padding: 10px;
    border-radius: 5px;
    margin: 20px 10px;
    width: 300px;
  }

  & input[type=number] {
    width: 250px;
  }

  & .currency-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &:last-child {
    margin: 0 auto;
  }
`
const FormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, onFillingForm] = useState({ email: '', amount: '' });
  const [formError, createError] = useState('');

  const setInvestment = e => {
    const { name, value } = e.target;

    onFillingForm({...formData, [name]: name === 'amount' ? toNumber(value) : value });
  };

  const validateForm = values => {
    if (!(validation(values))) {
      createError('Form is invalid! Please check provided values.')
    } else {
      dispatch(saveInvestment(formData));
      history.push('/confirm');
    }
  };

  return (
    <React.Fragment>
      <StyledForm>
          <input
            name='email'
            type='text'
            placeholder='Your email address'
            value={formData.email}
            onChange={setInvestment}
          />
          <div className='currency-container'>
            <input
              name='amount'
              type='number'
              placeholder='Investment amount'
              value={formData.amount}
              onChange={setInvestment}
            />
            <div> EUR </div>
          </div>
      </StyledForm>
      <Button onClick={() => validateForm(formData)}>
        Continue
      </Button>
      { formError }
    </React.Fragment>
  );
}

export default FormPage;