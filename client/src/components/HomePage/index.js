import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircularLoading from "../CircularLoading";
import SingleItem from "./SingleItem";

/// responsive page needed

const HomePage = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [Loaded, setLoaded] = useState(false);
  ///get will change for singular "item"
  useEffect(() => {
    fetch("/api/item/")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        setLoaded(true);
        // console.log(data.data);
      });
  }, []);

  return (
    <Main id="homepage">
      <TextWrapper>
        <Paragraph>Check out all our ...stuff</Paragraph>
      </TextWrapper>
      {Loaded ? (
        <Wrapper>
          {allProduct.data.map((item, i) => {
            return <SingleItem key={i} item={item} i={i} />;
          })}
        </Wrapper>
      ) : (
        <>
          <Center>
            <CircularLoading></CircularLoading>
          </Center>
        </>
      )}
    </Main>
  );
};

export default HomePage;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;

const Paragraph = styled.p`
  /* color: $; */
  font-weight: 600;
`;

const TextWrapper = styled.div``;

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-wrap: wrap;
`;
