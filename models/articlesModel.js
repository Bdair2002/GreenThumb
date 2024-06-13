const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Article = sequelize.define('Article', {
  Publisher_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Title: {
    type: DataTypes.STRING,
  },
  Description: {
    type: DataTypes.STRING,
  },
});
module.exports = { Article };
