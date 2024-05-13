const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Garden = sequelize.define('Garden', {
  Name: {
    type: DataTypes.STRING,
  },
  OwnerID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = { Garden };
