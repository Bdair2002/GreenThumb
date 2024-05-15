const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { Garden } = require('./gardenModel');

const Event = sequelize.define('Event', {
  Event_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Volunteers: {
    type: DataTypes.INTEGER,
  },
  Description: {
    type: DataTypes.STRING,
  },
});

module.exports = { Event };
