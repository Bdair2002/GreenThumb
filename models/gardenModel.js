const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Garden = sequelize.define(
  'Garden',
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Plots: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Sunlight: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    SoilType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    WaterSource: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    indexes: [{ unique: true, fields: ['Name'] }],
  },
);

module.exports = { Garden };
