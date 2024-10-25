const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Decoration = sequelize.define('Decoration', {
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vendor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estimatedCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT, // Detailed description of the decorations
    allowNull: true,
  },
});

module.exports = Decoration;
