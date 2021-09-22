import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-3ftg977h.us.auth0.com";
const clientId = "l72aDgO1CTR0dbDjqZiIGiWZ490HY4vs";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
