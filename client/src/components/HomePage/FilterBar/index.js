import React from "react";
import styled from "styled-components";
import { CgOptions } from "react-icons/cg";

import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";

const FilterBar = ({
  allProduct,
  allCompany,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
}) => {
  return (
    <Wrapper>
      <FilterWrapper>
        <FilterTitle>
          <CgOptions />
          <p>FILTERS</p>
        </FilterTitle>
        {/* selected filter will show as tag */}
        {/* one filter can be chosen each category and brand */}
        {selectedCategory || selectedBrand ? (
          <Tag>
            {selectedCategory ? (
              <p>
                {selectedCategory}
                <button onClick={() => setSelectedCategory()}>⨉</button>
              </p>
            ) : null}
            {selectedBrand ? (
              <p>
                {selectedBrand.name}
                <button onClick={() => setSelectedBrand()}>⨉</button>
              </p>
            ) : null}
          </Tag>
        ) : null}
      </FilterWrapper>
      <>
        <CategoryFilter
          allProduct={allProduct}
          setSelectedCategory={setSelectedCategory}
        />
        <BrandFilter
          allCompany={allCompany}
          setSelectedBrand={setSelectedBrand}
        />
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 360px;
  padding: 3rem;
  flex: 1.5;
  font-size: 1.2rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px var(--color-paleGreen);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const FilterTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;

  p {
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;

const Tag = styled.div`
  font-size: 0.9rem;
  font-weight: bold;

  p {
    color: #fff;
    background-color: var(--color-pink);
    border-radius: 10px;
    display: inline-block;
    padding: 0.2rem 1rem;
    margin: 0.2rem;
  }

  p:first-of-type {
    margin-top: 0.5rem;
  }

  button {
    color: #fff;
    background: none;
    border: none;
    font-size: inherit;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export default FilterBar;
