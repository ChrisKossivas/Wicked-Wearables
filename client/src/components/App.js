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
import ConfirmPage from "./ConfirmPage";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);

  // const [cartItems, setCartItems] = useState([]);

  const [stopBtnClick, setStopBtnClick] = useState(false)

  // function addCartItem(item) {
  //   setCartItems([...cartItems, item]);
  // }

  // Fetch to find selected item and add the item to cart(***localStorage*(*) based on itemId and selected quantity
  const addItemToCart = (_id, quantity) => {
    // if (stopBtnClick) {
    //   return;
    // }
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
          const oldCart = JSON.parse(localStorage.getItem("newCart")) || [];

          for (let i = 0; i < oldCart.length; i++) {
            // console.log(oldCart[i]._id);
            if (oldCart[i]._id === cart._id) {
              // console.log("same!");
              return;

            }
          }
          cart.numInStock -= quantity;
          oldCart.push(cart);
          localStorage.setItem("newCart", JSON.stringify(oldCart));
          setCartStatus(!cartStatus);
      });
  };



  const addItemToWishlist = (_id) => {
    const requestAddWishlist = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId: _id }),
    };
    fetch("/api/item/wishlist", requestAddWishlist)
      .then((res) => res.json())
      .then((data) => {
        const { message, wishList } = data;
        if (message === "Wishlist Items!") {
          const oldWishlist = JSON.parse(localStorage.getItem('Wishlist')) || [];
          for (let i = 0; i < oldWishlist.length; i++) {
            if (oldWishlist[i]._id === wishList._id) {
              return
            }
          }
          oldWishlist.push(wishList)
          localStorage.setItem("Wishlist", JSON.stringify(oldWishlist));
        }
      });
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <Header setIsCartOpen={setIsCartOpen} />
        <Switch>
          <Route exact path="/">
            <HomePage
              addItemToWishlist={addItemToWishlist}
              setIsCartOpen={setIsCartOpen}
              // addCartItem={addCartItem}
              addItemToCart={addItemToCart}
            ></HomePage>
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/itemDetail/:itemId">
            <ItemDetails
              addItemToWishlist={addItemToWishlist}
              addItemToCart={addItemToCart}
              setIsCartOpen={setIsCartOpen}
            />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist addItemToCart={addItemToCart} />
          </Route>
          <Route exact path="/error">
            <ErrorPage></ErrorPage>
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage></CheckoutPage>
          </Route>
          <Route exact path="/confirm">
            <ConfirmPage />
          </Route>
        </Switch>
        {isCartOpen && (
          <CartModal
            setIsCartOpen={setIsCartOpen}
            cartStatus={cartStatus}
            setCartStatus={setCartStatus}
          />
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
