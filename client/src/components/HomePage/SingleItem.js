// Don't forget to comment
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const SingleItem = ({
  setIsCartOpen,
  item,
  idx,
  addItemToCart,
  addItemToWishlist,
}) => {
  const history = useHistory();

  // Funtion that will be called when you press add button on item
  const handleAddBtn = (ev, id) => {
    ev.stopPropagation();
    setIsCartOpen(true);

    addItemToCart(id, 1);

  };


  const handleAddWishlistBtn = (ev, id) => {
    ev.stopPropagation();

    addItemToWishlist(id)

  };

  return (
    <Item>
      <ImgWrapper
        key={idx}
        onClick={() => {
          history.push(`/itemDetail/${item._id}`);
          window.scrollTo(0, 0);
        }}
      >
        <Img id="img" src={item.imageSrc} alt="Item picture" loading="lazy" />
        <ItemDetails>
          <ItemName>{item.name}</ItemName>
          <Price>{item.price}</Price>
          <span>
          <AddButton
            id="addBtn"
            disabled={item.numInStock <= 0 ? true : false}
            onClick={(ev) => {
              handleAddBtn(ev, item._id);
            }}
          >
            {item.numInStock > 0 ? (
              <MdShoppingCart />
            ) : (
              <MdRemoveShoppingCart />
            )}
          </AddButton>
            <WishButton onClick={(ev) => handleAddWishlistBtn(ev, item._id)}>
              <AiOutlineStar />
            </WishButton>
            </span>
        </ItemDetails>
      </ImgWrapper>
    </Item>
  );
};

export default SingleItem;

const Item = styled.div`
  width: 340px;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: var(--color-darkTurq);
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
    transform: translateX(7.5%) translateY(-7.5%);
  }
`;

const AddButton = styled.button`
  color: #fff;
  border: none;
  background: none;
  font-size: 2.5rem;
  cursor: pointer;
  &:disabled {
    color: lightgray;
    cursor: not-allowed;
    transform: none;
  }
`;
const WishButton = styled.button`
  color: #fff;
  border: none;
  background: none;
  font-size: 2.5rem;
  cursor: pointer;
  &:disabled {
    color: lightgray;
    cursor: not-allowed;
    transform: none;
  }
`;

const ItemName = styled.p`
  color: #fff;
  width: 70%;
  text-align: center;
  line-height: 1.2;
  font-size: 1.2rem;
  margin-bottom: 2.2rem;
`;

const Price = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;
