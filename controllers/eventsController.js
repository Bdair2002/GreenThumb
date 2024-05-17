const { where } = require('sequelize');
const db = require('./../models/eventsModel');
const Event = db.Event;
const addEvent = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Description,
    } = req.body;
    const event = await Event.create(
    {
      Event_ID: Event_ID, 
      Description: Description,
    }
    );
    res.status(201).json({message: 'Event created successfully, ' + event + ''});
  }
  catch (error) {
    res.status(409).json({message : 'There is a Event with same event_ID already exists'});
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
    if(event != 0)
      res.status(200).json({message: ' The event with Event_ID: ' + Event_ID + ' updated Successfully'});
    else
    {
      res.status(400).json({message : 'No event with Event_ID: ' + Event_ID + ' and Garden_ID: '+ Garden_ID + ' to update'});
    }
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
    const event = await Event.increment(
      {
      Volunteers: Volunteers,
      },
      {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    if(event != 0)
      res.status(200).json({message: ' The Volunteers with Event_ID: ' + Event_ID + ' updated Successfully'});
    else
    {
      res.status(400).json({message : 'No event with Event_ID: ' + Event_ID + ' and Earden_ID: '+ Garden_ID + ' to update'});
    }  
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
    if(event != 0)
      res.status(200).json({message: ' The Description with Event_ID: ' + Event_ID + ' updated Successfully'});
    else
    {
      res.status(400).json({message : 'No Event with Event_ID: ' + Event_ID + ' and Garden_ID: '+ Garden_ID + ' to update'});
    }  
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
    if(event != 0)
      res.status(400).json({message : 'No event with Event_ID: ' + Event_ID + ' and Garden_ID: ' + Garden_ID + ' to delete'});
    else
    {
      res.status(200).json({message: 'Event with Event_ID ' + Event_ID +' deleted successfully'});

    }    
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
    if(event != 0)
      res.status(200).send(event);
    else
    {
      res.status(400).json({message: 'Event not found with Garden_ID: ' + Garden_ID + ' '});
    }      }
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
    if(event != 0)
      res.status(200).send(event);
    else
    {
      res.status(400).json({message: 'Event not found with Event_ID: ' + Event_ID +' '});
    }    
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
    if(event != 0)
      res.status(200).send(event);

    else
    {
      res.status(400).json({message: 'There is no Events in the Database'});
    }  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const reserveGarden = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Garden_ID,
    } = req.body;
    const event = await Event.update(
      {
      Garden_ID: Garden_ID,
      },
      {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    if(event != 0)
      res.status(200).json({message: ' Resrvation for Garden_ID: ' + Garden_ID + ' on Event_ID: ' + Event_ID + ' Succeed'});
    else
    {
      res.status(400).json({message : 'No Event with Event_ID: ' + Event_ID + ' and Garden_ID: '+ Garden_ID + ' to reserve'});
    }  
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
