"use strict";

const express = require("express");
const morgan = require("morgan");

// Import handler functions
const { 
  getItems, 
  getItemById,
  addToCart, 
  getCompanyById, 
  addToWishList, 
  getCompanies,
} = require("./handlers");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  // GET items
  .get("/api/item", getItems)
  .get("/api/item/:itemId", getItemById)

  // POST items into cart. Needs: id of item as JSON Body
  // Now works with localstorage
  .post("/api/item", addToCart)

  // GET company by id
  .get("/api/company", getCompanies)
  .get("/api/company/:companyId", getCompanyById)


  // POST items into wish list. Needs: id of item as JSON Body
  .post("/api/item/wishlist", addToWishList)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
