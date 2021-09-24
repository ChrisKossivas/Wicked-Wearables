import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SingleItem from "../HomePage/SingleItem";

const Cart = ({ fetchCartRequest, setIsCartOpen, cartItems }) => {
  const [show, setShow] = useState(false);
  let history = useHistory()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//is this necessary?
  useEffect(() => {
    const userId = localStorage.getItem("userData");
    if (fetchCartRequest) {
      fetchCartRequest(userId);
    }
  }, []);

  
  // change page to /checkout
  const clickToCheckout = () => {
    history.push("/checkout")
  }

  // ***needs state to check status of cart***
  // const allCartItems = JSON.parse(localStorage.getItem('newCart'))


  return (
    <Container>
      <button onClick={() => setIsCartOpen(false)}>X</button>
      {cartItems.map(cartItem => (<SingleItem item={cartItem} hideAddButton/>
        ))}
        <DisplayCart>
          {/* {allCartItems.map((eachCartItem) => {
            // ***render data with styled components***
            const { name, price, body_location, category, imageSrc, _id} = eachCartItem

            return (
              <div key={_id}>

              </div>
            )
          })} */}
        </DisplayCart>
          <CheckoutBtn onClick = {clickToCheckout}>
            Checkout
          </CheckoutBtn>
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
  box-shadow: 1px 2px 2px 0px blueviolet;
  background-color: whitesmoke;
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
`;

const DisplayCart = styled.div`




`

const CheckoutBtn = styled.button`




`

export default Cart;

//remember to add styling.