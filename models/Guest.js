const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Guest = sequelize.define('Guest', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rsvp: {
    type: DataTypes.ENUM('yes', 'no', 'maybe'),
    defaultValue: 'maybe',
  },
});

module.exports = Guest;
