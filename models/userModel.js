const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const User = sequelize.define('User', {
  Username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  LastName: {
    type: DataTypes.STRING,
  },
  Password: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Role: {
    type: DataTypes.STRING,
  },
});

module.exports = { User };
