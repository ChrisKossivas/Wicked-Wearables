import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

// REMOVE COMMENTS AFTER!!!

export default function CircularLoading() {
  return (
    <Wrapper>
      <Spin />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const animation = keyframes`
  from {
    transform: rotate(0deg) scale(1.5);
  }
  to {
    transform: rotate(360deg) scale(1.5);
  }
`;

const Spin = styled(FiLoader)`
  animation: ${animation} 1.5s linear infinite;
  color: #316b83;
  font-size: 50px;
`;
