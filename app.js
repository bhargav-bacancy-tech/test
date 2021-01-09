var express = require('express');
const sequelize =require('./connection');
const Sequelize = require('sequelize');
var app = express();
sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
});
  
app.listen(3000, function () {
    console.log('Test app listening on port 3000!');
});