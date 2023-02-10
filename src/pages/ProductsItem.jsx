import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import styled from 'styled-components';

const ProductsItem = ({PRODUCTS}) => {

    const navigate = useNavigate();
  return (
    <>
        {PRODUCTS.map((item)=>{
            return (
                <>
                  <Container>
                    <h3>{item.title}</h3>
                     <Button onClick={()=>{navigate(`/products/${item.id}/details`)}}>Details</Button>
                  </Container>
                </>
            )
        })}
    </>
  )
}

export default ProductsItem;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    width: 800px;
    height: 100px;
    border-radius: 11px;
    text-align: center;
    justify-content: space-between;
    padding: 0 60px 0 40px;
    align-items: center;
    margin-bottom: 1rem;
    background-color: white;
    margin-top:1rem;
 `