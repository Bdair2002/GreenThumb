const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Plots = sequelize.define('Plots', {
  Plot_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  Crop: {
    type: DataTypes.STRING,
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
module.exports = { Plots };
