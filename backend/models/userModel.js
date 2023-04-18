const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { db } = require('../db');

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 32,
  },
  lastName: {
    type: DataTypes.STRING,
    max: 40,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    min: 8,
    max: 32,
  },
  role: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['user', 'recruiter', 'admin']],
    },
    defaultValue: 'user',
  },
});

User.beforeCreate(async (user) => {
  const hashPassword = await bcrypt.hash(user.password, 10);
  user.password = hashPassword;
});

module.exports = { User };
