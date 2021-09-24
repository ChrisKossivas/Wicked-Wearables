// Don't forget to comment
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import Profile from "./Auth/Profile";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Banner from "./Wicked_Wearables.png";
import Banner2 from "./Wicked_Wearables2.png";

const Header = ({ setIsCartOpen }) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${Banner2})`,
      }}
    >
      <GlobalStyles />
      <Nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeTitle>Home</HomeTitle>
        </Link>
        <div onClick={() => setIsCartOpen(true)}>
          <CartTitle>
            Cart
            <CartIcon>
              <FaCartArrowDown />
            </CartIcon>
          </CartTitle>
        </div>
        <>
          <LoginButtons>
            <LoginButton />
            <LogoutButton />
          </LoginButtons>
          <ProfileWrapper>
            <Profile />
          </ProfileWrapper>
          <Link to="/wishlist">
            <WishlistButton>
              Wishlist
              <AiOutlineStar />
            </WishlistButton>
          </Link>
        </>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: inline;
  background: var(--color-darkTurq);
  min-height: 280px;
  padding: var(--padding-page) 18px;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
`;

const HomeTitle = styled.h1`
  float: left;
  font-size: 1.5rem;
  margin-left: 5px;
  text-decoration: none;
  color: white;
  &:hover {
    transform: rotate(-5deg) scale(1.5);
    color: #ae45ac;
    /* border: solid #ab83c9; */
    /* border-radius: 30%; */
  }
`;
const CartTitle = styled.button`
  float: right;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 0.75rem;
  margin-left: 5px;
  background: var(--color-paleGreen);
  color: white;
  border-radius: 4px;
  border: 0;
  width: 100px;
  &:hover {
    transform: rotate(5deg) scale(1.3);
    border: solid #d1afdd;
    background: #98d86d;
  }
`;

const WishlistButton = styled.button`
  float: right;
  background: var(--color-paleGreen);
  color: white;
  border-radius: 4px;
  border: 0;
  &:hover {
    transform: rotate(5deg) scale(1.1);
    background: #fabf7c;
    border: solid #ae45ac;
    color: #316b83;
  }
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
