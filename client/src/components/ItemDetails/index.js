import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemDescription from "./ItemDescription";

const ItemDetails = () => {
  const { itemId } = useParams();

  const [selectedItem, setSelectedItem] = useState();
  const [selectedCompany, setSelectedCompany] = useState();

  useEffect(() => {
    const getData = async () => {
      // fetch data itemById
      await fetch(`/api/item/${itemId}`)
        .then((res) => res.json())
        .then((data) => setSelectedItem(data.data));

      // fetch data companyById
      // TODO: create endpoint that fetchs company data by id
      // await fetch(`/api/company/${selectedItem.companyId}`)
      //   .then((res) => res.json())
      //   .then((data) => setSelectedCompany(data.data));
    };
    getData();
  }, []);

  return selectedItem ? (
    <ItemPage>
      <Background
        style={{ "background-image": `url("${selectedItem.imageSrc}")` }}
      />
      <Backdrop>
        <ItemDescription
          selectedItem={selectedItem}
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
