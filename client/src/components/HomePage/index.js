import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FilterBar from "./FilterBar/index";
import AllItems from "./AllItems";
import CircularLoading from "../CircularLoading";
// import SearchBar from '../SearchBar';


/// responsive page needed

const HomePage = ({ setIsCartOpen, addItemToCart, addItemToWishlist }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [allCompany, setAllCompany] = useState([]);
  const [Loaded, setLoaded] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedItem, setSelectedItem] = useState([]);

  // Generate URI QUERIS by filter slections
  const filteredUri = () => {
    if (selectedCategory && selectedBrand) {
      return `/api/item?category=${selectedCategory}&company=${selectedBrand.id}`;
    } else if (selectedCategory) {
      return `/api/item?category=${selectedCategory}`;
    } else if (selectedBrand) {
      return `/api/item?company=${selectedBrand.id}`;
    } else {
      return `/api/item`;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      // fetch every item from database
      await fetch("/api/item")
        .then((res) => res.json())
        .then((data) => {
          setAllProduct(data.data);
        });

      // fetch every company from database
      await fetch("/api/company")
        .then((res) => res.json())
        .then((data) => {
          setAllCompany(data.data);
          setLoaded(true);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // fetch filtered items
    fetch(filteredUri())
      .then((res) => res.json())
      .then((data) => {
        setFilteredProduct(data.data);
        setLoaded(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, selectedBrand]);

  return (
    <Wrapper>
      <ItemWrapper>
        {Loaded ? (
          <>
            <FilterBar
              allProduct={allProduct}
              allCompany={allCompany}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
            <AllItems
              setIsCartOpen={setIsCartOpen}
              filteredProduct={filteredProduct}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              addItemToCart={addItemToCart}
              addItemToWishlist={addItemToWishlist}
            />
          </>
        ) : (
          <CircularLoading />
        )}
      </ItemWrapper>
    </Wrapper>
  );
};


export default HomePage


const Wrapper = styled.div`
  background: linear-gradient(90deg, #fff 50%, #f3f3f3 50%);
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  display: flex;

`;
