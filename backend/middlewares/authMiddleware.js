const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models/userModel');
const AppError = require('./AppError');

exports.isAuthenticated = async (req, res, next) => {
  const token = req.cookies.jwt;

  // Make sure token exists
  if (!token) {
    return next(
      new AppError('Not authorized to access this route, coz no token', 401)
    );
  }

  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    console.log(decoded.id);
    // console.log(req.body);

    req.user = await User.findByPk(decoded.id);
    console.log(id);
    next();
  } catch (error) {
    return next(
      new AppError('Not authorized to access this route, coz catch', 401)
    );
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(new AppError('You must be an admin', 401));
  }
};
// module.exports = { checkUser }
