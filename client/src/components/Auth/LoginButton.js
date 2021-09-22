import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GlobalStyles from "../GlobalStyles";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Log In</button>
    )
  );
};

export default LoginButton;
