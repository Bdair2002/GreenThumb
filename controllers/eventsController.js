const db = require('./../models/eventsModel');
const event = db.resource;
const addEvent = async (req, res) => {
  const user = await resource.create({ name: 'test2', OwnerID: 1 });
  res.status(200).send(user);
};
module.exports = {
  addEvent,
};
