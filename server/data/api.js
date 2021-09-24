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

// Find company by id
const findCompany = (companyId) => {
  const result = companies.find(
    (company) => company._id === parseInt(companyId)
  );
  return result === undefined ? null : result;
};


module.exports = {
  findItem,
  findCompany,
  filterByCategory,
  filterByCompany,
  filterBySearch,
};
