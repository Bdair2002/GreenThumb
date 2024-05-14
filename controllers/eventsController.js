const db = require('./../models/eventsModel');
const Event = db.Event;
const addEvent = async (req, res) => {
  const event = await Event.create({ name: 'test', OwnerID: 1 });
  res.status(200).send(event);
};
module.exports = {
  addEvent,
};
