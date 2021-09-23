import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BrandFilter = ({ allCompany, setSelectedBrand }) => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isListOpen, setIsListOpen] = useState(false);

  // Making brand list(short(5) or all)
  const companyList = allCompany
    .map((product) => {
      return { name: product.name, id: product._id };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const companyListLess = companyList.slice(0, 5);

  // Function that will render category list
  const generateList = (arr) => {
    return arr.map((prop) => (
      <button
        onClick={() => setSelectedBrand(prop)}
        key={prop.id}
        className="list"
      >
        {prop.name}
      </button>
    ));
  };

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Title>
        <p>BRAND</p>
        <button onClick={() => setIsBrandOpen(!isBrandOpen)}>
          {isBrandOpen ? "-" : "+"}
        </button>
      </Title>
      {isBrandOpen && !isListOpen ? generateList(companyListLess) : null}
      {isBrandOpen && isListOpen ? generateList(companyList) : null}
      {isBrandOpen ? (
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

export default BrandFilter;
