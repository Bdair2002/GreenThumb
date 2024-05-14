const db = require('./../models/resourcesModel');
const resource = db.Resource;
const addResource = async (req, res) => {
  const Resource = await resource.create
  ({ 
    name: 'test12',
    Tool_ID: 1,
    OwnerID: 1,
    Tools: "Shovel",
    Sold: false,
    Description: "Shovel for sale", 
  });
  res.status(200).send(Resource);
};
module.exports = {
  addResource,
};
