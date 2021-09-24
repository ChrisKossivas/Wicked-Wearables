const fileSytem = require("file-system");
const items = JSON.parse(fileSytem.readFileSync("./data/items.json"));
const companies = JSON.parse(fileSytem.readFileSync("./data/companies.json"));

// ***********************//
// Don't forget to comment//
// ***********************//

const {
  findItem,
  findCompany,
  filterByCategory,
  filterByCompany,
  filterBySearch,
} = require("./data/api");

// Function that will return all items in random order
// As well, it has an optional filter based on req.query that is sent. It will return filtered items in order
// Filters: category, company, search(by name)
const getItems = async (req, res) => {
  try {
    const { category, company, search } = req.query;

    // return filtered data based on which category was sent as a req.query or which companyId was sent as a req.query
    if (category !== undefined && company === undefined) {
      // return category filter from req.query
      const resultQuery = await filterByCategory(category);

      if (resultQuery.length === 0) {
        res.status(400).json({
          status: 400,
          message: "Category: " + `${category}` + " does not exist",
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: resultQuery,
        message: "Filterd by category: " + `${category}`,
      });
      return;
    } else if (company !== undefined && category === undefined) {
      // return company filter from req.query
      const companyQuery = await filterByCompany(company);

      if (companyQuery.length === 0) {
        res.status(400).json({
          status: 400,
          message: "Company: " + `${company}` + " does not exist",
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: companyQuery,
        message: "Filterd by Brand: " + `${company}`,
      });
      return;
    } else if (search !== undefined) {
      // return search filter from req.query
      const searchQuery = await filterBySearch(search);

      if (searchQuery.length === 0) {
        res.status(400).json({
          status: 400,
          message: "No Search Results For: " + `${search}`,
        });
        return;
      }
      res.status(200).json({
        status: 200,
        data: searchQuery,
        message: "Search Results For: " + `${search}`,
      });
      return;
    } else if (category !== undefined && company !== undefined) {
      // return categoy and company filter from req.query
      const categoryQuery = await filterByCategory(category);

      const resultQuery = await categoryQuery.filter(
        (itemCategory) => itemCategory.companyId === parseInt(company)
      );

      if (resultQuery.length === 0) {
        res.status(400).json({
          status: 400,
          message:
            "No Search Results For category: " +
            `${category},` +
            " and company: " +
            `${company}`,
        });
        return;
      }

      res.status(200).json({
        status: 200,
        data: resultQuery,
        message:
          "Search Results For category: " +
          `${category},` +
          " and company: " +
          `${company}!`,
      });
      return;
    }

    // return all items (with no filter and randomized)
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

// Function for adding an item to cart.
// Needs: "id" of item as JSON Body and optional "quantity" as JSON Body
const addToCart = (req, res) => {
  // get itemId from JSON body
  const { itemId, quantity } = req.body;

  // findItem by itemId
  let item = findItem(itemId);
  if (item === null) {
    res.status(400).json({ status: 400, message: "Single Item is not found" });
    return;
  }

  // let addCartItem = cartAdd(item, itemId, quantity);

  // // Check if Item in stock
  // if (addCartItem === null) {
  //   res.status(400).json({ status: 400, message: "Item Out Of Stock" });
  //   return;
  // }

  // // Check if Item already in Cart
  // if (addCartItem === "Already In Cart") {
  //   res.status(400).json({ status: 400, message: "Item Already In Cart" });
  //   return;
  // }

  // Return cart array of object items if it passes checks above
  return res
    .status(200)
    .json({
      status: 200,
      cart: item,
      // CartCount: addCartItem.length,
      message: "Cart Items!",
    });
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
    res.status(500).json({
      status: 500,
      message: "Error occured with Company Details request",
    });
  }
};

// Function for adding item to wishlist and returning wishlist array of objects

const addToWishList = (req, res) => {
  const { itemId } = req.body;

  let item = findItem(itemId);
  if (item === null) {
    res.status(400).json({ status: 400, message: "Single Item is not found" });
    return;
  }
  // let wishList = wishListAdd(item, itemId);
  // console.log(wishList);

  // if (wishList === "Already In Wish List") {
  //   res.status(400).json({ status: 400, message: "Item already in Wish List" });
  //   return;
  // }

  return res
    .status(200)
    .json({
      status: 200,
      wishList: item,
      // wishListCount: wishList.length,
      message: "Wishlist Items!",
    });
};

// Function for returning all company objects

const getCompanies = async (req, res) => {
  try {
    if (companies.length === 0) {
      res.status(400).json({ status: 400, message: "Companies Not Found" });
      return;
    }
    res
      .status(200)
      .json({ status: 200, data: companies, message: "All Companies!" });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Error occured with Companies request",
    });
  }
};

// Function for deleting cart item
const deleteCartItem = (req, res) => {
  const { itemId } = req.params
  

  cartDelete(itemId)

}

module.exports = {
  getItems,
  getItemById,
  addToCart,
  getCompanyById,
  addToWishList,
  getCompanies,
  deleteCartItem,
};
