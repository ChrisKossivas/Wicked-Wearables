// bunch of functions to export
// only import the pop/push manipulation from here functions

const fileSytem = require("file-system");
const items = JSON.parse(fileSytem.readFileSync("./data/items.json"));
const companies = JSON.parse(fileSytem.readFileSync("./data/companies.json"));

// shopping cart that will be added to localstorage through frontend
let cart = [];

// wishlist that will be added to localstorage through frontend
let wishList = [];

// Find Item by id
const findItem = (itemId) => {
  const result = items.find((item) => item._id === Number(itemId));
  return result === undefined ? null : result;
};

// filter Item by category
const filterByCategory = (category) => {
  const result = items.filter((item) =>
    item.category.toLowerCase().includes(category.toLowerCase())
  );
  return result === undefined ? null : result;
};

// filter Item by company id
const filterByCompany = (company) => {
  const result = items.filter((item) => item.companyId === parseInt(company));
  return result === undefined ? null : result;
};

// filter Item by search
const filterBySearch = (search) => {
  const result = items.filter((item) =>
    item.name.toLowerCase().match(search.toLowerCase())
  );
  return result === undefined ? null : result;
};

// Add item to shopping cart
const cartAdd = (item, itemId, quantity) => {
  // check if item id already exists in shopping cart
  for (let i = 0; i < cart.length; i++) {
    // console.log(cart[i]._id);
    if (cart[i]._id === itemId) {
      return "Already In Cart";
    }
  }

  // check if item is in stock
  if (item.numInStock > 0 && item._id === Number(itemId)) {
    if (quantity !== undefined) {
      item.numInStock -= quantity;
    }
    cart.push(item);
  }
  return item.numInStock <= 0 ? null : cart;
};

// Find company by id
const findCompany = (companyId) => {
  const result = companies.find(
    (company) => company._id === parseInt(companyId)
  );
  return result === undefined ? null : result;
};

// Add item to wish list
const wishListAdd = (item, itemId) => {
  for (let i = 0; i < wishList.length; i++) {
    if (wishList[i]._id === itemId) {
      return "Already In Wish List";
    }
  }

  wishList.push(item);

  return wishList;
};

module.exports = {
  cartAdd,
  findItem,
  findCompany,
  wishListAdd,
  filterByCategory,
  filterByCompany,
  filterBySearch,
};
