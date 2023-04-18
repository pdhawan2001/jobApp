const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,

    // logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// const db = {};
db.sync({ force: false }).then(() => {
  console.log('Re-sync done!!');
});

module.exports = { db };
// try {
//   db.authenticate();
//   console.log('Connection Established');
// } catch (error) {
//   console.error('Maa chud gayi!!');
// }
