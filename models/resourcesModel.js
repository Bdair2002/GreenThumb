const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Resource = sequelize.define('Resource', {
    Tool_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      OwnerID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: User,
          key: 'id',
        },
      },
      Tools: {
        type: Sequelize.STRING
      },
      Sold: {
        type: Sequelize.BOOLEAN
      },
      Description: {
        type: Sequelize.STRING
      }

});
module.exports = { Resource };