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
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // function addCartItem(item) {
  //   setCartItems([...cartItems, item]);
  // }

  // Fetch to find selected item and add the item to cart(***localStorage*(*) based on itemId and selected quantity 
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
          const oldCart = JSON.parse(localStorage.getItem('newCart')) || [];
          console.log(oldCart)
          console.log(cart._id)
          for (let i = 0; i < oldCart.length; i++) {
            console.log(oldCart[i]._id);
            if (oldCart[i]._id === cart._id) {
              console.log('same!')
              return
            }
          }
          cart.numInStock -= quantity
          oldCart.push(cart)
          localStorage.setItem("newCart", JSON.stringify(oldCart));
          // setCartStatus("idle");
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
