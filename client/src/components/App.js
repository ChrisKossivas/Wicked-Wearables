import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            App
          </Route>
          <Route exact path="/cart"></Route>
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
  height: calc(100vh - 110px);
`;
