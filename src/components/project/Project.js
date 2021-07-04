import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledProject = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ebeaed;
  text-align: left;
  padding: 0 20px;
  border: 1px solid #36354a;
  margin: 10px auto;

  a {
    text-decoration: none;
    color: #36354a;
  }

  :hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
`

const Project = ({ project: { name, location }, onClick }) => {
  return(
    <StyledProject onClick={onClick}>
      <Link to='/form'>
      <h3>{name}</h3>
      <h4>{location}</h4>
      </Link>
    </StyledProject>
);
};


export default Project;