const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testnode', 'root', 'Bhargav42@', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 5,
    idle: 10000,
    evict: 15000,
    acquire: 30000
  }
});
module.exports=sequelize;