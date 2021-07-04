import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  padding: 15px;
  border: 0;
  background-color: #36354a;
  color: #fff;
  margin: 40px auto;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    backgroud-color: red;

    a {
      cursor: not-allowed;
    }
  }

`

const Button = ({ children, onClick, disabled}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default Button;