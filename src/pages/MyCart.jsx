import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import styled from 'styled-components';

const MyCart = () => {

    const navigate = useNavigate();

    const goToBack = ()=>{
        navigate(-1)
    }
  return (
    <>
    <StyledTitle>My names Bekzhan Kadurov</StyledTitle>
    <StyleBtn>
    <Button onClick={goToBack} >Go Back</Button>
    </StyleBtn>
    </>
  )
}

export default MyCart;

const StyledTitle = styled.h2`
  background-color:white;
  border-radius: 11px;
  width: 800px;
  height: 150px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 7rem;
`
const StyleBtn = styled.div`
    margin-top: 1rem;
    margin-right: 43rem;
`