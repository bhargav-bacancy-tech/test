var express = require('express');
const sequelize =require('./connection');
const Sequelize = require('sequelize');
const User = require('./user')
const cruduser = require('./crud_user')
var app = express();
//app.use(User)

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
    cruduser.addUser();
})        
.catch(err=>{
    console.log(err)
})

app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
});
  
// app.listen(3000, function () {
//     console.log('Test app listening on port 3000!');
// });