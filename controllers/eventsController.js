const { where } = require('sequelize');
const db = require('./../models/eventsModel');
const Event = db.Event;
const addEvent = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Garden_ID,
      Volunteers,
      Description,
    } = req.body;
    const event = await Event.create(
    {
      Event_ID: Event_ID, 
      Garden_ID: Garden_ID,
      Volunteers: Volunteers,
      Description: Description,
    }
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateEvent = async (req, res) => {
  try
  {
    const
    { 
      Volunteers,
      Description,
    } = req.body;
    const event = await Event.update(
      {
      Volunteers: Volunteers,
      Description: Description,
      },
      {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateEventVolunteers = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Garden_ID,
      Volunteers,
    } = req.body;
    const event = await Event.update(
      {
      Volunteers: Volunteers,
      },
      {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateEventDescription = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Garden_ID,
      Description,
    } = req.body;
    const event = await Event.update(
      {
      Description: Description,
      },
      {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const deleteEvent = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
    } = req.body;
    const event = await Event.delete({where: {Event_ID: Event_ID}});(
      {
      Event_ID: Event_ID, 
    }
    );
    res.status(200).sendStatus(200);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findEventsGardenID = async (req, res) => {
  try
  {
    const
    { 
      Garden_ID,
    } = req.body;
    const event = await Event.findAll({where: {Garden_ID: Garden_ID}})(
      {
      Garden_ID: Garden_ID,
      }
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findEventsEventID = async (req, res) => {
  try
  {
    const
    { 
      Event_ID,
    } = req.body;
    const event = await Event.findAll({where: {Event_ID: Event_ID}})(
      {
      Event_ID: Event_ID,
      }
    );
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findEvents = async (req, res) => {
  try
  {
    const event = await Event.findAll({
      attributes: ['Event_ID', 'OwnerID', 'Volunteers', 'Description'],
      order: [
        ['Event_ID', 'ASC']
      ]
    })
    res.status(200).send(event);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};
module.exports = {
  addEvent, 
  updateEvent,
  deleteEvent,
  findEvents,
  findEventsGardenID,
  findEventsEventID,
  updateEventVolunteers,
  updateEventDescription
};
