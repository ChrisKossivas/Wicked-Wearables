import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  // console.log("user", user);

  // Unique user id is at user.sub
  if (user !== undefined) {
    const userData = user;
    // console.log("userData", userData);
    localStorage.setItem("User", JSON.stringify(userData));
  }
  return (
    isAuthenticated && (
      <div>
        <UserAvatar src={user.picture} alt={user.name} />
        <div></div>
        <ProfileText>{user.name}</ProfileText>
      </div>
    )
  );
};

const UserAvatar = styled.img`
  border-radius: 50%;
`;
const ProfileText = styled.h2`
  color: white;
  float: left;
`;

export default Profile;
