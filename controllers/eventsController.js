const { where } = require('sequelize');
const db = require('./../models/eventsModel');
const factory = require('./factoryController');
const catchAsync = require('../utils/catchAsync');
const Event = db.Event;
exports.addEvent = factory.createOne(Event);
exports.updateEvent = factory.updateOne(Event);
exports.deleteEvent = factory.deleteOne(Event);
exports.findAllEvents = factory.getAll(Event);
exports.findEventById = factory.getOne(Event);
exports.findEventsInGarden = catchAsync(async (req, res, next) => {
  const gardenId = req.params.gardenId;
  const myEvents = await Event.findAll({
    where: { Garden_ID: gardenId },
  });
  res.status(200).send(myEvents);
});
