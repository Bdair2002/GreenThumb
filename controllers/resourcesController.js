const db = require('./../models/resourcesModel');
const catchAsync = require('../utils/catchAsync');
const resource = db.Resource;
const factory = require('./factoryController');
exports.findAllResource = factory.getAll(resource);
exports.addResource = factory.createOne(resource);
exports.updateResource = factory.updateOne(resource);
exports.deleteResource = factory.deleteOne(resource);
exports.setOwner = (req, res, next) => {
  req.body.OwnerID = req.user.id;
  next();
};
exports.checkOwner = catchAsync(async (req, res, next) => {
  const resourceid = req.params.id;
  const foundResource = await resource.findOne({ where: { id: resourceid } });

  if (!foundResource) {
    return res.status(404).json({ message: 'Resource not found' });
  }

  if (foundResource.OwnerID !== req.user.id) {
    return res.status(403).json({
      message: 'You are not authorized to delete or update this resource',
    });
  }
  next();
});
