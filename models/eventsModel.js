const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const { Garden } = require('./gardenModel');

const Event = sequelize.define('Event', {
    Event_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Garden_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: Garden,
          key: 'id',
        },        
      },
      Volunteers: {
        type: DataTypes.INTEGER
      },
      Description: {
        type: DataTypes.STRING
      }

});
module.exports = { Event };