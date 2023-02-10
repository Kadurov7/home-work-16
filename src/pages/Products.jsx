import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';
import ProductsItem from './ProductsItem';
import styled from 'styled-components';


const Products = ({PRODUCTS}) => {

    const navigate = useNavigate();
    const goToback = ()=>{
        navigate(-1)
    }
  return (
    <>
      <div>
        <ProductsItem PRODUCTS={PRODUCTS}/>
        <Container>
        <Button onClick={goToback}>Go Back</Button>
        </Container>
      </div>
    </>
  )
}

export default Products;

const Container = styled.div`
     margin-top: 1rem;
    margin-right: 49rem;
`

