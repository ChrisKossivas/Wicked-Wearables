import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemDescription from "./ItemDescription";

const ItemDetails = ({ addItemToCart }) => {
  const { itemId } = useParams();

  const [selectedItem, setSelectedItem] = useState();
  const [selectedCompany, setSelectedCompany] = useState();

  console.log(selectedCompany);
  // let companyId = selectedItem ? selectedItem.companyId : null;

  useEffect(() => {
    // fetch data itemById
    fetch(`/api/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setSelectedItem(data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //fetch data companyById
    if (!selectedItem) {
      return;
    } else {
      fetch(`/api/company/${selectedItem.companyId}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedCompany(data.company);
        });
    }
  }, [selectedItem]);

  return selectedItem ? (
    <ItemPage>
      <Background
        style={{ backgroundImage: `url("${selectedItem.imageSrc}")` }}
      />
      <Backdrop>
        <ItemDescription
          selectedItem={selectedItem}
          addItemToCart={addItemToCart}
          selectedCompany={selectedCompany}
        />
      </Backdrop>
    </ItemPage>
  ) : null;
};

const ItemPage = styled.div`
  position: relative;
  height: 100%;
`;

const Background = styled.div`
  background-repeat: no-repeat;
  background-size: auto 125%;
  background-position: top 50% left -200px;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(8px);
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ItemDetails;
