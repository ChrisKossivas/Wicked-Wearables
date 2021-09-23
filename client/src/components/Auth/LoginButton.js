import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <LoginB onClick={() => loginWithRedirect()}>Log In</LoginB>
    )
  );
};

const LoginB = styled.button`
  background: var(--color-paleGreen);
  color: white;
  border-radius: 4px;
  border: 0;
  &:hover {
    transform: rotate(-5deg) scale(1.3);
    background: var(--color-lightGrey);
    border: solid #5dc451;
  }
`;

export default LoginButton;
