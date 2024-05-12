const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = { User };
