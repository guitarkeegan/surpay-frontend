const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}:3306/surpay`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });