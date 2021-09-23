import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SingleItem from "./SingleItem";

const AllItems = ({
  setIsCartOpen,
  filteredProduct,
  selectedItem,
  setSelectedItem,
  addItemToCart,
}) => {
  const history = useHistory();
  // Page shows 12 items at once
  // Click 'Load More' buton to print next 12 items
  const numOfRender = 12;
  const [numOfItem, setNumOfItem] = useState(numOfRender);
  const handleLoad = () => {
    setNumOfItem(numOfItem + numOfRender);
  };
  const slice = !filteredProduct ? 0 : filteredProduct.slice(0, numOfItem);

  if (!slice) history.push("/error");
  // bodypart list
  //   ["Arms", "Chest", "Feet", "Hands", "Head", "Neck", "Torso", "Waist", "Wrist"]

  // when filteredProduct changes
  // rendered items number goes back to the first 12
  useEffect(() => {
    setNumOfItem(numOfRender);
  }, [filteredProduct]);

  return (
    <Main>
      {slice ? (
        <>
          <Wrapper>
            {slice.map((item, i) => {
              return (
                <SingleItem
                  key={i}
                  item={item}
                  idx={i}
                  setIsCartOpen={setIsCartOpen}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  addItemToCart={addItemToCart}
                />
              );
            })}
          </Wrapper>
          {filteredProduct.length <= numOfItem ? null : (
            <LoadBtn onClick={handleLoad}>Load More</LoadBtn>
          )}
        </>
      ) : null}
    </Main>
  );
};

export default AllItems;

const Main = styled.div`
  background-color: #f1f1f1;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  /* max-width: 1500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  padding-top: 20px;
  display: grid;
  justify-content: center;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LoadBtn = styled.button`
  border-radius: 4px;
  background-color: var(--color-paleGreen);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  padding: 16px;
  width: 240px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  cursor: pointer;
  display: block;
  position: relative;
  transition: 0.5s;

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;
