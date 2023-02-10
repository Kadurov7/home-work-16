import React from 'react'
import styled from 'styled-components'


const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  width: 109px;
  height: 48px;
  font-size: 18px;
  background-color: rgb(25, 174, 159);
  color: white;
  text-align: center;
  border-radius: 30px;
  border: none;
`;