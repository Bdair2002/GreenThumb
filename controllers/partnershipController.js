const db = require('./../models/partnershipModel');
const factory = require('./factoryController');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Partnership = db.Partnership;

exports.getAllPartnerships = factory.getAll(Partnership);
exports.setPartnership = factory.createOne(Partnership);
exports.getPartnership = factory.getOne(Partnership);
exports.updatePartnership = factory.updateOne(Partnership);
exports.deletePartnership = factory.deleteOne(Partnership);
