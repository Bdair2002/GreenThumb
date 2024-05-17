const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Partnership = sequelize.define('Partnership', {
  Garden_ID: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  OrganizationName: {
    type: DataTypes.STRING,
  },
  Activities: {
    type: DataTypes.STRING,
  },
  Price: {
    type: DataTypes.FLOAT,
  },
  Date: {
    type: DataTypes.DATE,
  },
  Duration: {
    type: DataTypes.INTEGER,
  },
});
module.exports = { Partnership };
