const db = require('./../models/userModel');
const crud = require('./crudController');
const User = db.User;
exports.getAllUsers = crud.getAll(User);
