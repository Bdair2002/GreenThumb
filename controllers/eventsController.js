const db = require('./../models/eventsModel');
const Event = db.Event;

const addEvent = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Description,
      Volunteers,
    } = req.body;
    const event = await Event.create(
    {
      Event_ID: Event_ID,
      Volunteers: Volunteers, 
      Description: Description,
    }
    );
    if(event != 0)
      res.status(201).json({message: 'Event created successfully'});
  }
  catch (error) {
    res.status(409).json({message : 'There is a Event with same event_ID already exists'});
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
      { Volunteers: 1 },
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


const updateEventDeleteVolunteers = async (req, res) => {
  try
  {
    const
    { 
      Event_ID, 
      Garden_ID,
      Volunteers,
    } = req.body;
    const errorHandling = await Event.findOne
    (
      {attributes: {Volunteers}},
      {where: {Event_ID: Event_ID, Garden_ID: Garden_ID}}
    );
    if(errorHandling.Volunteers > 0)
    {
      const event = await Event.decrement(
        { Volunteers: 1 },
        {where:{Event_ID: Event_ID, Garden_ID: Garden_ID}}
      );
      if(event != 0)
        res.status(200).json({message: ' The Volunteers with Event_ID: ' + Event_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No event with Event_ID: ' + Event_ID + ' and Earden_ID: '+ Garden_ID + ' to update'});
      }  
    }
    else
    {
      res.status(400).json({message : 'There is no Voluneetrs in this Event to delete'});
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
    const event = await Event.destroy({where: {Event_ID: Event_ID}});(
    {
      Event_ID: Event_ID, 
    }
    );
    if(event != 0)
      res.status(200).json({message: 'Event with Event_ID ' + Event_ID +' deleted successfully'});

    else
    {
      res.status(400).json({message : 'No event with Event_ID: ' + Event_ID + ' to delete'});


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
    const event = await Event.findAll({where: {Garden_ID: Garden_ID}});(
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
    const event = await Event.findAll({where: {Event_ID: Event_ID}});(
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
      attributes: ['Event_ID', 'Garden_ID', 'Volunteers', 'Description'],
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
      {where:{Event_ID: Event_ID}}
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
  deleteEvent,
  findEvents,
  findEventsGardenID,
  findEventsEventID,
  updateEventVolunteers,
  updateEventDeleteVolunteers,
  updateEventDescription,
  reserveGarden
};
