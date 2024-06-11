const db = require('./../models/partnershipModel');
const crud = require('./crudController');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const Partnership = db.Partnership;

exports.getAllPartnerships = crud.getAll(Partnership);
exports.setPartnership = crud.createOne(Partnership);
exports.getPartnership = crud.getOne(Partnership);
exports.updatePartnership = crud.updateOne(Partnership);
exports.deletePartnership = crud.deleteOne(Partnership);
