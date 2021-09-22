const fileSytem = require("file-system");
const items = JSON.parse(fileSytem.readFileSync("./data/items.json"));
const companies = JSON.parse(fileSytem.readFileSync("./data/companies.json"));

// ***********************//
// Don't forget to comment//
// ***********************//

const { cartAdd, findItem, findCompany, wishListAdd } = require("./data/api");

// Function that will return all items in random order
// As well, it has an optional filter based on req.query that is sent. It will return filtered items in order
const getItems = async (req, res) => {
  try {
    const { category, company, search } = req.query;

    console.log(search)

    // return filtered data based on which category was sent as a req.query or which companyId was sent as a req.query
    if (category !== undefined) {
      // return category filter from req.query
      const resultQuery = await items.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );

      if (resultQuery.length === 0) {
        res
          .status(400)
          .json({
            status: 400,
            message: "Category: " + `${category}` + " does not exist",
          });
        return;
      }

      res
        .status(200)
        .json({
          status: 200,
          data: resultQuery,
          message: "Filterd by category: " + `${category}`,
        });
      return;
    } else if (company !== undefined) {
      // return company filter from req.query
      const companyQuery = await items.filter(
        (item) => item.companyId === parseInt(company)
      );

      if (companyQuery.length === 0) {
        res
          .status(400)
          .json({
            status: 400,
            message: "Company: " + `${company}` + " does not exist",
          });
        return;
      }

      res
        .status(200)
        .json({
          status: 200,
          data: companyQuery,
          message: "Filterd by Brand: " + `${company}`,
        });
      return;
    }
    else if (search !== undefined) {
      const searchQuery = await items.filter((item) => item.name.toLowerCase().match(search.toLowerCase()))
      console.log(searchQuery)

      if (searchQuery.length === 0) {
        res
        .status(400)
        .json({
          status: 400,
          message: "No Search Results For: " + `${search}`,
        });
      return;
      }
      res
      .status(200)
      .json({
        status: 200,
        data: searchQuery,
        message: "Search Results For: " + `${search}`,
      });
    }

    // return all items (no filter)
    const result = await items.sort(() => 0.5 - Math.random());

    if (result.length <= 0) {
      res.status(400).json({ status: 400, message: "Items not found" });
      return;
    }

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Error occured with items request" });
  }
};

// Function that will return item by id
const getItemById = async (req, res) => {
  const { itemId } = req.params;

  try {
    const result = await items.find((item) => item._id === Number(itemId));

    if (result.length <= 0) {
      res
        .status(400)
        .json({ status: 400, message: "Single Item is not found" });
      return;
    }

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, message: "Error occured with single item request" });
  }
};

// Function for adding an item to cart. Needs: id of item as JSON Body
const addToCart = (req, res) => {
  // get _id from JSON body
  const { itemId } = req.body;

  // findItem by _id
  let item = findItem(itemId);
  if (item === null) {
    res.status(400).json({ status: 400, message: "Single Item is not found" });
    return;
  }

  let addCartItem = cartAdd(item, itemId);

  // Check if Item in stock
  if (addCartItem === null) {
    res.status(400).json({ status: 400, message: "Item Out Of Stock" });
    return;
  }

  // Check if Item already in Cart
  if (addCartItem === "Already In Cart") {
    res.status(400).json({ status: 400, message: "Item Already In Cart" });
    return;
  }

  // Return cart array of object items if it passes checks above
  return res
    .status(200)
    .json({ status: 200, cart: addCartItem, message: "Cart Items!" });
};

// Function for returning a company object by id

const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;

    const result = await findCompany(companyId);

    if (result === null) {
      res.status(400).json({ status: 400, message: "Company does not exist" });
      return;
    }

    return res
      .status(200)
      .json({ status: 200, company: result, message: "Company details!" });
  } catch (err) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error occured with Company Details request",
      });
  }
};

// Function for adding item to wishlist and returning wishlist array of objects

const addToWishList = (req, res) => {
  const { itemId } = req.body;

  let item = findItem(itemId);

  let wishList = wishListAdd(item, itemId);
  console.log(wishList);

  if (wishList === "Already In Wish List") {
    res.status(400).json({ status: 400, message: "Item already in Wish List" });
    return;
  }

  return res
    .status(200)
    .json({ status: 200, wishList: wishList, wishListCount: wishList.length, message: "Wish List Items!" });
};


// Function for returning all company objects

const getCompanies = async (req, res) => {

  try {
    if (companies.length === 0) {
      res.status(400).json({ status: 400, message: "Companies Not Found" });
      return;
    }
    res.status(200).json({ status: 200, data: companies, message: "All Companies!" });

  }
  catch (err) {
    res
    .status(500)
    .json({
      status: 500,
      message: "Error occured with Companies request",
    });

  }


}

module.exports = {
  getItems,
  getItemById,
  addToCart,
  getCompanyById,
  addToWishList,
  getCompanies,
};
