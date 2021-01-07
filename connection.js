const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testfornode', 'root', 'Bhargav42@', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  pool: {
    max: 15,
    min: 5,
    idle: 10000,
    evict: 15000,
    acquire: 30000
  }
});
module.exports=sequelize;