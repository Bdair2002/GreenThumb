const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel'); // Import the Garden model
const Garden = sequelize.define('Garden', {
  Name: {
    type: DataTypes.STRING,
  },
  OwnerID: {
    type: DataTypes.INTEGER, // Assuming GardenID is of type INTEGER
    allowNull: true, // Allow null if the user doesn't have a garden yet
    references: {
      model: User, // References the Garden model
      key: 'id', // Assumes the primary key of the Garden model is 'id'
    },
  },
});
Garden.belongsTo(User, { foreignKey: 'OwnerID', as: 'User' });

module.exports = { Garden };
