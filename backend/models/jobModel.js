const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Job = db.define('Job', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 70,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  jobType: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 8,
    max: 32,
  },
});

module.exports = { Job };
