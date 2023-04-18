const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { User } = require('../models/userModel');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!(firstName && lastName && email && password)) {
      res.status(400).send('All the fields are mandatory!!');
    }

    // Check if the user already exists
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      res.status(400).send('User already exists with this email ID!');
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    // generate a JWT token for a user to send
    const token = createToken(user.id);
    user.password = undefined;

    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

    // user.token = token;
    // console.log(token);
    console.log(req.cookies);
    // don't want to send this to the frontend
    user.password = undefined;

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send('Enter the Login credentials correctly!!');
    }

    //find user in database
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!(user && (await bcrypt.compare(password, user.password)))) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    // console.log(bcrypt.compare(password, user.password))

    const token = createToken(user.id);
    user.password = undefined;

    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

    // user.token = token;
    // console.log(token);
    // const cookies = req.cookies;
    // console.log(cookies);
    // const options = {
    //   expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    //   httpOnly: true,
    // };

    res.status(200).json({ message: 'Welcome Back!', token: token });
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.json({ message: 'Bye' });
};

const read = (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
};

module.exports = { signUp, login, read, logout };
