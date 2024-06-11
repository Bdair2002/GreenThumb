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
    allowNull: true,
    references: {
      model: Garden,
      key: 'id',
    },
  },
  Plot_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Harvested: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  Planting_Date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Harvested_Date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
module.exports = { Crops };
