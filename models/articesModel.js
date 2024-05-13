const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const Ariticle = sequelize.define('Ariticle', {
    Article_ID: {
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
      Title: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      }

});
module.exports = { Ariticle };