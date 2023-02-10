import React from 'react'
import styled from 'styled-components';


const HomePage = () => {
  return (
    <StyledTitle>WELCOME</StyledTitle>
  )
}

export default HomePage;

const StyledTitle = styled.h2`
  background-color:white;
  border-radius: 11px;
  width: 800px;
  height: 150px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 7rem;
`