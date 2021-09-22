// Don't forget to comment
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cart = ({ fetchCartRequest, productInCart, setIsCartOpen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const userId = localStorage.getItem("userData");
    if (fetchCartRequest) {
      fetchCartRequest(userId);
    }
  }, []);

  return (
    <Container>
      <button onClick={() => setIsCartOpen(false)}>X</button>
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