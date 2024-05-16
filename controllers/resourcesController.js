const db = require('./../models/resourcesModel');
const resource = db.Resource;

const addResource = async (req, res) => {
  try
  {
    const
    { 
      Tool_ID,
      OwnerID,
      Tools,
      Sold,
      Description, 
    } = req.body;
    const Resource = await resource.create
    ({ 
      Tool_ID: Tool_ID,
      OwnerID: OwnerID,
      Tools: Tools,
      Sold: Sold,
      Description: Description,  
    });
    res.status(201).send(Resource);
 }
 catch (error) {
  res.status(400).sendStatus(400).send(console.error(error));
}
};


const updateResource = async (req, res) => {
  try
  {
    const
    { 
      OwnerID,
      Tool_ID,
      Tools,
      Sold,
      Description,
    } = req.body;
    const Resource = await resource.update(
      { 
        Tools: Tools,
        Sold: Sold,
        Description: Description,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
    res.status(200).send(Resource);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateResourceTools = async (req, res) => {
  try
  {
    const
      { 
        OwnerID,
        Tool_ID,
        Tools,
      } = req.body;
    const Resource = await resource.update(
      { 
        Tools: Tools,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
    res.status(200).send(Resource);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateResourceSold = async (req, res) => {
  try
  {
    const
      { 
        OwnerID,
        Tool_ID,
        Sold,
      } = req.body;
    const Resource = await resource.update(
      { 
        Sold: Sold,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
    res.status(200).send(Resource);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const updateResourceDescription = async (req, res) => {
  try
  {
    const
      { 
        OwnerID,
        Tool_ID,
        Description,
      } = req.body;
    const Resource = await resource.update(
      { 
        Description: Description,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
    res.status(200).send(Resource);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }

};


const deleteResource = async (req, res) => {
  try
  {
    const
      { 
        Tool_ID,
      } = req.body;
    const Resource = await resource.destroy({where: {Tool_ID: Tool_ID}});
        ({
          Tool_ID: Tool_ID,
        })
      res.status(200).sendStatus(200);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findResourceOwner = async (req, res) => {
   try 
   {
    const
      { 
        OwnerID
      } = req.body;
    const Resource = await resource.findAll({where: {OwnerID: OwnerID}});
    ({
      OwnerID: OwnerID
    })
    res.status(200).send(Resource);
   }
   catch (error) {
     res.status(400).sendStatus(400).send(console.error(error));
   }
};


const findResourceTool = async (req, res) => {
  try 
  {
    const
    { 
      Tool_ID
    } = req.body;
    const Resource = await resource.findAll({where: {Tool_ID: Tool_ID}});
    ({
      Tool_ID: Tool_ID
    })
    res.status(200).send(Resource);
  } 
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findAllResource = async (req, res) => {
  try
  {
    const Resource = await resource.findAll({
      attributes: ['Tool_ID', 'OwnerID', 'Tools', 'Sold', 'Description'],
      order: [
        ['Tool_ID', 'ASC']
      ]
    })
    res.status(200).send(Resource);
  }
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};
module.exports = {
  addResource, 
  updateResource, 
  deleteResource, 
  findAllResource, 
  findResourceTool, 
  findResourceOwner, 
  updateResourceDescription,
  updateResourceSold, 
  updateResourceTools
};
