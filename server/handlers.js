const fileSytem = require("file-system");
const items = JSON.parse(fileSytem.readFileSync("./data/items.json"));

// ***********************//
// Don't forget to comment//
// ***********************//


const { 
  cartAdd,
  findItem,
} = require("./data/api")

// Function that will return all items in random order
const getItems = async (req, res) => {
  try {
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
  let item = findItem( itemId)
  if (item === null) {
    res
    .status(400)
    .json({ status: 400, message: "Single Item is not found" });
    return
  }

  let addCartItem = cartAdd(item, itemId)
  
  // Check if Item in stock
  if (addCartItem === null) {
    res
    .status(400)
    .json({ status: 400, message: "Item Out Of Stock" });
    return
  }

  // Check if Item already in Cart
  if (addCartItem === "Already In Cart") {
    res
    .status(400)
    .json({ status: 400, message: "Item Already In Cart" });
    return
  }
  


  // Return cart array of object items if it passes checks above
  return res.status(200).json({status:200, cart: addCartItem,  message: "Cart Items!"});


}


module.exports = { getItems, getItemById, addToCart };
