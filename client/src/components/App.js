import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/index";
import ItemDetails from "./ItemDetails/index";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import CartModal from './Cart/CartModal'
function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  // useEffect(() => {
  //   fetch("/bacon")
  //     .then((res) => res.json())
  //     .then((data) => setBacon(data));
  // }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/itemDetail/:itemId">
            <ItemDetails></ItemDetails>
          </Route>
          <Route exact path="/error"></Route>
        </Switch>
        {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
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
