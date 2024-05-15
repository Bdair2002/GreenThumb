const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const { Garden } = require('./gardenModel');
const { Plots } = require('./plotsModel');

const Crops = sequelize.define('Crops', {
  Crop_ID: {
    type: 'integer',
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Plot_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Expected_Date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Planting_Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Harvested_Date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
module.exports = { Crops };
