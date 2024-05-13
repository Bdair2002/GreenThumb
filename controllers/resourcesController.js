const db = require('./../models/resourcesModel');
const resource = db.resource;
const addResource = async (req, res) => {
  const user = await resource.create({ name: 'test2', OwnerID: 1 });
  res.status(200).send(user);
};
module.exports = {
  addResource,
};
