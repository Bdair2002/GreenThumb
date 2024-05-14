const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Article = sequelize.define('Article', {
    Article_ID: {
        type: DataTypes.INTEGER,
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
      Title: {
        type: DataTypes.STRING
      },
      Description: {
        type: DataTypes.STRING
      }

});
module.exports = { Article };