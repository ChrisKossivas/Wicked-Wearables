// Don't forget to comment
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cat from "./404_Cat.jpeg";

export default function ErrorPage() {
  return (
    <Wrapper>
      <h1>Sorry!</h1>
      <h3>This is not what you are looking for.</h3>
      <Img src={cat} alt="cat"></Img>
      <p>
        <HomeLink to="/">Home</HomeLink>
      </p>
    </Wrapper>
  );
}

const HomeLink = styled(Link)`
  padding: 10px 20px;
  top: 100px;
  margin-top: 50px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: #316b83;
  border: none;
  border-radius: 5px;
  display: block;
`;

const Img = styled.img`
  height: 50%;
  border-radius: 50px;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  height: 76vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
