import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../Wicked_Wearables3.png";
import { Link } from "react-router-dom";

// .post("/api/item/wishlist", addToWishList)

const Wishlist = () => {
  // Set a state in which to store the JSON data
  const [wishlistState, setWishlistState] = useState();

  useEffect(() => {
    setWishlistState(JSON.parse(localStorage.getItem("Wishlist")));
  }, []);

  return (
    <div>
      {wishlistState ? (
        <Wrapper>
          {wishlistState.map((wishlistItem) => {
            return (
              <MainPage>
                <AllWishItems>
                  <ImgWrapper>
                    <Img
                      id="img"
                      src={wishlistItem.imageSrc}
                      alt="Item picture"
                      loading="lazy"
                    />
                    <Link to={`/itemDetail/${wishlistItem._id}`}>
                      <ItemDetails>
                        <ItemName>{wishlistItem.name}</ItemName>
                        <Price>{wishlistItem.price}</Price>
                        <ItemName>{wishlistItem.category}</ItemName>
                        <p>Click for more details!</p>
                      </ItemDetails>
                    </Link>
                  </ImgWrapper>
                </AllWishItems>
              </MainPage>
            );
          })}
        </Wrapper>
      ) : (
        <MainPage>
          <WishlistTitle>Best wishes</WishlistTitle>
        </MainPage>
      )}
      <BottomImg style={{ backgroundImage: `url(${Footer})` }} />
    </div>
  );
};

export default Wishlist;

const MainPage = styled.div`
  background-color: #f1f1f1;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  display: grid;
  justify-content: center;
  min-height: 100vh;
`;

const AllWishItems = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const WishlistTitle = styled.h1``;

const BottomImg = styled.footer`
  min-height: 13vh;
`;

const Wrapper = styled.div``;

const ItemName = styled.p`
  color: #316b83;
  width: 70%;
  text-align: center;
  line-height: 1.2;
  font-size: 1.2rem;
  margin-bottom: 2.2rem;
`;

const Price = styled.h3`
  color: #316b83;
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;

const ImgWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 280px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
  &:hover {
    border: solid 1px var(--color-darkTurq);
    #img {
      transform: rotate(5deg) scale(1.3);
    }
  }
`;

const Img = styled.img`
  transition: transform 0.4s ease-in;
`;

const ItemDetails = styled.div`
  background-color: #fabf7c;
  opacity: 0;
  width: 280px;
  height: 360px;
  border-radius: 10px;
  padding-top: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease-in;
  &:hover {
    opacity: 0.9;
    transform: translateX(5.5%) translateY(-5.5%);
  }
`;
