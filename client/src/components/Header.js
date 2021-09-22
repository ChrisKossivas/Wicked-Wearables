// Don't forget to comment
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Profile from "./Auth/Profile";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeTitle>Home</HomeTitle>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartTitle>
            Shopping Cart
            <CartIcon>
              <FaCartArrowDown />
            </CartIcon>
          </CartTitle>
        </Link>
        <>
          <LoginButtons>
            <LoginButton />
            <LogoutButton />
          </LoginButtons>
          <ProfileWrapper>
            <Profile />
          </ProfileWrapper>
        </>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: inline;
  background: var(--color-paleGreen);
  height: 225px;
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
const LoginButtons = styled.div`
  float: right;
`;
const ProfileWrapper = styled.div`
  padding: 50px 25px 0 0;
`;
const CartIcon = styled.div`
  /* padding-top: 5px; */
`;

export default Header;
