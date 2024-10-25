const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Catering = sequelize.define('Catering', {
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  menuItems: {
    type: DataTypes.TEXT, // or JSON to store structured menu details
    allowNull: false,
  },
  estimatedCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dietaryRestrictions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Catering;
