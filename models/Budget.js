const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Budget = sequelize.define('Budget', {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estimatedCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
    },
  },
  actualCost: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      isFloat: true,
    },
  },
  paidStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Budget;
