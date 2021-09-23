import React, { useState } from "react";
import styled from "styled-components";

const SingleItem = ({ item, addCartItem, hideAddButton }) => {
  //   let history = useHistory();

  //   const addToCartFunc = (item, ev) => {
  //     ev.stopPropagation();
  //
  //   };

  //   let disabled = false;

  //   if (item.numInStock <= 0) {
  //
  //     disabled = true;
  //   }

  return (
    ///item wrapps everything and will have an Onclick that will direct to the Item Details
    <Item
    //   key={i}
    //   onClick={() => {
    //     history.push(`/product/${}`);
    //     window.scrollTo(0, 0);
    //   }}
    >
      <ImgWrapper>
        <Img src={item.imageSrc} alt="Item picture" loading="lazy" />
      </ImgWrapper>
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <Price>{item.price}</Price>
        <Footer>
          <Stock>
            Quantity: <Span>{item.numInStock}</Span>
          </Stock>
          {!hideAddButton &&<AddButton
          onClick={()=>addCartItem(item)
          }
          >
            Add
          </AddButton>}
        </Footer>
      </ItemDetails>
    </Item>
  );
};

export default SingleItem;

const Item = styled.div`
  display: flex;
  text-decoration: none;
  &:visited {
    color: #8ca1a5;
  }
  width: 12%;
  flex-direction: column;
  align-items: center;
  padding: 35px 30px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
  }
`;

const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  &:hover {
    transform: rotate(15deg) scale(1.1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemName = styled.h5`
  height: 85px;
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Stock = styled.p`
  color: #316b83;
  padding-right: 10px;
`;

const Span = styled.span`
  font-weight: 700;
  &.normal {
    color: grey;
  }
`;

const AddButton = styled.button`
  border: none;
  background-color: #8ca1a5;
  font-weight: 600;
  border-radius: 10px;
  width: 4em;
  height: 2em;
  &:active {
    transform: scale(1.5);
  }
  &.true {
    opacity: 0.4;
  }
  &:hover {
    background-color: #316b83;
  }
`;

const Price = styled.p`
  font-weight: 700;
`;