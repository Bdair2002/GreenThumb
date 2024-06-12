const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { Garden } = require('./gardenModel');

const Event = sequelize.define('Event', {
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
