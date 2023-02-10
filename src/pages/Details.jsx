import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'


const Details = ({products}) => {
  
    const {id} = useParams() 
    const navigate = useNavigate()
     const goToBack = ()=>{
        navigate(-1)
     }

  return (
    <>
       <StyledDetail>{products[id - 1].title}</StyledDetail>
       <StyleBtn>
       <Button onClick={goToBack}>Go Back</Button>
       </StyleBtn>
    </>
  )
}

export default Details

const StyledDetail = styled.div`
  background-color:white;
  border-radius: 11px;
  width: 800px;
  height: 150px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 7rem;
  font-size: x-large;
`

const StyleBtn = styled.div`
    margin-top: 1rem;
    margin-right: 43rem;
`

