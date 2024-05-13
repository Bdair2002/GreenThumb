const db = require('./../models/gardenModel');
const Garden = db.Garden;
const addProduct = async (req, res) => {
  const user = await Garden.create({ name: 'test2', OwnerID: 1 });
  res.status(200).send(user);
};
module.exports = {
  addProduct,
};
