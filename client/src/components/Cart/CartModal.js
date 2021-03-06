import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SingleItem from "../HomePage/SingleItem";

const Cart = ({ setIsCartOpen, cartStatus, setCartStatus }) => {
  let history = useHistory();

  const [storageItems, setStorageItems] = useState();

  useEffect(() => {
    setStorageItems(JSON.parse(localStorage.getItem("newCart")));
  }, [cartStatus]);

  // change page to /checkout
  const clickToCheckout = () => {
    setIsCartOpen(false)
    history.push("/checkout");
  };

  // onClick for the remove item button. Will remove the cart(**localStorage**), item based on itemId
  const removeItemFromCart = (itemId) => {
    const oldCart = JSON.parse(localStorage.getItem("newCart"));

    for (let i = 0; i < oldCart.length; i++) {
      if (oldCart[i]._id === itemId) {
        oldCart.splice(i, 1);
        localStorage.setItem("newCart", JSON.stringify(oldCart));
        setCartStatus(!cartStatus);
      }
    }

    // window.location.reload()
  };


  return (
    <Container>
      <CloseBtn onClick={() => setIsCartOpen(false)}>X</CloseBtn>
      {/* {cartItems.map((cartItem) => (
        <SingleItem item={cartItem} hideAddButton />
      ))} */}
      <DisplayCart>
        {storageItems ? (
          storageItems.map((eachCartItem) => {
            // ***render data with styled components***
            const { name, price, imageSrc, _id } =
              eachCartItem;

            return (
              <ItemCartDetails key={_id}>
                <span>
                  <ItemImg src={imageSrc} />
                  <Price>{price}</Price>
                  <ItemName>{name}</ItemName>
                </span>
                <RemoveItemBtn onClick={() => removeItemFromCart(_id)}>
                  Remove item
                </RemoveItemBtn>
              </ItemCartDetails>
            );
          })
        ) : (
          <></>
        )}
      </DisplayCart>



      {storageItems && storageItems.length > 0 ? (
        <CheckoutBtn onClick={clickToCheckout}>Checkout</CheckoutBtn>
      ) : null}
    </Container>
  );
};


const CloseBtn = styled.button`
background-color: #316B83;
border: none;
`;

const Price = styled.p`
  font-size: 25px;
`;

const ItemName = styled.p`
  font-weight: bold;
`;

const ItemImg = styled.img`
  border-radius: 15px;
  width: 170px;
  height: 170px;
  object-fit: cover;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
`;





const ItemCartDetails = styled.div`
padding: 2vh;

`;


const Container = styled.div`
  overflow: auto;
  box-shadow: 8px 8px 8px 8px blueviolet;
  background-color: ghostwhite;
  display: flex;
  flex-direction: column;
  position: sticky;
  position: absolute;
  text-align: center;
  border-radius: 5px;
  max-width: 100%;
  max-height: 100%;
  top: 80px;
  right: 0;
  height: 100vh;
  width: 400px;
  padding: 30px;
;`

const DisplayCart = styled.div``;

const CheckoutBtn = styled.button`
  background: var(--color-lightGrey);
  color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  font-weight: bold;
  font-size: 25px;
  padding: 12px;
`;

const RemoveItemBtn = styled.button`
  width: 280px;
  background: var(--color-darkTurq);

  color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 35px;
`;

export default Cart;

//remember to add styling.
