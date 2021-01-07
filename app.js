var express = require('express');
const conn =require('./connection');
const sequelize = require('sequelize');
var app = express();
conn
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
});
  
app.listen(3306, function () {
    console.log('Test app listening on port 3306!');
});