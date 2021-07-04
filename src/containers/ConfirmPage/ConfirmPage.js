import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';

import { sendInvestment } from '../../store/actions/investment';
import { Button } from '../../components';

const StyledRow = styled.div`
  display: flex;
  width: 30%;
  margin: 0 auto;
  align-items: center;

  & input, label {
    margin-top: 30px;
  }

  & p:first-of-type {
    font-weight: bold;
    width: 100px;
    text-align: left;
  }
`

const ConfirmPage = () => {
  const { email, amount } = useSelector(state => state.investment);
  const { id, name } = useSelector(state => state.projects.selected);
  const [ termsAccepted, toggleTerms ] = useState(false);
  const [ success, toggleRequestResult ] = useState(true);
  const [ formMessage, createMessage ] = useState('');

  const confirmInvestment = () => {
    const investment = {
      project_id: id,
      email: email,
      investment_amount: amount
    };

    if (termsAccepted) {
      createMessage('');
      sendInvestment(success, investment)
        .then(data => createMessage(data))
        .catch(e => createMessage(e));
    } else {
      createMessage('Please accept the terms and conditions.')
    }
  }

  return (
    <React.Fragment>
      <StyledRow >
        <p>project:</p>
        <p>{name}</p>
      </StyledRow> 
      <StyledRow >
        <p>email:</p>
        <p>{email}</p>
      </StyledRow>
      <StyledRow >
        <p>amount:</p>
        <p>{amount}</p>
      </StyledRow>
      <StyledRow>
        <input type='checkbox' id='terms' name='terms' onChange={() => toggleTerms(!termsAccepted)} />
        <label htmlFor='html'>I accept the terms and conditions</label>
      </StyledRow>
      <StyledRow>
        <input type='checkbox' id='request' name='request' onChange={() => toggleRequestResult(!success)} />
        <label htmlFor='html'>Check if you want to failed the request (dev only)</label>
      </StyledRow>
      <StyledRow >
        <Button onClick={() => confirmInvestment()}>
          Invest
        </Button>
      </StyledRow>
      { formMessage }
    </React.Fragment>
  );
}

export default ConfirmPage;
