const { User } = require('../models/userModel');

// const addUser = async (req, res) => {
//   let info = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password,
//     role: req.body.role,
//   };
//   // console.log(hashed);
//   const user = await User.create(info);
//   console.log(req.body);
//   // console.log(user);
//   res.status(200).send(user);
// };

const getUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.user.id,
    },
  });
  res.status(200).send(user);
};

const allUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
};

const deleteUser = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send('User Deleted');
};

const hi = async (req, res) => {
  res.json('HI ');
};

module.exports = { allUsers, deleteUser, hi, getUser };
