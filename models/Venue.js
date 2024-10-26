const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Venue = sequelize.define('Venue', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Venue;
