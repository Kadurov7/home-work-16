import React from 'react'
import {useNavigate} from "react-router-dom"
import styled from 'styled-components'
import Button from '../components/Button'


const MyOrder = () => {

    const navigate = useNavigate();
    const goToBack = ()=>{
        navigate(-1);
        console.log(goToBack);
    }
   
  return (
    <>
     <StyleTitle>is anyone here?</StyleTitle>
     <StyleBtn>
     <Button onClick={goToBack}>Go Back</Button>
     </StyleBtn>
    </>
  )
}

export default MyOrder;


const StyleTitle = styled.h2`
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