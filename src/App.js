import React from 'react';
import styled from 'styled-components';

import routes from './routes';
import Header from './components/header/Header';

const StyledApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 70%;
margin: 0 auto;
background-color: #f9f9fa;
`

const App = () => {
  return (
    <StyledApp>
      <Header />
      { routes() }
    </StyledApp>
  );
}

export default App;
