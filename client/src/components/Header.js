// Don't forget to comment
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

const Header = () => {
  return (
    <Wrapper>
      {/* <GlobalStyles /> */}
      <Nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeTitle>Home</HomeTitle>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartTitle>Shopping Cart</CartTitle>
        </Link>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: inline;
  background: var(--color-paleGreen);
  height: 110px;
  padding: var(--padding-page) 18px;
`;

const HomeTitle = styled.h1`
  float: left;
  font-size: 2rem;
  margin-left: 5px;
  text-decoration: none;
`;
const CartTitle = styled.h1`
  float: right;
  padding-top: 10px;
  font-size: 1rem;
  margin-left: 5px;
  text-decoration: none;
`;

const Nav = styled.nav``;

export default Header;
