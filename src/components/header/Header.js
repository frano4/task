import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import content from '../../data/content.js';

const StyledHeader = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Header = () => {
  const page = useLocation().pathname;
  const messages = content[page];

  return (
    <StyledHeader>
      <h1>Step {messages.step}</h1>
      <h2>{messages.text}</h2>
    </StyledHeader>
  );
}

export default Header;