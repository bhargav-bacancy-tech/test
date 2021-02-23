var express = require('express');
const sequelize =require('./connection');
const Sequelize = require('sequelize');
const User = require('./user')
const cruduser = require('./crud_user')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
//app.use(User)
app.use('/',cruduser);
sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })

sequelize
.sync()
.then(result=>{
  //  console.log(result)
    app.listen(3000)
})        
.catch(err=>{
    console.log(err)
})


  
// app.listen(3000, function () {
//     console.log('Test app listening on port 3000!');
// });