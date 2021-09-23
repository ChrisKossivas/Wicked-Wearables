import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <LogoutB onClick={() => logout(localStorage.clear())}>Log Out</LogoutB>
    )
  );
};

const LogoutB = styled.button`
  background-color: var(--color-pink);
  color: white;
  border-radius: 4px;
  border: 0;
  &:hover {
    transform: rotate(-5deg) scale(1.3);
    background: #d1afdd;
    border: solid #5dc451;
  }
`;

export default LogoutButton;
