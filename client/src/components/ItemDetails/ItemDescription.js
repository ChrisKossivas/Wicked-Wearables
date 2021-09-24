import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

const ItemDescription = ({
  selectedItem,
  selectedCompany,
  addItemToCart,
  addItemToWishlist,
}) => {
  const { name, price, category, body_location, imageSrc, numInStock, _id } =
    selectedItem;

  const initialQty = numInStock <= 0 ? 0 : 1;
  const [quantity, setQuantity] = useState(initialQty);


  // Function that will validate quantity number
  const validateQty = (num) => {
    return num <= 0 ? 1 : num > numInStock ? numInStock : setQuantity(num);
  };

  // Function that will add quantity number
  const handleSub = () => {
    const result = quantity - 1;
    validateQty(result);
  };

  // Function that will subtract quantity number
  const handleAdd = () => {
    const result = quantity + 1;
    validateQty(result);
  };

  return (
    <Wrapper>
      <Image src={imageSrc} alt={name} />
      <Detail>
        <TagWrapper>
          <Tag>{category}</Tag>
          <Tag>{body_location}</Tag>
        </TagWrapper>
        <Title>{name}</Title>
        {selectedCompany ? (
          <Company>
            <a href={`${selectedCompany.url}`}>{selectedCompany.name}</a>
          </Company>
        ) : null}
        <Quantity>
          <button onClick={handleSub}>-</button>
          <button onClick={handleAdd}>+</button>
          <input
            type="text"
            value={quantity}
            onChange={(ev) => setQuantity(ev.target.value)}
          />
        </Quantity>
        <Price>{price}</Price>
        {numInStock <= 0 ? (
          <CartBtn disabled>Out of Stock</CartBtn>
        ) : (
          <CartBtn onClick={() => addItemToCart(_id, quantity)}>
            Add to Cart
          </CartBtn>
        )}
        <WishBtn onClick={() => addItemToWishlist(_id)}>
          <AiOutlineStar />
        </WishBtn>
      </Detail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  min-width: 800px;
  width: 50%;
  box-sizing: border-box;
  padding: 6rem 8rem;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  flex: 1;
  margin-right: 4rem;
`;

const Detail = styled.div`
  flex: 1;
  text-align: center;
  font-family: "Raleway", sans-serif;
`;

const TagWrapper = styled.p`
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  color: #fff;
  background-color: var(--color-paleGreen);
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
`;

const Title = styled.h2`
  margin-bottom: 0.4rem;
`;

const Company = styled.p`
  margin-bottom: 2.5rem;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Quantity = styled.span`
  position: relative;

  input {
    width: 75px;
    height: 28px;
    border: solid 2px var(--color-paleGreen);
    border-radius: 50px;
    font-family: inherit;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  button {
    color: #fff;
    background-color: var(--color-paleGreen);
    border: none;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: -9px;
    left: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }
  }

  button:first-of-type {
    position: absolute;
    top: -9px;
    left: 1px;
  }
`;

const Price = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CartBtn = styled.button`
  color: #fff;
  background-color: var(--color-darkTurq);
  font-family: inherit;
  font-size: 1.4rem;
  border: none;
  border-radius: 15px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: transform 0.4s ease-in, background-color 0.4s ease-in;

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }

  &:hover {
    &:not([disabled]) {
      transform: scale(1.1);
      background-color: var(--color-pink);
    }
  }
`;

const WishBtn = styled.button`
  color: #fff;
  background-color: var(--color-darkTurq);
  font-family: inherit;
  font-size: 1.4rem;
  border: none;
  border-radius: 15px;
  padding: 0.75rem 1.5rem;
  margin-left: 3px;
  cursor: pointer;
  transition: transform 0.4s ease-in, background-color 0.4s ease-in;

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }

  &:hover {
    &:not([disabled]) {
      transform: scale(1.1);
      background-color: var(--color-pink);
    }
  }
`;

export default ItemDescription;
