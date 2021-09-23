import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/index";
import ItemDetails from "./ItemDetails/index";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CartModal from "./Cart/CartModal";
import ItemDescription from "./ItemDetails/ItemDescription";
import Wishlist from "./Cart/Wishlist";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(item) {
    setCartItems([...cartItems, item]);
  }

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
              addCartItem={addCartItem}
            ></HomePage>
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/itemDetail/:itemId">
            <ItemDetails></ItemDetails>
          </Route>
          <Route exact path="/wishlist">
            <Wishlist></Wishlist>
          </Route>
          <Route exact path="/error"></Route>
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
