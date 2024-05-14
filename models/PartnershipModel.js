const { DataTypes } = require('sequelize');
const { sequelize } = require('.');
const { PASSWORD } = require('../config/config');
const { User } = require('./userModel');
const { Garden } = require('./gardenModel');

const Partnership = sequelize.define('Partnership', {
    Integration_ID: {
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
      OrganizationName: {
        type: Sequelize.STRING
      },
      Activities: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.FLOAT
      },
      Date: {
        type: Sequelize.DATEONLY
      },
      Duration: {
        type: Sequelize.INTEGER  
      }

});
module.exports = { Partnership };