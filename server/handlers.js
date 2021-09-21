const fileSytem = require("file-system");
const items = JSON.parse(fileSytem.readFileSync("./data/items.json"));

// ***********************//
// Don't forget to comment//
// ***********************//

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
  const { _id } = req.params;

  try {
    const result = await items.find((item) => item._id === Number(_id));

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

module.exports = { getItems, getItemById };
