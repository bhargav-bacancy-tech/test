const express = require('express');
const users= require('../Models/user');
var router = express.Router();
const {addUser,updateUser,deleteUser,getUser}= require('../controller/user_controller');
router.post('/addUser',addUser); //inserting new user in the database
router.post('/updateUser',updateUser); // updating values of user in database
router.post('/deleteUser',deleteUser);//deleting user's instance from database 
router.get('/getUser',getUser); //fatch user's data from database

module.exports= router;