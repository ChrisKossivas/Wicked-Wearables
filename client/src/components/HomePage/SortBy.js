import React from "react";
import styled from "styled-components";

const SortBy = ({ setSortedBy, dropDown }) => {
  return (
    <Wrapper>
      <Select onChange={(ev) => setSortedBy(ev.target.value)} ref={dropDown}>
        <option value="">Sort by</option>
        <option value="newest">Newest</option>
        <option value="lowest">Lowest price</option>
        <option value="highest">Highest price</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: right;
  position: absolute;
  top: -80px;
  right: 0;
  margin: 2rem 2.5rem;

  font-size: 1.5rem;
`;

const Select = styled.select`
  width: 200px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 2.5px;
`;

export default SortBy;
