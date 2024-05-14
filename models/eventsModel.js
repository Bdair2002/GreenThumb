const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const { Garden } = require('./gardenModel');

const Event = sequelize.define('Event', {
    Event_ID: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER
      },
      Description: {
        type: Sequelize.STRING
      }

});
module.exports = { Event };