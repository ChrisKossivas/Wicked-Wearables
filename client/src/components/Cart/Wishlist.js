import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../Wicked_Wearables3.png";
import { ImSpinner3 } from "react-icons/im";
import SingleItem from "../HomePage/SingleItem";

const Wishlist = () => {
  return (
    <>
      <MainPage>
        <WishlistTitle>Best wishes</WishlistTitle>
      </MainPage>
      <BottomImg
        style={{
          backgroundImage: `url(${Footer})`,
        }}
      />
    </>
  );
};

export default Wishlist;

const MainPage = styled.div`
  background-color: #f1f1f1;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  width: 100vw;
  height: 100vh;
`;
const WishlistTitle = styled.h1``;
const BottomImg = styled.footer`
  min-height: 13vh;
`;
const LoadingHome = styled.div`
  position: fixed;
  animation: rotation 2s linear infinite;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
