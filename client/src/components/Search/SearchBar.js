import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"...What are we looking for?"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;

const BarStyling = styled.div`
    width: 20vh;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: whitesmoke;
    box-shadow: 1px;
    display: flex;
    position: absolute;
`;
