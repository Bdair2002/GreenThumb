const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Resource = sequelize.define('Resource', {
  Tool_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  OwnerID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Tools: {
    type: DataTypes.STRING,
  },
  Sold: {
    type: DataTypes.BOOLEAN,
  },
  Description: {
    type: DataTypes.STRING,
  },
});
module.exports = { Resource };
