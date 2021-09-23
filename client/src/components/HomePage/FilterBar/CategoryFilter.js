import React, { useState } from "react";
import styled from "styled-components";

const CategoryFilter = ({ allProduct, setSelectedCategory }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isListOpen, setIsListOpen] = useState(false);

  // Making category list(short(5) or all)
  const categoryRepeated = allProduct.map((product) => product.category).sort();
  const categoryList = [...new Set(categoryRepeated)];
  const categoryListLess = categoryList.slice(0, 5);

  // Function that will render category list
  const generateList = (arr) => {
    return arr.map((prop) => (
      <button
        onClick={() => setSelectedCategory(prop)}
        key={prop}
        className="list"
      >
        {prop}
      </button>
    ));
  };

  return (
    <Wrapper>
      <Title>
        <p>CATEGORY</p>
        <button onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          {isCategoryOpen ? "-" : "+"}
        </button>
      </Title>
      {isCategoryOpen && !isListOpen ? generateList(categoryListLess) : null}
      {isCategoryOpen && isListOpen ? generateList(categoryList) : null}
      {isCategoryOpen ? (
        <ShowBtn onClick={() => setIsListOpen(!isListOpen)}>
          {!isListOpen ? "Show More" : "Show Less"}
        </ShowBtn>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid 1px var(--color-paleGreen);
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  button {
    font-size: 1.1rem;
    background: none;
    border: none;
    display: block;
    padding: 0.4rem 0.2rem;
    cursor: pointer;

    &.list {
      :hover {
        color: var(--color-darkTurq);
        font-weight: bold;
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: bold;
  }

  button {
    color: var(--color-paleGreen);
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const ShowBtn = styled.button`
  color: var(--color-paleGreen);

  &:hover {
    font-weight: bold;
  }
`;

export default CategoryFilter;
