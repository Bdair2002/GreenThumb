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
  Availabe: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  Crop: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
module.exports = { Plots };
