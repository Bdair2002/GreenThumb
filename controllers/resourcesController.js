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
    if(Resource)
      res.status(201).json({message: 'Tool created successfully, ' + Resource + ''});
 }
 catch (error) {
  res.status(409).json({message : 'There is a Tool with same Tool_ID already exists'});
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
    const updateAll = await resource.update(
      { 
        Tools: Tools,
        Sold: Sold,
        Description: Description,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
      if(updateAll != 0)
        res.status(200).json({message: ' The Tool with Tool_ID: ' + Tool_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No Resource found with Tool_ID ' + Tool_ID +' and OwnerID ' + OwnerID + ' to update!'});  
      }
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
    const updateTools = await resource.update(
      { 
        Tools: Tools,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
      if(updateTools != 0)
        res.status(200).json({message: ' The Tool with Tool_ID: ' + Tool_ID + ' updated Successfully'});
      else
      {
        res.status(400).json({message : 'No Resource found with Tool_ID ' + Tool_ID +' and OwnerID ' + OwnerID + ' to update!'});  
      }
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
    const updateSold = await resource.update(
      { 
        Sold: Sold,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
    if(updateSold != 0)
      res.status(200).json({message: ' The Tool with Tool_ID: ' + Tool_ID + ' has been Sold!'});
    else
    {
      res.status(400).json({message : 'No Resource found with Tool_ID ' + Tool_ID +' and OwnerID ' + OwnerID + ' to update!'});
    }
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
    const updateAll = await resource.update(
      { 
        Description: Description,
      },
      {where:{OwnerID: OwnerID, Tool_ID: Tool_ID}});
      if(updateAll != 0)
        res.status(200).json({message: 'The Description for Tool with Tool_ID: ' + Tool_ID + ' updated successfully'});
      else
      {
        res.status(400).json({message : 'No Resource found with Tool_ID ' + Tool_ID +' and OwnerID ' + OwnerID + ' to update!'});
      }
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
        const deleteResource = await resource.destroy({where: {Tool_ID: Tool_ID}});
        ({
          Tool_ID: Tool_ID,
        })
        if(deleteResource === 0)
          res.status(400).json({message : 'Resource not found for Tool_ID ' + Tool_ID});
        else
        {
          res.status(200).json({message : 'Resource with Tool_ID ' + Tool_ID +' deleted successfully'});
        }
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
    const fOwnerID = await resource.findAll({where: {OwnerID: OwnerID}});
    ({
      OwnerID: OwnerID
    })
    if(fOwnerID  != 0)
      res.status(200).send(fOwnerID);
    else
    {
      res.status(400).json({message: 'Resource not found for Owner ID: '+ OwnerID +' '});
    }
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
    const fTool= await resource.findAll({where: {Tool_ID: Tool_ID}});
    ({
      Tool_ID: Tool_ID
    })
    if(fTool != 0)
      res.status(200).send(fTool);
    else
    {
      res.status(400).json({message: 'Resource not found with Tool ID: '+ Tool_ID +' '});
    }
  } 
  catch (error) {
    res.status(400).sendStatus(400).send(console.error(error));
  }
};


const findAllResource = async (req, res) => {
  try
  {
    const findAll = await resource.findAll({
      attributes: ['Tool_ID', 'OwnerID', 'Tools', 'Sold', 'Description'],
      order: [
        ['Tool_ID', 'ASC']
      ]
    })
    if(findAll != 0)
      res.status(200).send(findAll);

    else
    {
      res.status(400).json({message: 'There is no Resources in the Database'});
    }
      
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
