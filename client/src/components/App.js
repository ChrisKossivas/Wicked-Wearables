import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/index";
import ItemDetails from "./ItemDetails/index";

function App() {
  // const [bacon, setBacon] = useState(null);

  // useEffect(() => {
  //   fetch("/bacon")
  //     .then((res) => res.json())
  //     .then((data) => setBacon(data));
  // }, []);

  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/itemDetail">
            <ItemDetails></ItemDetails>
          </Route>
          <Route exact path="/error"></Route>
        </Switch>
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
  background-color: #316b83;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;
