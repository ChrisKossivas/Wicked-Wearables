import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log("user", user);
  const userData = user.sub;
  //   localStorage.setItem("id", { userData });
  return (
    isAuthenticated && (
      <div>
        <UserAvatar src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    )
  );
};

const UserAvatar = styled.img`
  border-radius: 50%;
`;

export default Profile;
