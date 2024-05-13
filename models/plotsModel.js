const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Plots = sequelize.define('Plots', {
  Plot_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Graden,
      key: 'Garden_ID',
    },
  },
  Availabe: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
module.exports = { Plots };
