import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SingleItem from "./SingleItem";
/// responsive page needed

const AllItems = ({
  setIsCartOpen,
  filteredProduct,
  selectedItem,
  setSelectedItem,
}) => {
  // Page shows 12 items at once
  // Click 'Load More' buton to print next 12 items
  const numOfRender = 12;
  const [numOfItem, setNumOfItem] = useState(numOfRender);
  const handleLoad = () => {
    setNumOfItem(numOfItem + numOfRender);
  };
  const slice = filteredProduct.slice(0, numOfItem);

  // bodypart list
  //   ["Arms", "Chest", "Feet", "Hands", "Head", "Neck", "Torso", "Waist", "Wrist"]

  // when filteredProduct changes
  // rendered items number goes back to the first 12
  useEffect(() => {
    setNumOfItem(numOfRender);
  }, [filteredProduct]);

  return (
    <Main id="homepage">
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
            />
          );
        })}
        {filteredProduct.length <= numOfItem ? null : (
          <LoadBtn onClick={handleLoad}>Load More</LoadBtn>
        )}
      </Wrapper>
    </Main>
  );
};

export default AllItems;

const Main = styled.div`
  flex: 10 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
`;

const Wrapper = styled.div`
  max-width: 1500px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  flex-wrap: wrap;
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
  display: inline-block;
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
