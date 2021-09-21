import React, { useState, useEffect } from "react";
import styled from "styled-components";

//import items
//loading wheel

/// responsive page needed

const HomePage = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [Loaded, setLoaded] = useState(false);
  ///get will change for singular "item"
  useEffect(() => {
    fetch("/api/items/")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        setLoaded(true);
      });
  }, []);

  return (
    <Main id="grid">
      <TextWrapper>
        <Paragraph>Check out all our ...stuff</Paragraph>
      </TextWrapper>
      {/* {Loaded ? ( */}
      <Wrapper>
        {/* {allProduct.data.map((item, i) => {
                        return <SingleItem key={i} item={item} i={i} />;
                    })} */}
      </Wrapper>
      {/* ) : (
                <>
                    <Center>
                        <Loading />
                    </Center>
                </>
            )} */}
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
  background-color: white;
`;

const Paragraph = styled.p`
  /* color: $; */
  font-weight: 700;
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
`;
