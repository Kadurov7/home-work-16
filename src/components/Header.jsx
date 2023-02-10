import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const Header = () => {
  return (
    <Container>
        <h1>
    <NavLink style={{color:"white",textDecoration:"none"}} to="/welcome">LOGO</NavLink>
        </h1>
    <nav>
      <StyledList>
        <h3>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#0a0a0a" : "white",
              textDecoration: isActive ? "none" : "none",
            })}
            to="/products"
          >
            Products
          </NavLink>
        </h3>
        <h3>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#0a0a0a" : "white",
              textDecoration: isActive ? "none" : "none",
            })}
            to="/myCart"
          >
            My Cart
          </NavLink>
        </h3>
        <h3>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#0a0a0a" : "white",
              textDecoration: isActive ? "none" : "none",
            })}
            to="/myOrder"
          >
            My Orders
          </NavLink>
        </h3>
      </StyledList>
    </nav>
  </Container>
  )
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(19, 115, 199);
  width: 100%;
  height: 80px;
`;

// const Logo = styled.h1`
//     color: white;
//     font-size: 1.9rem;
    
// `
const StyledList = styled.li`
  display: flex;
  gap: 8rem;
  list-style: none;
  text-decoration: none;
  h3 {
    font-size: x-large;
    color: white;
  }
`;