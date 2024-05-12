const db = require('./../models/userModel');
const User = db.User;
const addProduct = async (req, res) => {
  const user = await User.create({ name: 'test2' });
  res.status(200).send(user);
};
module.exports = {
  addProduct,
};
