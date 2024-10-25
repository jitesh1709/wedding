const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Music = sequelize.define('Music', {
  serviceType: {
    type: DataTypes.STRING, // e.g., DJ, Live Band
    allowNull: false,
  },
  playlist: {
    type: DataTypes.TEXT, // or JSON for a structured playlist
    allowNull: true,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Music;
