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
