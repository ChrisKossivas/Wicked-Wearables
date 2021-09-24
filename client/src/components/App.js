import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/index";
import ItemDetails from "./ItemDetails/index";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CartModal from "./Cart/CartModal";
import ItemDescription from "./ItemDetails/ItemDescription";
import ErrorPage from "./ErrorPage";
import CheckoutPage from "./CheckoutPage";
import Wishlist from "./Cart/Wishlist";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // function addCartItem(item) {
  //   setCartItems([...cartItems, item]);
  // }

  const addItemToCart = (_id, quantity) => {
    const requestAddCart = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId: _id, quantity: quantity }),
    };
    fetch("/api/item", requestAddCart)
      .then((res) => res.json())
      .then((newCart) => {
        const { message, cart } = newCart;
        if (message === "Cart Items!") {
          localStorage.setItem("newCart", JSON.stringify(cart));
          // setCartStatus("idle");
        } else if (message === "Item Already In Cart") {
          return;
        }
      });
  };

  //console.log(cartItems)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <Header setIsCartOpen={setIsCartOpen} />
        <Switch>
          <Route exact path="/">
            <HomePage
              setIsCartOpen={setIsCartOpen}
              // addCartItem={addCartItem}
              addItemToCart={addItemToCart}
            ></HomePage>
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/itemDetail/:itemId">
            <ItemDetails addItemToCart={addItemToCart} />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist></Wishlist>
          </Route>
          <Route exact path="/error">
            <ErrorPage></ErrorPage>
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage></CheckoutPage>
          </Route>
        </Switch>
        {isCartOpen && (
          <CartModal setIsCartOpen={setIsCartOpen} cartItems={cartItems} />
        )}
      </Main>
    </BrowserRouter>
  );
}
// Comment to test
export default App;

const Main = styled.div`
  /* background: var(--color-orange); */
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  height: 100vh;
  width: 100%;
`;
