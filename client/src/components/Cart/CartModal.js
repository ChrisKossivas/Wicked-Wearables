import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleItem from "../HomePage/SingleItem";

const Cart = ({ fetchCartRequest, setIsCartOpen, cartItems }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//is this necessary?
  useEffect(() => {
    const userId = localStorage.getItem("userData");
    if (fetchCartRequest) {
      fetchCartRequest(userId);
    }
  }, []);
console.log(cartItems)
  return (
    <Container>
      <button onClick={() => setIsCartOpen(false)}>X</button>
      {cartItems.map(cartItem => (<SingleItem item={cartItem} hideAddButton/>
        ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: whitesmoke;
  position: absolute;
  top: 80px;
  right: 0;
  height: 100vh;
  width: 400px;
`;

export default Cart;

//remember to add styling.